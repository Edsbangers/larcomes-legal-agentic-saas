"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sampleLeads, type Lead, type LeadStatus } from "@/lib/data";
import {
  Kanban,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  ChevronRight,
  User,
  GripVertical,
  Plus,
} from "lucide-react";

const columns: { id: LeadStatus; label: string; color: string }[] = [
  { id: "new", label: "New Enquiries", color: "bg-blue-500" },
  { id: "contacted", label: "Contacted", color: "bg-gold" },
  { id: "qualified", label: "Qualified", color: "bg-purple-500" },
  { id: "instructed", label: "Instructed", color: "bg-emerald-500" },
];

const urgencyConfig = {
  high: { label: "High", class: "border-red-200 bg-red-50 text-red-700" },
  medium: { label: "Medium", class: "border-gold/30 bg-gold/10 text-gold-dark" },
  low: { label: "Low", class: "border-emerald-200 bg-emerald-50 text-emerald-700" },
};

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>(sampleLeads);

  const moveForward = (leadId: string) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id !== leadId) return lead;
        const currentIndex = columns.findIndex((c) => c.id === lead.status);
        if (currentIndex < columns.length - 1) {
          return {
            ...lead,
            status: columns[currentIndex + 1].id,
            lastActivity: new Date().toISOString(),
          };
        }
        return lead;
      })
    );
  };

  const getColumnLeads = (status: LeadStatus) =>
    leads.filter((l) => l.status === status);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-charcoal">
            Instruction Pipeline
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Secure Kanban board for triaged leads. Drag or advance leads through
            the pipeline.
          </p>
        </div>
        <Button size="sm" className="gap-2 gold-gradient border-0 text-charcoal">
          <Plus className="h-3.5 w-3.5" />
          Add Lead
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {columns.map((col) => {
          const count = getColumnLeads(col.id).length;
          return (
            <Card key={col.id} className="border-border/50">
              <CardContent className="flex items-center gap-3 p-4">
                <div className={`h-2.5 w-2.5 rounded-full ${col.color}`} />
                <div>
                  <p className="text-lg font-bold text-charcoal">{count}</p>
                  <p className="text-xs text-muted-foreground">{col.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Kanban Board */}
      <div className="grid gap-4 lg:grid-cols-4">
        {columns.map((col) => (
          <div key={col.id} className="space-y-3">
            {/* Column Header */}
            <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${col.color}`} />
                <span className="text-sm font-semibold text-charcoal">
                  {col.label}
                </span>
              </div>
              <Badge variant="secondary" className="text-[10px]">
                {getColumnLeads(col.id).length}
              </Badge>
            </div>

            {/* Cards */}
            <div className="space-y-2">
              {getColumnLeads(col.id).map((lead) => (
                <Card
                  key={lead.id}
                  className="group border-border/50 transition-all hover:border-gold/30 hover:shadow-sm"
                >
                  <CardContent className="p-3">
                    {/* Top row */}
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                          <User className="h-3.5 w-3.5 text-charcoal/60" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-charcoal">
                            {lead.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {lead.id}
                          </p>
                        </div>
                      </div>
                      <GripVertical className="h-4 w-4 text-muted-foreground/30 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    {/* Tags */}
                    <div className="mb-2 flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-[10px]">
                        {lead.practiceArea}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-[10px] ${urgencyConfig[lead.urgency].class}`}
                      >
                        {urgencyConfig[lead.urgency].label}
                      </Badge>
                    </div>

                    {/* Summary */}
                    <p className="mb-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {lead.summary}
                    </p>

                    {/* Contact & Actions */}
                    <div className="flex items-center justify-between border-t border-border/50 pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          className="rounded p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-charcoal"
                          title={lead.phone}
                        >
                          <Phone className="h-3 w-3" />
                        </button>
                        <button
                          className="rounded p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-charcoal"
                          title={lead.email}
                        >
                          <Mail className="h-3 w-3" />
                        </button>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Clock className="h-2.5 w-2.5" />
                          {new Date(lead.lastActivity).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "short" }
                          )}
                        </span>
                      </div>
                      {col.id !== "instructed" && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 gap-1 px-2 text-[10px] font-medium text-gold hover:bg-gold/10"
                          onClick={() => moveForward(lead.id)}
                        >
                          Advance
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {getColumnLeads(col.id).length === 0 && (
                <div className="rounded-lg border border-dashed border-border/50 p-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    No leads in this stage
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
