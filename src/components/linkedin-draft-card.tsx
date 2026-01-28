"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { LinkedInDraft } from "@/lib/scout-types";
import {
  Linkedin,
  Copy,
  Check,
  Hash,
  Search,
  Info,
  Type,
} from "lucide-react";

interface LinkedInDraftCardProps {
  draft: LinkedInDraft;
  updateTitle: string;
}

function formatForClipboard(draft: LinkedInDraft): string {
  return `${draft.hook}\n\n${draft.body}\n\n${draft.callToAction}\n\n${draft.hashtags.join(" ")}`;
}

export function LinkedInDraftCard({
  draft,
  updateTitle,
}: LinkedInDraftCardProps) {
  const [copied, setCopied] = useState<"full" | "hashtags" | null>(null);

  const handleCopy = (type: "full" | "hashtags") => {
    const text =
      type === "full"
        ? formatForClipboard(draft)
        : draft.hashtags.join(" ");
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const charCount = formatForClipboard(draft).length;

  return (
    <div className="rounded-xl border-l-4 border-l-[#0077B5] border border-border/50 bg-secondary/20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-2.5">
        <Linkedin className="h-4 w-4 text-[#0077B5]" />
        <span className="text-xs font-semibold text-[#0077B5]">
          AI-Drafted LinkedIn Post
        </span>
        <span className="ml-auto text-[10px] text-muted-foreground">
          {draft.estimatedReadTime}
        </span>
      </div>

      {/* Post Preview */}
      <div className="p-4 space-y-3">
        {/* Hook */}
        <p className="text-sm font-semibold text-charcoal leading-snug">
          {draft.hook}
        </p>

        {/* Body */}
        <div className="text-[13px] leading-relaxed text-charcoal/80 whitespace-pre-line">
          {draft.body}
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-secondary/50 px-3 py-2.5">
          <p className="text-[13px] leading-relaxed text-charcoal/70 italic">
            {draft.callToAction}
          </p>
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-1.5">
          {draft.hashtags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] bg-[#0077B5]/10 text-[#0077B5] border-[#0077B5]/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Non-branded keywords */}
        {draft.nonBrandedKeywords.length > 0 && (
          <div className="border-t border-border/50 pt-3">
            <div className="flex items-center gap-1.5 mb-2">
              <Search className="h-3 w-3 text-gold" />
              <span className="text-[10px] font-semibold text-gold">
                Non-Branded Keywords
              </span>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-3 w-3 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[260px] text-xs">
                  99% of your search traffic is non-branded. These are the
                  terms people actually search when looking for legal help.
                  Using them in social content amplifies organic discovery.
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {draft.nonBrandedKeywords.map((kw) => (
                <Badge
                  key={kw}
                  variant="outline"
                  className="text-[10px] border-gold/25 text-charcoal/60"
                >
                  <Search className="mr-1 h-2.5 w-2.5 text-gold/60" />
                  {kw}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between border-t border-border/50 bg-secondary/20 px-4 py-2.5">
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <Type className="h-3 w-3" />
          {charCount.toLocaleString()} / 3,000 chars
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="h-7 gap-1.5 px-2.5 text-[11px]"
            onClick={() => handleCopy("hashtags")}
          >
            {copied === "hashtags" ? (
              <Check className="h-3 w-3 text-emerald-600" />
            ) : (
              <Hash className="h-3 w-3" />
            )}
            {copied === "hashtags" ? "Copied" : "Hashtags"}
          </Button>
          <Button
            size="sm"
            className="h-7 gap-1.5 px-2.5 text-[11px] bg-[#0077B5] hover:bg-[#005f94] text-white"
            onClick={() => handleCopy("full")}
          >
            {copied === "full" ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
            {copied === "full" ? "Copied" : "Copy Full Post"}
          </Button>
        </div>
      </div>
    </div>
  );
}
