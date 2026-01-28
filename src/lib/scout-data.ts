import type { ScoutLegalUpdate, LinkedInDraft } from "./scout-types";

// ─── Sources the Scout Agent monitors ────────────────────────────────────────
export const scoutSources = [
  { name: "The Law Society RSS", url: "lawsociety.org.uk" },
  { name: "UK Government Legislation Feed", url: "legislation.gov.uk" },
  { name: "UK Gov News", url: "gov.uk/government/news" },
  { name: "Judiciary of England & Wales", url: "judiciary.uk" },
  { name: "SRA Updates", url: "sra.org.uk" },
  { name: "FCA Regulatory Feed", url: "fca.org.uk" },
  { name: "HMCTS Digital Services", url: "hmcts.service.gov.uk" },
];

// ─── Non-branded keyword map per practice area ──────────────────────────────
export const nonBrandedKeywordsByArea: Record<string, string[]> = {
  probate: [
    "probate solicitor near me",
    "how to apply for probate",
    "estate administration help",
    "grant of probate cost",
    "intestate estate solicitor",
  ],
  divorce: [
    "divorce solicitor near me",
    "no-fault divorce UK",
    "child custody solicitor",
    "financial settlement divorce",
    "separation agreement solicitor",
  ],
  conveyancing: [
    "conveyancing solicitor near me",
    "house buying solicitor",
    "property solicitor fees",
    "first-time buyer solicitor",
    "conveyancing quote",
  ],
  commercial: [
    "commercial property solicitor",
    "lease negotiation solicitor",
    "business premises legal advice",
  ],
  litigation: [
    "dispute resolution solicitor",
    "civil litigation solicitor near me",
    "boundary dispute solicitor",
  ],
  wills: [
    "will writing solicitor near me",
    "lasting power of attorney solicitor",
    "trust solicitor UK",
  ],
};

