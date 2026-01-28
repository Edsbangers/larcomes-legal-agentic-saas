export type ScoutEventType =
  | "scanning"
  | "discovered"
  | "analyzing"
  | "drafting"
  | "complete"
  | "idle";

export interface ScoutEvent {
  id: string;
  timestamp: string;
  type: ScoutEventType;
  source?: string;
  message: string;
  relatedUpdateId?: string;
}

export interface LinkedInDraft {
  hook: string;
  body: string;
  callToAction: string;
  hashtags: string[];
  nonBrandedKeywords: string[];
  practiceArea: string;
  estimatedReadTime: string;
}

export interface ScoutLegalUpdate {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  discoveredAt: string;
  category: string;
  summary: string;
  impact: "low" | "medium" | "high";
  draftAlert: string;
  linkedInDraft: LinkedInDraft;
  status: "new" | "reviewed" | "published" | "dismissed";
  isNew?: boolean;
}

export interface UseScoutAgentReturn {
  events: ScoutEvent[];
  discoveredUpdates: ScoutLegalUpdate[];
  isScanning: boolean;
  lastScanTime: string | null;
  nextScanTime: string | null;
  newCount: number;
  triggerScan: () => void;
  updateStatus: (
    id: string,
    status: ScoutLegalUpdate["status"]
  ) => void;
}
