"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { legalUpdates, type LegalUpdate } from "@/lib/data";
import {
  Newspaper,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Eye,
  Send,
  X,
  RefreshCw,
  Sparkles,
  Clock,
} from "lucide-react";

export default function LegalUpdatesPage() {
  const [updates, setUpdates] = useState<LegalUpdate[]>(legalUpdates);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedUpdate, setSelectedUpdate] = useState<LegalUpdate | null>(
    null
  );

  const handleCopyDraft = (update: LegalUpdate) => {
    navigator.clipboard.writeText(update.draftAlert);
    setCopiedId(update.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleStatusChange = (
    id: string,
    newStatus: LegalUpdate["status"]
  ) => {
    setUpdates((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: newStatus } : u))
    );
  };

  const statusCounts = {
    new: updates.filter((u) => u.status === "new").length,
    reviewed: updates.filter((u) => u.status === "reviewed").length,
    published: updates.filter((u) => u.status === "published").length,
    dismissed: updates.filter((u) => u.status === "dismissed").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-charcoal">
            Legal Update Scout
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Automated monitoring of The Law Society and UK Government feeds.
            AI-drafted social media alerts for partner review.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Scan Now
        </Button>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          {
            label: "New",
            count: statusCounts.new,
            color: "bg-blue-500",
          },
          {
            label: "Reviewed",
            count: statusCounts.reviewed,
            color: "bg-gold",
          },
          {
            label: "Published",
            count: statusCounts.published,
            color: "bg-emerald-500",
          },
          {
            label: "Dismissed",
            count: statusCounts.dismissed,
            color: "bg-muted-foreground",
          },
        ].map((s) => (
          <Card key={s.label} className="border-border/50">
            <CardContent className="flex items-center gap-3 p-4">
              <div className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
              <div>
                <p className="text-lg font-bold text-charcoal">{s.count}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Updates List */}
      <div className="space-y-4">
        {updates.map((update) => (
          <Card
            key={update.id}
            className={`border-border/50 transition-all ${
              selectedUpdate?.id === update.id ? "ring-1 ring-gold" : ""
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge
                      variant={
                        update.impact === "high"
                          ? "destructive"
                          : update.impact === "medium"
                            ? "default"
                            : "secondary"
                      }
                      className={`text-[10px] ${update.impact === "medium" ? "gold-gradient border-0 text-charcoal" : ""}`}
                    >
                      {update.impact === "high" && (
                        <AlertTriangle className="mr-1 h-3 w-3" />
                      )}
                      {update.impact} impact
                    </Badge>
                    <Badge variant="outline" className="text-[10px]">
                      {update.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`text-[10px] ${
                        update.status === "new"
                          ? "bg-blue-50 text-blue-700"
                          : update.status === "published"
                            ? "bg-emerald-50 text-emerald-700"
                            : update.status === "dismissed"
                              ? "bg-muted text-muted-foreground"
                              : ""
                      }`}
                    >
                      {update.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{update.title}</CardTitle>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{update.source}</span>
                    <span>&bull;</span>
                    <span>
                      {new Date(update.publishedAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-charcoal/80">
                {update.summary}
              </p>

              <Separator />

              {/* AI Draft Alert */}
              <div className="rounded-lg border border-gold/20 bg-secondary/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  <span className="text-xs font-semibold text-gold">
                    AI-Drafted Social Alert
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-charcoal/70">
                  {update.draftAlert}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5 text-xs"
                  onClick={() => handleCopyDraft(update)}
                >
                  {copiedId === update.id ? (
                    <Check className="h-3 w-3 text-emerald-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copiedId === update.id ? "Copied" : "Copy Draft"}
                </Button>
                {update.status !== "published" && (
                  <Button
                    size="sm"
                    className="gap-1.5 text-xs gold-gradient border-0 text-charcoal"
                    onClick={() => handleStatusChange(update.id, "published")}
                  >
                    <Send className="h-3 w-3" />
                    Publish Alert
                  </Button>
                )}
                {update.status === "new" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5 text-xs"
                    onClick={() => handleStatusChange(update.id, "reviewed")}
                  >
                    <Eye className="h-3 w-3" />
                    Mark Reviewed
                  </Button>
                )}
                {update.status !== "dismissed" && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1.5 text-xs text-muted-foreground"
                    onClick={() => handleStatusChange(update.id, "dismissed")}
                  >
                    <X className="h-3 w-3" />
                    Dismiss
                  </Button>
                )}
                <a
                  href={update.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1.5 text-xs text-muted-foreground"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Source
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scan Info */}
      <Card className="border-border/50 bg-secondary/30">
        <CardContent className="flex items-center gap-3 p-4">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            Last automated scan: 27 Jan 2026, 08:45 GMT &bull; Sources: The Law
            Society RSS, UK Government Legislation Feed &bull; Next scan
            scheduled: 28 Jan 2026, 08:00 GMT
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
