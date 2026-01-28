"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auditStats } from "@/lib/data";
import {
  BarChart3,
  Smartphone,
  Monitor,
  Search,
  Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MousePointerClick,
  Globe,
  Target,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const GOLD = "#C5A55A";
const CHARCOAL = "#1C1C1E";
const CHARCOAL_LIGHT = "#6B6B6E";
const GOLD_LIGHT = "#D4BA7A";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-charcoal">Live Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Visualising {auditStats.totalVisits.toLocaleString()} total visits
          with {auditStats.mobileTrafficPercent}% mobile traffic dominance.
        </p>
      </div>

      {/* Top KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          {
            title: "Total Visits",
            value: auditStats.totalVisits.toLocaleString(),
            icon: Eye,
            change: "+8.2%",
            up: true,
          },
          {
            title: "Bounce Rate",
            value: `${auditStats.bounceRate}%`,
            icon: TrendingUp,
            change: "-2.1%",
            up: false,
          },
          {
            title: "Avg Session",
            value: auditStats.avgSessionDuration,
            icon: MousePointerClick,
            change: "+12s",
            up: true,
          },
          {
            title: "Pages/Session",
            value: auditStats.pagesPerSession.toString(),
            icon: Globe,
            change: "+0.3",
            up: true,
          },
          {
            title: "Conversion Rate",
            value: `${auditStats.conversionRates.overall}%`,
            icon: Target,
            change: "+0.4%",
            up: true,
          },
        ].map((kpi) => (
          <Card key={kpi.title} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <kpi.icon className="h-4 w-4 text-gold" />
                <span
                  className={`flex items-center text-[11px] font-medium ${
                    kpi.up ? "text-emerald-600" : "text-emerald-600"
                  }`}
                >
                  {kpi.up ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {kpi.change}
                </span>
              </div>
              <p className="mt-2 text-xl font-bold text-charcoal">
                {kpi.value}
              </p>
              <p className="text-[11px] text-muted-foreground">{kpi.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Monthly Traffic */}
        <Card className="border-border/50 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="h-4 w-4 text-gold" />
              Monthly Traffic & Conversions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={auditStats.monthlyVisits}>
                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={GOLD} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E5E7"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11, fill: CHARCOAL_LIGHT }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: CHARCOAL_LIGHT }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E5E5E7",
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="visits"
                    stroke={GOLD}
                    strokeWidth={2}
                    fill="url(#goldGrad)"
                    name="Visits"
                  />
                  <Line
                    type="monotone"
                    dataKey="conversions"
                    stroke={CHARCOAL}
                    strokeWidth={2}
                    dot={{ r: 3, fill: CHARCOAL }}
                    name="Conversions"
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    iconType="circle"
                    wrapperStyle={{ fontSize: 11 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown Pie */}
        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Smartphone className="h-4 w-4 text-gold" />
              Device Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={auditStats.deviceBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="percent"
                    nameKey="device"
                  >
                    <Cell fill={GOLD} />
                    <Cell fill={CHARCOAL} />
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E5E5E7",
                      fontSize: 12,
                    }}
                    formatter={(value) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-gold" />
                <span>Mobile {auditStats.mobileTrafficPercent}%</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-charcoal" />
                <span>Desktop {auditStats.desktopTrafficPercent}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Mobile vs Desktop Conversion */}
        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-4 w-4 text-gold" />
                Conversion: Mobile vs Desktop
              </CardTitle>
              <Badge variant="outline" className="border-gold/20 text-[10px] text-gold">
                71.54% mobile traffic
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {
                      device: "Mobile",
                      rate: auditStats.conversionRates.mobile,
                      traffic: auditStats.mobileTrafficPercent,
                    },
                    {
                      device: "Desktop",
                      rate: auditStats.conversionRates.desktop,
                      traffic: auditStats.desktopTrafficPercent,
                    },
                  ]}
                  layout="vertical"
                  margin={{ left: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E5E7"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 11, fill: CHARCOAL_LIGHT }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="device"
                    tick={{ fontSize: 12, fill: CHARCOAL }}
                    axisLine={false}
                    tickLine={false}
                    width={60}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E5E5E7",
                      fontSize: 12,
                    }}
                    formatter={(value, name) => [
                      `${value}%`,
                      name === "rate" ? "Conversion Rate" : "Traffic Share",
                    ]}
                  />
                  <Bar
                    dataKey="rate"
                    fill={GOLD}
                    radius={[0, 4, 4, 0]}
                    name="Conversion Rate"
                    barSize={24}
                  />
                  <Bar
                    dataKey="traffic"
                    fill={CHARCOAL}
                    radius={[0, 4, 4, 0]}
                    name="Traffic Share"
                    barSize={24}
                  />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    wrapperStyle={{ fontSize: 11 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 rounded-lg bg-secondary/50 p-3">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-charcoal">Key insight:</span>{" "}
                Desktop users convert at{" "}
                {auditStats.conversionRates.desktop}% vs mobile at{" "}
                {auditStats.conversionRates.mobile}%. With{" "}
                {auditStats.mobileTrafficPercent}% of traffic on mobile,
                improving mobile conversion by just 1% could yield significant
                lead growth.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Search Visibility */}
        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Search className="h-4 w-4 text-gold" />
              Search Visibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={auditStats.searchVisibility}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="percent"
                    nameKey="type"
                  >
                    <Cell fill={GOLD} />
                    <Cell fill={CHARCOAL_LIGHT} />
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E5E5E7",
                      fontSize: 12,
                    }}
                    formatter={(value) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-gold" />
                <span>Non-Branded 99%</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-charcoal-muted" />
                <span>Branded 1%</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-secondary/50 p-3">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-charcoal">99% Non-Branded dominance</span>{" "}
                indicates strong organic visibility for legal queries rather
                than brand awareness. Consider investing in brand campaigns to
                balance acquisition channels.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages Table */}
      <Card className="border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Globe className="h-4 w-4 text-gold" />
            Top Pages by Views
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left font-medium text-muted-foreground">
                    Page
                  </th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">
                    Views
                  </th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">
                    Bounce Rate
                  </th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">
                    Share
                  </th>
                </tr>
              </thead>
              <tbody>
                {auditStats.topPages.map((page) => (
                  <tr key={page.path} className="border-b border-border/50">
                    <td className="py-3 font-medium text-charcoal">
                      {page.path}
                    </td>
                    <td className="py-3 text-right tabular-nums">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="py-3 text-right tabular-nums">
                      {page.bounceRate}%
                    </td>
                    <td className="py-3 text-right tabular-nums text-muted-foreground">
                      {((page.views / auditStats.totalVisits) * 100).toFixed(1)}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