// ─── LinkedIn drafts for existing LU-001 to LU-005 ─────────────────────────
export const existingLinkedInDrafts: Record<string, LinkedInDraft> = {
  "LU-001": {
    hook: "Leaseholders — this could save you tens of thousands of pounds.",
    body: `The Leasehold and Freehold Reform Act 2024 is now being implemented, and it's one of the biggest changes to property law in decades.

Here's what's changed:

1. Lease extensions now go up to 990 years (houses AND flats)
2. Ground rent has been capped — no more escalating charges
3. Marriage value has been abolished for lease extensions
4. Enfranchisement rights have been strengthened

If you own a leasehold property, these changes could significantly reduce the cost of extending your lease or buying your freehold.`,
    callToAction:
      "Want to understand what this means for your property? Our conveyancing team at Larcomes Solicitors can advise you on your options. Get in touch for a no-obligation conversation — link in comments.",
    hashtags: [
      "#LeaseholdReform",
      "#PropertyLaw",
      "#Conveyancing",
      "#FreeholdReform",
      "#HomeOwnership",
    ],
    nonBrandedKeywords: [
      "leasehold reform 2024",
      "lease extension solicitor",
      "freehold purchase solicitor",
      "ground rent cap",
      "conveyancing solicitor near me",
    ],
    practiceArea: "conveyancing",
    estimatedReadTime: "< 1 min read",
  },
  "LU-002": {
    hook: "Applying for probate just got a lot easier.",
    body: `HMCTS has expanded its digital probate service with significant new features:

- Full online application with digital document upload
- Real-time status tracking for your application
- Faster processing times for straightforward estates
- Reduced need for in-person appointments

For executors, this means less paperwork, fewer delays, and greater transparency throughout the process.`,
    callToAction:
      "Navigating probate can still be complex, even with digital tools. Our probate specialists at Larcomes can guide you through every step. Reach out for expert support — link in comments.",
    hashtags: [
      "#Probate",
      "#DigitalJustice",
      "#EstateAdministration",
      "#ProbateHelp",
      "#LegalTech",
    ],
    nonBrandedKeywords: [
      "how to apply for probate",
      "probate solicitor near me",
      "digital probate application",
      "grant of probate cost",
      "estate administration help",
    ],
    practiceArea: "probate",
    estimatedReadTime: "< 1 min read",
  },
  "LU-003": {
    hook: "Separating? You now MUST attend a mediation session before going to court.",
    body: `Major change for family law: mandatory mediation information sessions are now required before all private family law applications.

What this means in practice:

1. Before applying to court for child arrangements or financial orders, you must attend a mediation information and assessment meeting (MIAM)
2. Expanded government funding makes mediation more accessible
3. The aim is to resolve disputes faster, more affordably, and less adversarially

This is a positive step — mediation typically costs a fraction of court proceedings and leads to more sustainable agreements.`,
    callToAction:
      "Need guidance on mediation or family court proceedings? Our family law team at Larcomes provides compassionate, expert support. Book a confidential consultation — link in comments.",
    hashtags: [
      "#FamilyLaw",
      "#Mediation",
      "#DivorceAdvice",
      "#ChildArrangements",
      "#FamilyMediation",
    ],
    nonBrandedKeywords: [
      "family mediation solicitor",
      "divorce solicitor near me",
      "child custody solicitor",
      "no-fault divorce UK",
      "separation agreement solicitor",
    ],
    practiceArea: "divorce",
    estimatedReadTime: "< 1 min read",
  },
  "LU-004": {
    hook: "Buying property? Your solicitor's checks just got more thorough — and that protects you.",
    body: `The Law Society has issued updated Anti-Money Laundering guidance for conveyancers:

- Enhanced source of funds verification for all property transactions
- Updated due diligence thresholds
- Revised digital ID verification standards
- Stricter reporting requirements

While this adds steps to the conveyancing process, it exists to protect buyers and sellers from fraud — which is increasingly common in property transactions.`,
    callToAction:
      "Our conveyancing team at Larcomes is fully compliant with the latest AML standards. Your transaction is in safe hands. Get a fixed-fee conveyancing quote — link in comments.",
    hashtags: [
      "#AML",
      "#Compliance",
      "#Conveyancing",
      "#PropertyFraud",
      "#ConveyancingSolicitor",
    ],
    nonBrandedKeywords: [
      "conveyancing solicitor near me",
      "property solicitor fees",
      "house buying solicitor",
      "conveyancing fraud protection",
      "conveyancing quote",
    ],
    practiceArea: "conveyancing",
    estimatedReadTime: "< 1 min read",
  },
  "LU-005": {
    hook: "First-time buyer? You could save thousands in Stamp Duty — here's how.",
    body: `Great news for homebuyers: the current SDLT thresholds have been extended.

Key figures you need to know:

- 0% on the first £250,000 (standard rate)
- First-time buyer relief: 0% on the first £425,000
- First-time buyer threshold applies to properties up to £625,000

This extension means significant savings — a first-time buyer purchasing at £400,000 pays ZERO stamp duty.

If you're planning to buy, now is the time to take advantage.`,
    callToAction:
      "Planning a property purchase? Our conveyancing team at Larcomes can give you a full SDLT breakdown and handle your transaction from offer to completion. Get in touch — link in comments.",
    hashtags: [
      "#SDLT",
      "#StampDuty",
      "#FirstTimeBuyer",
      "#PropertyBuying",
      "#ConveyancingSolicitor",
    ],
    nonBrandedKeywords: [
      "stamp duty calculator",
      "first-time buyer solicitor",
      "conveyancing solicitor near me",
      "house buying solicitor",
      "stamp duty threshold 2026",
    ],
    practiceArea: "conveyancing",
    estimatedReadTime: "< 1 min read",
  },
};

