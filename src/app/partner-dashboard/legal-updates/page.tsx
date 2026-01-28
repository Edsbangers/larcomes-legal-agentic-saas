"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScout } from "@/lib/scout-context";
import { LinkedInDraftCard } from "@/components/linkedin-draft-card";
import { ScoutFeed } from "@/components/scout-feed";
import {
  ExternalLink,
  AlertTriangle,
  Eye,
  Send,
  X,
  RefreshCw,
  Radio,
  Newspaper,
  Zap,
} from "lucide-react";

export default function LegalUpdatesPage() {
  const {
    events,
    discoveredUpdates,
    isScanning,
    lastScanTime,
    nextScanTime,
    newCount,
    triggerScan,
    updateStatus,
  } = useScout();

  const statusCounts = {
    new: discoveredUpdates.filter((u) => u.status === "new").length,
    reviewed: discoveredUpdates.filter((u) => u.status === "reviewed").length,
    published: discoveredUpdates.filter((u) => u.status === "published").length,
    dismissed: discoveredUpdates.filter((u) => u.status === "dismissed").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-charcoal">
              Legal Update Scout
            </h1>
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <Radio
                  className={`h-4 w-4 ${isScanning ? "text-emerald-500" : "text-gold"}`}
                />
                {isScanning && (
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-500 scout-pulse" />
                )}
              </div>
              <Badge
                variant="outline"
                className={`text-[10px] ${isScanning ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-gold/30 bg-gold/10 text-gold-dark"}`}
              >
                {isScanning ? "Scanning..." : "Idle"}
              </Badge>
            </div>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Automated monitoring of The Law Society and UK Government feeds.
            AI-drafted LinkedIn posts with non-branded keyword alignment.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 shrink-0"
          onClick={triggerScan}
          disabled={isScanning}
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${isScanning ? "scout-scanning" : ""}`}
          />
          Scan Now
        </Button>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "New", count: statusCounts.new, color: "bg-blue-500" },
          { label: "Reviewed", count: statusCounts.reviewed, color: "bg-gold" },
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

      {/* Tabs */}
      <Tabs defaultValue="updates">
        <TabsList>
          <TabsTrigger value="updates" className="gap-1.5">
            <Newspaper className="h-3.5 w-3.5" />
            Updates
            <Badge
              variant="secondary"
              className="ml-1 h-5 min-w-5 rounded-full px-1.5 text-[10px]"
            >
              {discoveredUpdates.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="scout-activity" className="gap-1.5">
            <Zap className="h-3.5 w-3.5" />
            Scout Activity
            {newCount > 0 && (
              <Badge className="ml-1 h-5 min-w-5 rounded-full bg-gold px-1.5 text-[10px] text-charcoal border-0">
                {newCount}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        {/* Updates Tab */}
        <TabsContent value="updates" className="mt-4 space-y-4">
          {discoveredUpdates.map((update) => (
            <Card
              key={update.id}
              className={`border-border/50 transition-all ${update.isNew ? "scout-entry-animate ring-1 ring-gold/50" : ""}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {update.isNew && (
                        <Badge className="text-[10px] bg-emerald-500 text-white border-0 scout-pulse">
                          NEW
                        </Badge>
                      )}
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
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                      </span>
                      {update.discoveredAt !== update.publishedAt && (
                        <>
                          <span>&bull;</span>
                          <span className="text-gold">
                            Discovered{" "}
                            {new Date(update.discoveredAt).toLocaleTimeString(
                              "en-GB",
                              { hour: "2-digit", minute: "2-digit" }
                            )}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-charcoal/80">
                  {update.summary}
                </p>

                <Separator />

                {/* LinkedIn Draft Card */}
                <LinkedInDraftCard
                  draft={update.linkedInDraft}
                  updateTitle={update.title}
                />

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  {update.status !== "published" && (
                    <Button
                      size="sm"
                      className="gap-1.5 text-xs gold-gradient border-0 text-charcoal"
                      onClick={() => updateStatus(update.id, "published")}
                    >
                      <Send className="h-3 w-3" />
                      Publish to Social
                    </Button>
                  )}
                  {update.status === "new" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 text-xs"
                      onClick={() => updateStatus(update.id, "reviewed")}
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
                      onClick={() => updateStatus(update.id, "dismissed")}
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
        </TabsContent>

        {/* Scout Activity Tab */}
        <TabsContent value="scout-activity" className="mt-4">
          <ScoutFeed
            events={events}
            isScanning={isScanning}
            lastScanTime={lastScanTime}
            nextScanTime={nextScanTime}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
