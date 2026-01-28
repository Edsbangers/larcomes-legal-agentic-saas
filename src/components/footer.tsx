import { Scale, Shield, Lock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Scale className="h-5 w-5 text-gold" />
              <span className="text-lg font-bold tracking-tight">
                LARCOMES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Trusted solicitors providing expert legal advice across Hampshire.
              Regulated by the Solicitors Regulation Authority.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-md bg-charcoal-light px-2.5 py-1">
                <Shield className="h-3 w-3 text-gold" />
                <span className="text-[10px] font-medium text-white/70">
                  ISO 27001
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md bg-charcoal-light px-2.5 py-1">
                <Lock className="h-3 w-3 text-gold" />
                <span className="text-[10px] font-medium text-white/70">
                  GDPR Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gold">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Probate & Estates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Divorce & Family
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Conveyancing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Commercial Property
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gold">Resources</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/knowledge-base"
                  className="hover:text-gold transition-colors"
                >
                  Legal FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Legal Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Larcomes Solicitors</li>
              <li>Portsmouth, Hampshire</li>
              <li className="text-gold">023 9282 1111</li>
              <li>enquiries@larcomes.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-charcoal-light pt-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Larcomes Solicitors. All rights
            reserved. Authorised and regulated by the Solicitors Regulation
            Authority (SRA). This site does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
