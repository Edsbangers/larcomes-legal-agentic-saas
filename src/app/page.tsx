import { Navigation } from "@/components/navigation";
import { LeadCaptureAgent } from "@/components/lead-capture-agent";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Home,
  Heart,
  Building2,
  FileText,
  Gavel,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Award,
  Lock,
  Phone,
} from "lucide-react";
import Link from "next/link";

const areas = [
  {
    icon: Scale,
    title: "Probate & Estates",
    desc: "Expert guidance through probate, estate administration, and will disputes.",
  },
  {
    icon: Heart,
    title: "Divorce & Family",
    desc: "Compassionate support through separation, custody, and financial settlements.",
  },
  {
    icon: Home,
    title: "Conveyancing",
    desc: "Efficient property transactions for buyers, sellers, and remortgage clients.",
  },
  {
    icon: Building2,
    title: "Commercial Property",
    desc: "Lease negotiations, acquisitions, and disposal of commercial premises.",
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    desc: "Effective representation in civil disputes, mediation, and litigation.",
  },
  {
    icon: FileText,
    title: "Wills & Trusts",
    desc: "Drafting wills, trusts, and lasting powers of attorney.",
  },
];

const stats = [
  { value: "12,179", label: "Clients Served", icon: Users },
  { value: "99%", label: "Organic Reach", icon: Award },
  { value: "< 24h", label: "Response Time", icon: Clock },
  { value: "ISO 27001", label: "Certified", icon: Shield },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-charcoal-light/50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <Badge className="mb-6 border-gold/30 bg-gold/10 text-gold hover:bg-gold/20">
              <Shield className="mr-1.5 h-3 w-3" />
              ISO 27001 Certified Practice
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted Legal Advice,{" "}
              <span className="text-gold-gradient">Delivered With Care</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              From probate to property, divorce to dispute resolution — our team
              of experienced solicitors provides clear, practical guidance
              tailored to your needs. Serving Hampshire with integrity since
              1978.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gold-gradient border-0 text-charcoal font-semibold shadow-lg shadow-gold/20 hover:opacity-90"
              >
                <Phone className="mr-2 h-4 w-4" />
                Speak to a Solicitor
              </Button>
              <Link href="/knowledge-base">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  Browse Legal FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 py-8"
              >
                <stat.icon className="h-5 w-5 text-gold" />
                <span className="text-2xl font-bold text-charcoal">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Comprehensive Legal Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert advice across all major practice areas, backed by decades of
              experience.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card
                key={area.title}
                className="group cursor-pointer border-border/50 bg-white transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                    <area.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Larcomes */}
      <section className="border-t border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why Larcomes
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-charcoal">
                Security-First Legal Practice
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                In an era of increasing data threats, we set the standard for
                client data protection in the legal sector.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "ISO 27001 certified information security",
                  "GDPR-compliant data handling throughout",
                  "Encrypted client communications",
                  "UK-only data residency available",
                  "Complete audit trail for all interactions",
                  "SRA regulated and fully insured",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 rounded-xl bg-charcoal p-4">
                    <Lock className="h-8 w-8 text-gold" />
                    <div>
                      <p className="font-semibold text-white">
                        Data Residency: UK Only
                      </p>
                      <p className="text-sm text-white/60">
                        All client data stored exclusively in UK data centres
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl bg-charcoal p-4">
                    <Shield className="h-8 w-8 text-gold" />
                    <div>
                      <p className="font-semibold text-white">
                        ISO 27001 Compliant
                      </p>
                      <p className="text-sm text-white/60">
                        Independently audited information security management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl bg-charcoal p-4">
                    <FileText className="h-8 w-8 text-gold" />
                    <div>
                      <p className="font-semibold text-white">
                        Full Audit Trail
                      </p>
                      <p className="text-sm text-white/60">
                        Every access and change logged and reviewable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to discuss your legal matter?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Use our AI-powered enquiry assistant for instant triage, or speak
            directly with our team. All conversations are confidential.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="gold-gradient border-0 text-charcoal font-semibold hover:opacity-90"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call 023 9282 1111
            </Button>
            <Link href="/partner-dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Partner Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <LeadCaptureAgent />
    </div>
  );
}
