"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import type { ScoutEvent } from "@/lib/scout-types";
import {
  RefreshCw,
  Sparkles,
  Brain,
  PenTool,
  CheckCircle,
  Clock,
  Radio,
} from "lucide-react";

interface ScoutFeedProps {
  events: ScoutEvent[];
  isScanning: boolean;
  lastScanTime: string | null;
  nextScanTime: string | null;
}

const eventConfig: Record<
  ScoutEvent["type"],
  {
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    label: string;
  }
> = {
  scanning: {
    icon: RefreshCw,
    color: "text-gold",
    bgColor: "bg-gold/10",
    label: "Scanning",
  },
  discovered: {
    icon: Sparkles,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    label: "Discovered",
  },
  analyzing: {
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    label: "Analyzing",
  },
  drafting: {
    icon: PenTool,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    label: "Drafting",
  },
  complete: {
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    label: "Complete",
  },
  idle: {
    icon: Clock,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    label: "Idle",
  },
};

function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function timeAgo(iso: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(iso).getTime()) / 1000
  );
  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  return `${Math.floor(seconds / 3600)}h ago`;
}

export function ScoutFeed({
  events,
  isScanning,
  lastScanTime,
  nextScanTime,
}: ScoutFeedProps) {
  return (
    <div className="space-y-4">
      {/* Status Bar */}
      <div className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Radio
              className={`h-4 w-4 ${isScanning ? "text-emerald-500" : "text-gold"}`}
            />
            {isScanning && (
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-500 scout-pulse" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">
              LegalScout Agent{" "}
              <span
                className={`text-xs font-medium ${isScanning ? "text-emerald-600" : "text-gold"}`}
              >
                {isScanning ? "Scanning..." : "Idle"}
              </span>
            </p>
            <p className="text-[10px] text-muted-foreground">
              {lastScanTime
                ? `Last scan: ${formatTime(lastScanTime)}`
                : "Initialising..."}
              {nextScanTime &&
                !isScanning &&
                ` · Next: ${formatTime(nextScanTime)}`}
            </p>
          </div>
        </div>
        <Badge
          variant="outline"
          className={`text-[10px] ${isScanning ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-gold/30 bg-gold/10 text-gold-dark"}`}
        >
          {events.length} events logged
        </Badge>
      </div>

      {/* Event Feed */}
      <ScrollArea className="h-[460px]">
        <div className="space-y-2 pr-3">
          {events.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Radio className="h-8 w-8 text-muted-foreground/30" />
              <p className="mt-3 text-sm font-medium text-charcoal/60">
                Waiting for first scan...
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                The LegalScout agent will begin scanning legal sources shortly.
              </p>
            </div>
          )}

          {events.map((event, i) => {
            const config = eventConfig[event.type];
            const Icon = config.icon;

            return (
              <div
                key={event.id}
                className={`flex items-start gap-3 rounded-lg border border-border/30 p-3 transition-all ${i === 0 ? "scout-entry-animate" : ""} ${event.type === "discovered" ? "border-emerald-200/50 bg-emerald-50/30" : event.type === "complete" ? "border-emerald-200/50 bg-emerald-50/20" : "bg-white"}`}
              >
                {/* Icon */}
                <div
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${config.bgColor}`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${config.color} ${event.type === "scanning" ? "scout-scanning" : ""}`}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={`text-[9px] ${config.bgColor} ${config.color} border-0`}
                    >
                      {config.label}
                    </Badge>
                    {event.source && (
                      <span className="text-[10px] text-muted-foreground">
                        {event.source}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal/80">
                    {event.message}
                  </p>
                </div>

                {/* Timestamp */}
                <span className="shrink-0 text-[10px] text-muted-foreground">
                  {timeAgo(event.timestamp)}
                </span>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
