"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type {
  ScoutEvent,
  ScoutLegalUpdate,
  UseScoutAgentReturn,
} from "@/lib/scout-types";
import {
  scoutDiscoveryPool,
  scoutSources,
  existingLinkedInDrafts,
} from "@/lib/scout-data";
import { legalUpdates } from "@/lib/data";

const SCAN_INTERVAL_MS = 20_000;

function makeId() {
  return `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

function pickSources(): [string, string] {
  const shuffled = [...scoutSources].sort(() => Math.random() - 0.5);
  return [shuffled[0].name, shuffled[1].name];
}

/** Convert existing static legalUpdates to ScoutLegalUpdate format */
function seedUpdates(): ScoutLegalUpdate[] {
  return legalUpdates.map((u) => ({
    ...u,
    discoveredAt: u.publishedAt,
    linkedInDraft: existingLinkedInDrafts[u.id] ?? {
      hook: "",
      body: u.summary,
      callToAction: "Contact Larcomes Solicitors for expert advice.",
      hashtags: [],
      nonBrandedKeywords: [],
      practiceArea: "",
      estimatedReadTime: "< 1 min read",
    },
  }));
}

export function useScoutAgent(): UseScoutAgentReturn {
  const [events, setEvents] = useState<ScoutEvent[]>([]);
  const [discoveredUpdates, setDiscoveredUpdates] =
    useState<ScoutLegalUpdate[]>(seedUpdates);
  const [isScanning, setIsScanning] = useState(false);
  const [lastScanTime, setLastScanTime] = useState<string | null>(null);
  const [nextScanTime, setNextScanTime] = useState<string | null>(null);

  const discoveryIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const mountedRef = useRef(true);

  const pushEvent = useCallback(
    (type: ScoutEvent["type"], message: string, source?: string, relatedUpdateId?: string) => {
      if (!mountedRef.current) return;
      setEvents((prev) => [
        {
          id: makeId(),
          timestamp: new Date().toISOString(),
          type,
          source,
          message,
          relatedUpdateId,
        },
        ...prev.slice(0, 49), // Keep last 50 events
      ]);
    },
    []
  );

  const runScanCycle = useCallback(() => {
    if (!mountedRef.current) return;

    const [source1, source2] = pickSources();
    const poolItem = scoutDiscoveryPool[discoveryIndexRef.current];
    const hasDiscovery = !!poolItem;

    setIsScanning(true);
    setLastScanTime(new Date().toISOString());

    // Step 1: T+0s — scanning first source
    pushEvent("scanning", `Scanning ${source1}...`, source1);

    const t1 = setTimeout(() => {
      if (!mountedRef.current) return;
      // Step 2: T+2s — scanning second source
      pushEvent("scanning", `Scanning ${source2}...`, source2);
    }, 2000);

    const t2 = setTimeout(() => {
      if (!mountedRef.current) return;
      if (hasDiscovery) {
        // Step 3: T+4s — found something
        pushEvent(
          "discovered",
          `New update found: "${poolItem.title}"`,
          poolItem.source,
          poolItem.id
        );
      } else {
        pushEvent("idle", "Scan complete — no new updates found.");
        setIsScanning(false);
        setNextScanTime(
          new Date(Date.now() + SCAN_INTERVAL_MS).toISOString()
        );
      }
    }, 4000);

    const t3 = setTimeout(() => {
      if (!mountedRef.current || !hasDiscovery) return;
      // Step 4: T+5s — analyzing
      pushEvent(
        "analyzing",
        `Analyzing impact and relevance: "${poolItem.title}"`,
        undefined,
        poolItem.id
      );
    }, 5000);

    const t4 = setTimeout(() => {
      if (!mountedRef.current || !hasDiscovery) return;
      // Step 5: T+7s — drafting
      pushEvent(
        "drafting",
        `Generating LinkedIn post draft for "${poolItem.title}"...`,
        undefined,
        poolItem.id
      );
    }, 7000);

    const t5 = setTimeout(() => {
      if (!mountedRef.current || !hasDiscovery) return;
      // Step 6: T+9s — complete
      const newUpdate: ScoutLegalUpdate = {
        ...poolItem,
        discoveredAt: new Date().toISOString(),
        isNew: true,
      };

      pushEvent(
        "complete",
        `LinkedIn draft ready for "${poolItem.title}"`,
        undefined,
        poolItem.id
      );

      setDiscoveredUpdates((prev) => [newUpdate, ...prev]);
      discoveryIndexRef.current += 1;
      setIsScanning(false);
      setNextScanTime(
        new Date(Date.now() + SCAN_INTERVAL_MS).toISOString()
      );
    }, 9000);

    // Clear isNew flag after 3 more seconds
    const t6 = setTimeout(() => {
      if (!mountedRef.current || !hasDiscovery) return;
      setDiscoveredUpdates((prev) =>
        prev.map((u) =>
          u.id === poolItem.id ? { ...u, isNew: false } : u
        )
      );
    }, 12000);

    timeoutsRef.current.push(t1, t2, t3, t4, t5, t6);
  }, [pushEvent]);

  const triggerScan = useCallback(() => {
    // Clear existing interval and start fresh
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    runScanCycle();

    intervalRef.current = setInterval(runScanCycle, SCAN_INTERVAL_MS);
  }, [runScanCycle]);

  const updateStatus = useCallback(
    (id: string, status: ScoutLegalUpdate["status"]) => {
      setDiscoveredUpdates((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status } : u))
      );
    },
    []
  );

  // Auto-start the cron on mount
  useEffect(() => {
    mountedRef.current = true;

    // Initial scan after a short delay
    const startDelay = setTimeout(() => {
      if (!mountedRef.current) return;
      runScanCycle();
      intervalRef.current = setInterval(runScanCycle, SCAN_INTERVAL_MS);
    }, 3000);

    return () => {
      mountedRef.current = false;
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [runScanCycle]);

  const newCount = discoveredUpdates.filter((u) => u.isNew).length;

  return {
    events,
    discoveredUpdates,
    isScanning,
    lastScanTime,
    nextScanTime,
    newCount,
    triggerScan,
    updateStatus,
  };
}
