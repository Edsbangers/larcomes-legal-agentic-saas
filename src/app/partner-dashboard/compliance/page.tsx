"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { auditLog, type AuditLogEntry } from "@/lib/data";
import {
  Shield,
  Lock,
  Globe,
  FileText,
  AlertTriangle,
  Info,
  Search,
  Download,
  Filter,
  CheckCircle,
  XCircle,
  Server,
  Database,
  Eye,
} from "lucide-react";

export default function CompliancePage() {
  const [ukOnly, setUkOnly] = useState(true);
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLog = auditLog.filter((entry) => {
    const matchesLevel =
      filterLevel === "all" || entry.riskLevel === filterLevel;
    const matchesSearch =
      !searchQuery ||
      entry.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const riskIcon = (level: AuditLogEntry["riskLevel"]) => {
    switch (level) {
      case "critical":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-gold" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const riskBadgeClass = (level: AuditLogEntry["riskLevel"]) => {
    switch (level) {
      case "critical":
        return "border-red-200 bg-red-50 text-red-700";
      case "warning":
        return "border-gold/30 bg-gold/10 text-gold-dark";
      case "info":
        return "border-blue-200 bg-blue-50 text-blue-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-charcoal">
          Compliance & Security
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          ISO 27001 controls, data residency management, and comprehensive audit
          logging.
        </p>
      </div>

      {/* Compliance Status Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "ISO 27001",
            status: "Certified",
            icon: Shield,
            detail: "Last audit: Nov 2025",
            ok: true,
          },
          {
            title: "GDPR",
            status: "Compliant",
            icon: Lock,
            detail: "DPO: A. Patel",
            ok: true,
          },
          {
            title: "Data Residency",
            status: ukOnly ? "UK Only" : "Global",
            icon: Globe,
            detail: ukOnly ? "AWS eu-west-2" : "Multi-region",
            ok: true,
          },
          {
            title: "SRA Regulated",
            status: "Active",
            icon: FileText,
            detail: "SRA ID: 12345",
            ok: true,
          },
        ].map((item) => (
          <Card key={item.title} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <item.icon className="h-5 w-5 text-gold" />
                <CheckCircle className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="mt-3 text-sm font-semibold text-charcoal">
                {item.title}
              </p>
              <p className="text-xs text-gold font-medium">{item.status}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                {item.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Data Residency Toggle */}
      <Card className="border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Database className="h-4 w-4 text-gold" />
            Data Residency Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start justify-between gap-4 rounded-lg border border-border/50 bg-secondary/30 p-4">
            <div className="flex items-start gap-3">
              <Server className="mt-0.5 h-5 w-5 text-gold" />
              <div>
                <p className="text-sm font-semibold text-charcoal">
                  UK-Only Data Storage
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  When enabled, all client data, documents, and communications
                  are stored exclusively in UK-based data centres (AWS
                  eu-west-2, London). This satisfies ISO 27001 Annex A.11 and
                  GDPR Article 44 requirements.
                </p>
              </div>
            </div>
            <Switch
              checked={ukOnly}
              onCheckedChange={setUkOnly}
              className="shrink-0"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-charcoal">
                  Primary Storage
                </span>
              </div>
              <p className="text-sm font-medium text-charcoal">
                {ukOnly ? "London (eu-west-2)" : "Multi-region"}
              </p>
              <p className="text-[10px] text-muted-foreground">
                Client data & documents
              </p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-charcoal">
                  Backup Location
                </span>
              </div>
              <p className="text-sm font-medium text-charcoal">
                {ukOnly ? "London (eu-west-2)" : "Ireland (eu-west-1)"}
              </p>
              <p className="text-[10px] text-muted-foreground">
                Encrypted backups
              </p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-charcoal">
                  Encryption
                </span>
              </div>
              <p className="text-sm font-medium text-charcoal">AES-256-GCM</p>
              <p className="text-[10px] text-muted-foreground">
                At rest & in transit
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Log */}
      <Card className="border-border/50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base">
              <Eye className="h-4 w-4 text-gold" />
              Audit Log
            </CardTitle>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <Download className="h-3 w-3" />
              Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-4 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search audit log..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 pl-9 text-sm"
              />
            </div>
            <Select value={filterLevel} onValueChange={setFilterLevel}>
              <SelectTrigger className="h-9 w-[140px] text-sm">
                <Filter className="mr-1.5 h-3 w-3" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Log Table */}
          <div className="overflow-x-auto rounded-lg border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">
                    Level
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">
                    Timestamp
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">
                    User
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">
                    Action
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">
                    Resource
                  </th>
                  <th className="hidden px-4 py-2.5 text-left font-medium text-muted-foreground lg:table-cell">
                    Details
                  </th>
                  <th className="hidden px-4 py-2.5 text-left font-medium text-muted-foreground sm:table-cell">
                    IP
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLog.map((entry) => (
                  <tr
                    key={entry.id}
                    className="border-b border-border/50 transition-colors hover:bg-secondary/20"
                  >
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        {riskIcon(entry.riskLevel)}
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${riskBadgeClass(entry.riskLevel)}`}
                        >
                          {entry.riskLevel}
                        </Badge>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2.5 tabular-nums text-xs text-muted-foreground">
                      {new Date(entry.timestamp).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-2.5 text-xs">
                      {entry.user.split("@")[0]}
                    </td>
                    <td className="px-4 py-2.5">
                      <Badge variant="secondary" className="text-[10px] font-mono">
                        {entry.action}
                      </Badge>
                    </td>
                    <td className="px-4 py-2.5 text-xs font-medium text-charcoal">
                      {entry.resource}
                    </td>
                    <td className="hidden max-w-[200px] truncate px-4 py-2.5 text-xs text-muted-foreground lg:table-cell">
                      {entry.details}
                    </td>
                    <td className="hidden whitespace-nowrap px-4 py-2.5 font-mono text-[10px] text-muted-foreground sm:table-cell">
                      {entry.ipAddress}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLog.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-sm text-muted-foreground">
                No audit entries match your filters.
              </p>
            </div>
          )}

          <div className="mt-3 text-xs text-muted-foreground">
            Showing {filteredLog.length} of {auditLog.length} entries &bull;
            Logs retained for 7 years per ISO 27001 requirements
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