// ─── Discovery pool — updates the scout will "find" over time ───────────────
// Based on real January 2026 regulatory shifts affecting UK solicitors
export const scoutDiscoveryPool: Omit<ScoutLegalUpdate, "discoveredAt">[] = [
  {
    id: "LU-006",
    title: "Renters' Rights Act 2025: Section 21 Abolished from 1 May 2026",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/renters-rights-act",
    publishedAt: "2026-01-28T08:00:00Z",
    category: "Residential Property",
    summary:
      "The Renters' Rights Act 2025 is entering a critical implementation phase. From 1 May 2026, Section 21 'no-fault' evictions will be formally abolished, and ALL existing assured shorthold tenancies must be converted to periodic tenancies. Landlords face a hard deadline to restructure their tenancy agreements.",
    impact: "high",
    draftAlert:
      "Section 21 no-fault evictions abolished from 1 May 2026 — landlords must convert all ASTs to periodic tenancies.",
    linkedInDraft: {
      hook: "Landlords: you have until 1 May 2026 to restructure EVERY tenancy agreement you hold.",
      body: `The Renters' Rights Act 2025 is entering its most critical phase. Here's what's happening:

From 1 May 2026:

1. Section 21 "no-fault" evictions are formally abolished
2. ALL existing assured shorthold tenancies (ASTs) must convert to periodic tenancies
3. New mandatory possession grounds replace the old Section 21 process
4. Tenants gain the right to request pets (landlords can't unreasonably refuse)
5. A new Private Rented Sector Ombudsman becomes mandatory for all landlords
6. Rent increases limited to once per year via a formal Section 13 notice

This isn't coming — it's HERE. Landlords who haven't reviewed their tenancy agreements are running out of time.

For tenants: your protections are about to become significantly stronger. No more "no-fault" evictions.`,
      callToAction:
        "Whether you're a landlord needing to restructure agreements or a tenant wanting to understand your new rights, our property team at Larcomes Solicitors can help. Book a consultation before the May deadline — link in comments.",
      hashtags: [
        "#RentersRightsAct",
        "#Section21",
        "#LandlordAdvice",
        "#TenantRights",
        "#PropertyLaw",
      ],
      nonBrandedKeywords: [
        "property solicitor near me",
        "landlord legal advice",
        "tenant rights UK 2026",
        "section 21 eviction abolished",
        "assured shorthold tenancy solicitor",
      ],
      practiceArea: "conveyancing",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-007",
    title: "Mandatory Property Information Forms: 30 March 2026 Deadline",
    source: "The Law Society",
    sourceUrl: "https://www.lawsociety.org.uk/topics/property/conveyancing-forms",
    publishedAt: "2026-01-28T10:30:00Z",
    category: "Conveyancing",
    summary:
      "New versions of the standard property information forms (TA6, TA7, TA10) become mandatory on 30 March 2026. The government is also expected to publish a 'Conveyancing Roadmap' in H1 2026 to enforce upfront 'Material Information' disclosure from sellers at the point of marketing.",
    impact: "high",
    draftAlert:
      "New mandatory property information forms from 30 March 2026 — sellers must provide upfront Material Information.",
    linkedInDraft: {
      hook: "Selling a property in 2026? The information you MUST provide upfront is about to change dramatically.",
      body: `Two major conveyancing changes are converging this spring:

1. Mandatory new property forms (30 March 2026)

Updated versions of TA6 (Property Information), TA7 (Leasehold Information), and TA10 (Fittings & Contents) become compulsory. The new forms require significantly more detail on:
- Energy performance and retrofit obligations
- Flooding and environmental risks
- Service charge and ground rent history (leasehold)
- Planning permissions and building regulation compliance

2. The "Conveyancing Roadmap" (expected H1 2026)

The government plans to enforce upfront "Material Information" from sellers at the point of marketing — not after an offer is accepted. Estate agents will be required to verify this information before listing.

This is the biggest shake-up in property transaction transparency in decades.`,
      callToAction:
        "Planning to sell? Our conveyancing team at Larcomes can help you prepare compliant documentation before the deadline. Avoid delays — get ahead now. Link in comments.",
      hashtags: [
        "#Conveyancing",
        "#PropertyForms",
        "#MaterialInformation",
        "#HouseSelling",
        "#PropertyLaw2026",
      ],
      nonBrandedKeywords: [
        "conveyancing solicitor near me",
        "selling house solicitor",
        "property solicitor fees",
        "conveyancing forms 2026",
        "material information property",
      ],
      practiceArea: "conveyancing",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-008",
    title: "Upward-Only Rent Review Ban: Commercial Lease Reform in Parliament",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/commercial-lease-reform",
    publishedAt: "2026-01-28T12:00:00Z",
    category: "Commercial Property",
    summary:
      "A proposed ban on upward-only rent reviews is currently moving through Parliament. If enacted, it will fundamentally change how commercial leases are drafted, allowing rents to move both up AND down at review. Landlords and tenants with existing upward-only clauses should seek advice on transitional provisions.",
    impact: "high",
    draftAlert:
      "Upward-only rent reviews face a ban — commercial lease drafting will fundamentally change.",
    linkedInDraft: {
      hook: "If you hold a commercial lease, the way your rent is reviewed is about to change forever.",
      body: `A bill to ban upward-only rent reviews in commercial leases is moving through Parliament — and it could transform the commercial property market.

What this means:

1. Rent reviews would allow rents to go DOWN as well as up
2. New leases cannot include upward-only clauses
3. Existing leases may be subject to transitional provisions
4. Open market rent reviews become the standard
5. Turnover-based rent models may become more common

For commercial landlords: this fundamentally changes your investment model and lease drafting strategy.

For tenants: if your business faces a downturn, your rent could actually decrease at the next review — a protection that doesn't currently exist.

The bill is at committee stage and progressing. Now is the time to understand the implications.`,
      callToAction:
        "Need to review your commercial lease arrangements? Our commercial property team at Larcomes can advise on existing clauses and future-proof your position. Get in touch — link in comments.",
      hashtags: [
        "#CommercialProperty",
        "#RentReview",
        "#CommercialLease",
        "#LandlordAndTenant",
        "#PropertyLaw",
      ],
      nonBrandedKeywords: [
        "commercial property solicitor",
        "lease negotiation solicitor",
        "business premises legal advice",
        "commercial rent review solicitor",
        "commercial lease solicitor near me",
      ],
      practiceArea: "commercial",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-009",
    title: "FCA Takeover of AML Oversight from SRA: Major Compliance Shift",
    source: "FCA Regulatory Feed",
    sourceUrl: "https://www.fca.org.uk/news/statements/aml-legal-sector-oversight",
    publishedAt: "2026-01-28T14:00:00Z",
    category: "Compliance & Regulation",
    summary:
      "The Financial Conduct Authority (FCA) is taking over Anti-Money Laundering oversight from the Solicitors Regulation Authority (SRA) in 2026. This creates a significant new compliance burden for law firms, with FCA-standard due diligence, reporting, and supervisory frameworks replacing the current SRA regime. Firms face new registration, staffing, and system requirements.",
    impact: "high",
    draftAlert:
      "FCA taking over AML oversight from SRA in 2026 — major new compliance requirements for all law firms.",
    linkedInDraft: {
      hook: "Every law firm in England & Wales is about to answer to a new AML regulator. And the bar is going up.",
      body: `The FCA is taking over Anti-Money Laundering supervision from the SRA in 2026 — and this is one of the biggest regulatory shifts the legal profession has faced.

What changes for law firms:

1. FCA registration required — separate from SRA authorisation
2. FCA-standard enhanced due diligence replaces SRA guidance
3. Suspicious Activity Report (SAR) processes must meet FCA benchmarks
4. Annual compliance returns and financial crime data submissions
5. Risk-based supervision — firms handling property and estates face the highest scrutiny
6. Potential for direct FCA investigations and enforcement

For conveyancing and probate firms, this is critical. Property transactions are the highest-risk area for money laundering, and the FCA's approach is significantly more rigorous than the SRA's.

The transition timeline is tight. Firms need to prepare NOW.`,
      callToAction:
        "At Larcomes, we're already preparing for the FCA transition. Our compliance team ensures every transaction meets the highest AML standards — protecting you and your assets. Learn more about our approach — link in comments.",
      hashtags: [
        "#AML",
        "#FCA",
        "#LegalCompliance",
        "#MoneyLaundering",
        "#SolicitorRegulation",
      ],
      nonBrandedKeywords: [
        "conveyancing solicitor near me",
        "AML compliance solicitor",
        "property fraud protection",
        "FCA regulated solicitor",
        "money laundering checks property",
      ],
      practiceArea: "conveyancing",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-010",
    title: "Cohabitation Rights Bill: First Reading in Parliament",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/cohabitation-rights",
    publishedAt: "2026-01-28T15:30:00Z",
    category: "Family Law",
    summary:
      "A new Cohabitation Rights Bill has been introduced to Parliament. If passed, it would give unmarried cohabiting couples legal rights to financial provision on separation, similar to those available on divorce. With 3.6 million cohabiting couples in England and Wales, the impact would be substantial.",
    impact: "high",
    draftAlert:
      "Cohabitation Rights Bill introduced — unmarried couples could gain financial rights on separation.",
    linkedInDraft: {
      hook: "Living with your partner but not married? Your legal rights could be about to change dramatically.",
      body: `A Cohabitation Rights Bill has been introduced to Parliament — and it could transform the legal landscape for the 3.6 million cohabiting couples in England and Wales.

Currently, unmarried partners have almost NO automatic legal rights when a relationship ends. No matter how long you've lived together.

The proposed changes:

1. Cohabiting partners could apply for financial provision on separation
2. Rights would apply after 2+ years of cohabitation (or if you have children)
3. Property, pensions, and maintenance could all be considered
4. Opt-out agreements would be available

This bill still has a long Parliamentary journey, but it signals a significant shift in thinking.`,
      callToAction:
        "Whether this bill passes or not, protecting yourself legally is essential. Our family law team at Larcomes can advise on cohabitation agreements, trusts, and property protection. Get in touch — link in comments.",
      hashtags: [
        "#CohabitationRights",
        "#FamilyLaw",
        "#UnmarriedCouples",
        "#LegalRights",
        "#CohabitationAgreement",
      ],
      nonBrandedKeywords: [
        "cohabitation agreement solicitor",
        "unmarried couple property rights",
        "divorce solicitor near me",
        "family solicitor near me",
        "cohabitation rights UK",
      ],
      practiceArea: "divorce",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-011",
    title: "Digital LPA Service: Processing Times Cut from 20 Weeks to 6",
    source: "The Law Society",
    sourceUrl: "https://www.lawsociety.org.uk/topics/lpa",
    publishedAt: "2026-01-28T16:45:00Z",
    category: "Wills & Trusts",
    summary:
      "The Office of the Public Guardian launches a fully digital LPA registration service. Applications can now be completed, witnessed, and registered entirely online, reducing processing times from 20 weeks to 6 weeks.",
    impact: "medium",
    draftAlert:
      "Lasting Power of Attorney registration goes fully digital — processing times cut from 20 weeks to 6.",
    linkedInDraft: {
      hook: "Making a Lasting Power of Attorney just went from 20 weeks to 6.",
      body: `The Office of the Public Guardian has launched a fully digital LPA registration service — and it's a game-changer.

What's new:

- Complete your LPA application entirely online
- Digital witnessing and certification accepted
- Real-time status tracking of your application
- Processing times reduced from ~20 weeks to just 6 weeks
- Fee remains £82 per LPA (or free with remission)

With an ageing population and increasing awareness of mental capacity planning, this makes one of the most important legal documents far more accessible.`,
      callToAction:
        "Don't wait until it's too late — an LPA is essential for anyone over 18. Our wills & trusts team at Larcomes can prepare both types of LPA for you. Book a consultation — link in comments.",
      hashtags: [
        "#LPA",
        "#LastingPowerOfAttorney",
        "#EstatePlanning",
        "#WillsAndTrusts",
        "#MentalCapacity",
      ],
      nonBrandedKeywords: [
        "lasting power of attorney solicitor",
        "will writing solicitor near me",
        "LPA cost UK",
        "how to set up power of attorney",
        "trust solicitor UK",
      ],
      practiceArea: "wills",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-012",
    title: "Employment Rights Bill: Day-One Unfair Dismissal Protection",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/employment-rights-bill",
    publishedAt: "2026-01-28T17:30:00Z",
    category: "Employment Law",
    summary:
      "The Employment Rights Bill introduces day-one protection against unfair dismissal, replacing the current two-year qualifying period. The bill also bans zero-hours contracts and introduces fire-and-rehire restrictions.",
    impact: "high",
    draftAlert:
      "Employment Rights Bill — unfair dismissal protection from day one, zero-hours contracts banned.",
    linkedInDraft: {
      hook: "Every employee in England will soon be protected from unfair dismissal from their first day at work.",
      body: `The Employment Rights Bill is set to transform workplace rights in England and Wales.

Key changes:

1. Unfair dismissal protection from day one (currently requires 2 years' service)
2. Zero-hours contracts effectively banned
3. Fire-and-rehire practices restricted
4. Statutory sick pay from day one
5. Flexible working becomes the default

For employers: this means reviewing employment contracts, disciplinary procedures, and onboarding processes.

For employees: significantly stronger protections from your very first day.`,
      callToAction:
        "Need to understand how these changes affect your business or your rights? Our dispute resolution team at Larcomes can provide clear, practical advice. Get in touch — link in comments.",
      hashtags: [
        "#EmploymentRights",
        "#EmploymentLaw",
        "#WorkplaceRights",
        "#UnfairDismissal",
        "#ZeroHoursContracts",
      ],
      nonBrandedKeywords: [
        "employment solicitor near me",
        "unfair dismissal solicitor",
        "dispute resolution solicitor",
        "employment law advice UK",
        "workplace rights solicitor",
      ],
      practiceArea: "litigation",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
];
