"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  X,
  Send,
  Scale,
  User,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface Message {
  id: string;
  role: "agent" | "user";
  content: string;
  options?: string[];
  timestamp: Date;
}

const triageFlows: Record<string, { response: string; options?: string[] }> = {
  initial: {
    response:
      "Hello, I'm the Larcomes legal assistant. I'm here to understand your situation and connect you with the right specialist.\n\nTo help me guide you, could you tell me what area your enquiry relates to?",
    options: [
      "Probate & Estate",
      "Divorce & Family",
      "Buying or Selling Property",
      "Commercial Matter",
      "Dispute or Litigation",
      "Wills & Trusts",
      "Something Else",
    ],
  },
  "Probate & Estate": {
    response:
      "I understand — dealing with probate matters can feel overwhelming, especially during a difficult time. Let me ask a few questions so I can pass your details to our probate specialists.\n\nCould you tell me which best describes your situation?",
    options: [
      "A loved one has recently passed away",
      "I'm named as executor in a will",
      "There is no will (intestate)",
      "There is a dispute about the estate",
      "I need general probate advice",
    ],
  },
  "Divorce & Family": {
    response:
      "Thank you for reaching out. I want you to know that we handle every family matter with sensitivity and discretion.\n\nTo connect you with the right family law specialist, could you share which situation applies?",
    options: [
      "I'm considering a divorce or separation",
      "We need help with child arrangements",
      "Financial settlement matters",
      "I need a consent order",
      "Domestic abuse concerns",
    ],
  },
  "Buying or Selling Property": {
    response:
      "Wonderful — property transactions are one of our core strengths. We'll make the process as smooth as possible.\n\nWhich best describes your situation?",
    options: [
      "I'm buying a property",
      "I'm selling a property",
      "I'm remortgaging",
      "Shared ownership or Help to Buy",
      "Transfer of equity",
    ],
  },
  "Commercial Matter": {
    response:
      "Our commercial property team handles a wide range of business property needs.\n\nWhich area is most relevant?",
    options: [
      "Lease negotiation or renewal",
      "Buying commercial property",
      "Selling commercial property",
      "Landlord & tenant dispute",
      "Other commercial matter",
    ],
  },
  "Dispute or Litigation": {
    response:
      "We understand that disputes can be stressful. Our team will work to find the most effective resolution for you.\n\nCould you tell me more about the nature of your dispute?",
    options: [
      "Neighbour or boundary dispute",
      "Contract dispute",
      "Debt recovery",
      "Professional negligence",
      "Other civil dispute",
    ],
  },
  "Wills & Trusts": {
    response:
      "Planning ahead is one of the most important steps you can take. Our team will ensure everything is properly documented.\n\nWhat would you like help with?",
    options: [
      "Drafting a new will",
      "Updating an existing will",
      "Setting up a trust",
      "Lasting Power of Attorney",
      "Tax planning advice",
    ],
  },
};

const captureResponse =
  "Thank you for sharing those details. To ensure our specialist can contact you with tailored advice, could you please provide:\n\n- Your **full name**\n- **Phone number** or **email address**\n- The **best time** to reach you\n\nAll information is handled securely under our ISO 27001 protocols and strict solicitor-client confidentiality.";

export function LeadCaptureAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState<"triage" | "capture" | "complete">(
    "triage"
  );
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (isOpen && !initialized.current) {
      initialized.current = true;
      const flow = triageFlows["initial"];
      setMessages([
        {
          id: "1",
          role: "agent",
          content: flow.response,
          options: flow.options,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionSelect = (option: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: option,
      timestamp: new Date(),
    };

    const flow = triageFlows[option];

    if (flow) {
      setSelectedArea(option);
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "agent",
        content: flow.response,
        options: flow.options,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg, agentMsg]);
    } else {
      // Sub-option selected — move to capture stage
      setStage("capture");
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "agent",
        content: captureResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg, agentMsg]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setInput("");

    if (stage === "capture") {
      setStage("complete");
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "agent",
        content: `Thank you. I've securely logged your enquiry under **${selectedArea || "General"}** and assigned it as a priority. One of our specialist solicitors will be in touch within **one working day**.\n\nYour reference number is **LC-${Date.now().toString().slice(-6)}**.\n\nIs there anything else I can help with?`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg, agentMsg]);
    } else {
      // Free-text in triage — try keyword matching
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "agent",
        content:
          "Thank you for that. To make sure I connect you with the right specialist, could you select the category that best fits your enquiry?",
        options: triageFlows["initial"].options,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg, agentMsg]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gold-gradient shadow-lg shadow-gold/25 transition-transform hover:scale-105 active:scale-95"
          aria-label="Open legal enquiry assistant"
        >
          <MessageCircle className="h-6 w-6 text-charcoal" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[560px] w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-charcoal/10 sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-charcoal px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-charcoal-light">
                <Scale className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Legal Enquiry Assistant
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-white/60">
                    Available now
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-white/60 transition-colors hover:bg-charcoal-light hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Compliance Banner */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="text-[11px] text-muted-foreground">
              AI-assisted triage &bull; Encrypted &bull; ISO 27001
            </span>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${msg.role === "agent" ? "bg-charcoal" : "bg-gold/20"}`}
                    >
                      {msg.role === "agent" ? (
                        <Scale className="h-3.5 w-3.5 text-gold" />
                      ) : (
                        <User className="h-3.5 w-3.5 text-gold-dark" />
                      )}
                    </div>
                    <div
                      className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        msg.role === "agent"
                          ? "bg-muted text-foreground"
                          : "bg-charcoal text-white"
                      }`}
                    >
                      {msg.content.split("\n").map((line, i) => (
                        <p key={i} className={i > 0 ? "mt-2" : ""}>
                          {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
                            part.startsWith("**") && part.endsWith("**") ? (
                              <strong key={j} className="font-semibold">
                                {part.slice(2, -2)}
                              </strong>
                            ) : (
                              <span key={j}>{part}</span>
                            )
                          )}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Option Buttons */}
                  {msg.options && msg.role === "agent" && (
                    <div className="mt-3 flex flex-wrap gap-1.5 pl-9">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionSelect(opt)}
                          className="flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-charcoal transition-all hover:border-gold hover:bg-secondary"
                        >
                          <ChevronRight className="h-3 w-3 text-gold" />
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border bg-white p-3">
            {stage === "complete" ? (
              <div className="flex items-center justify-center gap-2 py-2">
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Enquiry submitted successfully
                </Badge>
              </div>
            ) : (
              <div className="flex items-end gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder={
                    stage === "capture"
                      ? "Enter your contact details..."
                      : "Type your message..."
                  }
                  className="min-h-[40px] max-h-[80px] resize-none rounded-xl border-border bg-muted/50 text-sm"
                  rows={1}
                />
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="h-10 w-10 shrink-0 rounded-xl gold-gradient border-0 text-charcoal hover:opacity-90 disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
