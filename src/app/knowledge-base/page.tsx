"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LeadCaptureAgent } from "@/components/lead-capture-agent";
import { faqData, practiceAreas } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Sparkles,
  ArrowRight,
  Scale,
  Heart,
  Home,
  Building2,
  Gavel,
  FileText,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Heart,
  Home,
  Building2,
  Gavel,
  FileText,
};

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = !selectedArea || faq.practiceArea === selectedArea;
    return matchesSearch && matchesArea;
  });

  // JSON-LD structured data for AEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => faq.schema),
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-charcoal py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold">
            <Sparkles className="mr-1.5 h-3 w-3" />
            AEO-Optimised Knowledge Base
          </Badge>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Legal Questions, <span className="text-gold-gradient">Expert Answers</span>
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Structured legal guidance optimised for AI answer engines. Find
            clear, authoritative answers to common legal questions.
          </p>

          {/* Search */}
          <div className="relative mt-8 mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search legal questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 rounded-xl border-white/10 bg-charcoal-light pl-11 text-white placeholder:text-white/40 focus-visible:ring-gold"
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 border-b border-border bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            <Button
              variant={selectedArea === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedArea(null)}
              className={
                selectedArea === null
                  ? "gold-gradient border-0 text-charcoal"
                  : ""
              }
            >
              All Topics
            </Button>
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <Button
                  key={area.id}
                  variant={selectedArea === area.id ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    setSelectedArea(
                      selectedArea === area.id ? null : area.id
                    )
                  }
                  className={
                    selectedArea === area.id
                      ? "gold-gradient border-0 text-charcoal"
                      : ""
                  }
                >
                  {Icon && <Icon className="mr-1.5 h-3.5 w-3.5" />}
                  {area.title.split(" & ")[0]}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""} found
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3 w-3" />
              Schema.org FAQPage structured data
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <Card
                key={faq.id}
                className={`overflow-hidden transition-all ${
                  expandedFaq === faq.id
                    ? "border-gold/30 shadow-md shadow-gold/5"
                    : "border-border/50"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                  className="flex w-full items-start justify-between p-5 text-left"
                >
                  <div className="flex-1 pr-4">
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-[10px]">
                        {faq.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gold/20 text-[10px] text-gold"
                      >
                        {
                          practiceAreas.find((a) => a.id === faq.practiceArea)
                            ?.title
                        }
                      </Badge>
                    </div>
                    <h3 className="text-sm font-semibold text-charcoal sm:text-base">
                      {faq.question}
                    </h3>
                  </div>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  ) : (
                    <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <CardContent className="border-t border-border/50 bg-secondary/30 px-5 py-4">
                    <p className="text-sm leading-relaxed text-charcoal/80">
                      {faq.answer}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Button
                        size="sm"
                        className="gold-gradient border-0 text-charcoal text-xs font-medium"
                      >
                        Discuss with a Solicitor
                        <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="py-16 text-center">
              <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
              <p className="mt-4 text-lg font-medium text-charcoal">
                No matching questions found
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search or browse all topics.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedArea(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <LeadCaptureAgent />
    </div>
  );
}
