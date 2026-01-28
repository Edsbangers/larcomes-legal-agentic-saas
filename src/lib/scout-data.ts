import type { ScoutLegalUpdate, LinkedInDraft } from "./scout-types";

// ─── Sources the Scout Agent monitors ────────────────────────────────────────
export const scoutSources = [
  { name: "The Law Society RSS", url: "lawsociety.org.uk" },
  { name: "UK Government Legislation Feed", url: "legislation.gov.uk" },
  { name: "UK Gov News", url: "gov.uk/government/news" },
  { name: "Judiciary of England & Wales", url: "judiciary.uk" },
  { name: "SRA Updates", url: "sra.org.uk" },
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
export const scoutDiscoveryPool: Omit<ScoutLegalUpdate, "discoveredAt">[] = [
  {
    id: "LU-006",
    title: "Renters Reform Bill: Section 21 Abolished",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/renters-reform",
    publishedAt: "2026-01-28T08:00:00Z",
    category: "Property Law",
    summary:
      "The Renters Reform Bill has received Royal Assent. Section 21 no-fault evictions are abolished. New mandatory grounds for possession introduced. Tenants gain pet rights. A new Private Rented Sector Ombudsman established.",
    impact: "high",
    draftAlert:
      "Major changes for landlords and tenants — Section 21 evictions abolished under the Renters Reform Bill.",
    linkedInDraft: {
      hook: "If you're a landlord or tenant in England, this changes everything.",
      body: `The Renters Reform Bill has received Royal Assent, fundamentally reshaping the landlord-tenant relationship.

Here's what you need to know:

1. Section 21 "no-fault" evictions are abolished
2. New mandatory grounds for possession have been introduced
3. Tenants gain the right to request pets
4. A new Private Rented Sector Ombudsman will be established
5. Landlords must join a new property portal

For landlords: review your tenancy agreements NOW.
For tenants: you now have significantly stronger protections.`,
      callToAction:
        "Need advice on how these changes affect you? Our property law team at Larcomes Solicitors can help you navigate the new rules. Book a free initial consultation — link in comments.",
      hashtags: [
        "#RentersReform",
        "#PropertyLaw",
        "#LandlordAdvice",
        "#TenantRights",
        "#Section21",
      ],
      nonBrandedKeywords: [
        "property solicitor near me",
        "landlord legal advice",
        "tenant rights UK",
        "section 21 eviction abolished",
        "renters reform bill 2026",
      ],
      practiceArea: "conveyancing",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-007",
    title: "Digital LPA Service: New Online Registration",
    source: "The Law Society",
    sourceUrl: "https://www.lawsociety.org.uk/topics/lpa",
    publishedAt: "2026-01-28T10:30:00Z",
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
    id: "LU-008",
    title: "Cohabitation Rights Bill: First Reading in Parliament",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/cohabitation-rights",
    publishedAt: "2026-01-28T12:00:00Z",
    category: "Family Law",
    summary:
      "A new Cohabitation Rights Bill has been introduced to Parliament. If passed, it would give unmarried cohabiting couples legal rights to financial provision on separation, similar to those available on divorce.",
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
    id: "LU-009",
    title: "Probate Fees Restructured: New Sliding Scale",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/probate-fees",
    publishedAt: "2026-01-28T14:00:00Z",
    category: "Probate",
    summary:
      "The Ministry of Justice has announced a restructured probate fee system. Fees will now operate on a sliding scale based on estate value, replacing the current flat-fee structure. Estates under £5,000 remain exempt.",
    impact: "medium",
    draftAlert:
      "Probate fees moving to a sliding scale based on estate value — could cost more for larger estates.",
    linkedInDraft: {
      hook: "The cost of probate is changing — and depending on the estate, it could cost significantly more.",
      body: `The Ministry of Justice has announced a restructured probate fee system moving from a flat fee to a sliding scale.

The new proposed fee structure:

- Estates under £5,000: No fee (unchanged)
- £5,000 – £50,000: £250
- £50,000 – £100,000: £500
- £100,000 – £250,000: £1,000
- £250,000 – £500,000: £2,500
- £500,000 – £1m: £4,000
- Over £1m: £6,000

For context, the current fee is just £273 for all estates.

This represents a significant increase for larger estates and underscores the importance of proper estate planning.`,
      callToAction:
        "Concerned about how new probate fees could affect your estate? Our probate and estate planning team at Larcomes can help you plan ahead. Contact us for a confidential discussion — link in comments.",
      hashtags: [
        "#ProbateFees",
        "#EstateAdministration",
        "#ProbateSolicitor",
        "#EstatePlanning",
        "#InheritanceTax",
      ],
      nonBrandedKeywords: [
        "probate solicitor near me",
        "grant of probate cost",
        "how to apply for probate",
        "probate fees 2026",
        "estate administration help",
      ],
      practiceArea: "probate",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
  {
    id: "LU-010",
    title: "Employment Rights Bill: Day-One Unfair Dismissal Protection",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/employment-rights-bill",
    publishedAt: "2026-01-28T15:30:00Z",
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
  {
    id: "LU-011",
    title: "Land Registry Digital Transformation: E-Signatures Accepted",
    source: "The Law Society",
    sourceUrl: "https://www.lawsociety.org.uk/topics/property",
    publishedAt: "2026-01-28T16:45:00Z",
    category: "Property Law",
    summary:
      "HM Land Registry now accepts qualified electronic signatures for property transfers and dispositions. This eliminates the need for wet-ink signatures on most conveyancing documents, significantly speeding up the completion process.",
    impact: "medium",
    draftAlert:
      "Land Registry now accepts e-signatures for property transfers — completions set to speed up significantly.",
    linkedInDraft: {
      hook: "You can now buy or sell a house without a single wet-ink signature.",
      body: `HM Land Registry has officially confirmed that qualified electronic signatures are now accepted for property transfers and dispositions.

What this means for your property transaction:

1. No need to print, sign, and post documents
2. Completions can happen faster — potentially same-day
3. Reduced risk of documents being lost in the post
4. Easier for parties living abroad or unable to attend in person
5. Full legal validity — equivalent to wet-ink signatures

This is the biggest modernisation of the conveyancing process in years and will make buying and selling property significantly smoother.`,
      callToAction:
        "Ready to buy or sell? Our conveyancing team at Larcomes is set up for fully digital transactions. Get a fixed-fee quote today — link in comments.",
      hashtags: [
        "#Conveyancing",
        "#PropertyLaw",
        "#ESignatures",
        "#LegalTech",
        "#HouseBuying",
      ],
      nonBrandedKeywords: [
        "conveyancing solicitor near me",
        "house buying solicitor",
        "property solicitor fees",
        "conveyancing quote",
        "first-time buyer solicitor",
      ],
      practiceArea: "conveyancing",
      estimatedReadTime: "< 1 min read",
    },
    status: "new",
    isNew: true,
  },
];
