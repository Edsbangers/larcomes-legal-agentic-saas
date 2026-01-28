"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { auditStats, sampleLeads, legalUpdates } from "@/lib/data";
import {
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Smartphone,
  Monitor,
  MessageCircle,
  Newspaper,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

const overviewCards = [
  {
    title: "Total Visits",
    value: auditStats.totalVisits.toLocaleString(),
    change: "+8.2%",
    trend: "up" as const,
    icon: Eye,
  },
  {
    title: "Bounce Rate",
    value: `${auditStats.bounceRate}%`,
    change: "-2.1%",
    trend: "down" as const,
    icon: TrendingUp,
  },
  {
    title: "Mobile Traffic",
    value: `${auditStats.mobileTrafficPercent}%`,
    change: "+3.4%",
    trend: "up" as const,
    icon: Smartphone,
  },
  {
    title: "Active Leads",
    value: sampleLeads.filter((l) => l.status !== "closed").length.toString(),
    change: "+2",
    trend: "up" as const,
    icon: Users,
  },
];

export default function DashboardOverview() {
  const newLeads = sampleLeads.filter((l) => l.status === "new");
  const recentUpdates = legalUpdates.filter((u) => u.status === "new");
  const highUrgency = sampleLeads.filter((l) => l.urgency === "high");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-charcoal">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Real-time insights across analytics, leads, and legal updates.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewCards.map((card) => (
          <Card key={card.title} className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <card.icon className="h-4 w-4 text-gold" />
                </div>
                <div
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    card.trend === "up"
                      ? card.title === "Bounce Rate"
                        ? "text-red-500"
                        : "text-emerald-600"
                      : card.title === "Bounce Rate"
                        ? "text-emerald-600"
                        : "text-red-500"
                  }`}
                >
                  {card.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {card.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-charcoal">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Two Column Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Device Split */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Monitor className="h-4 w-4 text-gold" />
              Traffic by Device
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-gold" />
                  <span>Mobile</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">
                    {auditStats.mobileTrafficPercent}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Conv: {auditStats.conversionRates.mobile}%
                  </span>
                </div>
              </div>
              <Progress value={auditStats.mobileTrafficPercent} className="h-2" />

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-charcoal/60" />
                  <span>Desktop</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">
                    {auditStats.desktopTrafficPercent}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Conv: {auditStats.conversionRates.desktop}%
                  </span>
                </div>
              </div>
              <Progress
                value={auditStats.desktopTrafficPercent}
                className="h-2"
              />
            </div>

            <div className="rounded-lg bg-secondary/50 p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-charcoal">
                    Mobile conversion gap:
                  </span>{" "}
                  Desktop converts at{" "}
                  {(
                    auditStats.conversionRates.desktop /
                    auditStats.conversionRates.mobile
                  ).toFixed(1)}
                  x the mobile rate. Consider optimising mobile journeys.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <MessageCircle className="h-4 w-4 text-gold" />
                New Leads
              </CardTitle>
              <Link
                href="/partner-dashboard/pipeline"
                className="text-xs font-medium text-gold hover:underline"
              >
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {newLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-start gap-3 rounded-lg border border-border/50 p-3"
                >
                  <div
                    className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                      lead.urgency === "high"
                        ? "bg-red-500"
                        : lead.urgency === "medium"
                          ? "bg-gold"
                          : "bg-emerald-500"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-charcoal">
                        {lead.name}
                      </p>
                      <Badge variant="secondary" className="text-[10px]">
                        {lead.practiceArea}
                      </Badge>
                    </div>
                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      {lead.summary}
                    </p>
                  </div>
                </div>
              ))}
              {newLeads.length === 0 && (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  No new leads at this time.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Legal Updates */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Newspaper className="h-4 w-4 text-gold" />
                Legal Update Scout
              </CardTitle>
              <Link
                href="/partner-dashboard/legal-updates"
                className="text-xs font-medium text-gold hover:underline"
              >
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUpdates.map((update) => (
                <div
                  key={update.id}
                  className="rounded-lg border border-border/50 p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-charcoal">
                      {update.title}
                    </p>
                    <Badge
                      variant={
                        update.impact === "high" ? "destructive" : "secondary"
                      }
                      className="shrink-0 text-[10px]"
                    >
                      {update.impact}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {update.source} &bull;{" "}
                    {new Date(update.publishedAt).toLocaleDateString("en-GB")}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Priority Matters */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-gold" />
              Priority Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {highUrgency.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    {lead.status === "instructed" ? (
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Clock className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-charcoal">
                      {lead.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {lead.practiceArea} &bull; {lead.status}
                    </p>
                  </div>
                  <Badge variant="outline" className="border-red-200 text-[10px] text-red-600">
                    Urgent
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
