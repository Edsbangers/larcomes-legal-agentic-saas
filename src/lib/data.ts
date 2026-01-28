// ─── Audit Statistics ────────────────────────────────────────────────────────
export const auditStats = {
  totalVisits: 12179,
  bounceRate: 43.81,
  mobileTrafficPercent: 71.54,
  desktopTrafficPercent: 28.46,
  nonBrandedSearchPercent: 99,
  brandedSearchPercent: 1,
  avgSessionDuration: "2m 34s",
  pagesPerSession: 3.2,
  topPages: [
    { path: "/", views: 4231, bounceRate: 38.2 },
    { path: "/probate", views: 2847, bounceRate: 41.5 },
    { path: "/conveyancing", views: 1923, bounceRate: 44.1 },
    { path: "/divorce", views: 1456, bounceRate: 47.3 },
    { path: "/contact", views: 1722, bounceRate: 52.8 },
  ],
  conversionRates: {
    mobile: 2.3,
    desktop: 4.8,
    overall: 3.1,
  },
  monthlyVisits: [
    { month: "Jul", visits: 980, conversions: 29 },
    { month: "Aug", visits: 1045, conversions: 33 },
    { month: "Sep", visits: 1120, conversions: 36 },
    { month: "Oct", visits: 1190, conversions: 38 },
    { month: "Nov", visits: 1050, conversions: 31 },
    { month: "Dec", visits: 890, conversions: 26 },
    { month: "Jan", visits: 1150, conversions: 37 },
    { month: "Feb", visits: 1080, conversions: 34 },
    { month: "Mar", visits: 1210, conversions: 41 },
    { month: "Apr", visits: 1140, conversions: 35 },
    { month: "May", visits: 1175, conversions: 39 },
    { month: "Jun", visits: 1149, conversions: 36 },
  ],
  deviceBreakdown: [
    { device: "Mobile", percent: 71.54, sessions: 8714 },
    { device: "Desktop", percent: 28.46, sessions: 3465 },
  ],
  searchVisibility: [
    { type: "Non-Branded", percent: 99 },
    { type: "Branded", percent: 1 },
  ],
};

// ─── Legal Practice Areas ────────────────────────────────────────────────────
export const practiceAreas = [
  {
    id: "probate",
    title: "Probate & Estate Administration",
    icon: "Scale",
    description:
      "Expert guidance through the probate process, will disputes, and estate administration.",
    keywords: ["probate", "will", "estate", "inheritance", "executor"],
  },
  {
    id: "divorce",
    title: "Divorce & Family Law",
    icon: "Heart",
    description:
      "Compassionate support through divorce, child custody, and financial settlements.",
    keywords: ["divorce", "family", "custody", "separation", "marriage"],
  },
  {
    id: "conveyancing",
    title: "Conveyancing & Property",
    icon: "Home",
    description:
      "Efficient property transactions for buyers, sellers, and remortgage clients.",
    keywords: [
      "conveyancing",
      "property",
      "house",
      "buying",
      "selling",
      "mortgage",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Property",
    icon: "Building2",
    description:
      "Lease negotiations, acquisitions, and disposal of commercial premises.",
    keywords: ["commercial", "lease", "business", "premises", "rent"],
  },
  {
    id: "litigation",
    title: "Dispute Resolution",
    icon: "Gavel",
    description:
      "Effective representation in civil disputes, mediation, and litigation.",
    keywords: ["dispute", "litigation", "court", "claim", "mediation"],
  },
  {
    id: "wills",
    title: "Wills & Trusts",
    icon: "FileText",
    description:
      "Drafting wills, setting up trusts, and lasting powers of attorney.",
    keywords: ["will", "trust", "power of attorney", "LPA", "planning"],
  },
];

// ─── AEO FAQ Data ────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  practiceArea: string;
  schema: {
    "@type": "Question";
    name: string;
    acceptedAnswer: { "@type": "Answer"; text: string };
  };
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does the probate process take in England and Wales?",
    answer:
      "The probate process typically takes between 6 to 12 months, depending on the complexity of the estate. Simple estates with a valid will may be resolved in 6-9 months, while contested estates or those involving property abroad can take 12 months or more. Our team ensures efficient administration while maintaining full compliance with legal requirements.",
    category: "Process & Timelines",
    practiceArea: "probate",
    schema: {
      "@type": "Question",
      name: "How long does the probate process take in England and Wales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The probate process typically takes between 6 to 12 months, depending on the complexity of the estate.",
      },
    },
  },
  {
    id: "faq-2",
    question: "What are the grounds for divorce in the UK since April 2022?",
    answer:
      "Since 6 April 2022, England and Wales adopted no-fault divorce under the Divorce, Dissolution and Separation Act 2020. Either spouse can apply by stating the marriage has irretrievably broken down, without needing to prove fault such as adultery or unreasonable behaviour. Joint applications are also available.",
    category: "Legal Requirements",
    practiceArea: "divorce",
    schema: {
      "@type": "Question",
      name: "What are the grounds for divorce in the UK since April 2022?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since 6 April 2022, no-fault divorce is available. Either spouse can state the marriage has irretrievably broken down without proving fault.",
      },
    },
  },
  {
    id: "faq-3",
    question: "How much does conveyancing cost for a house purchase?",
    answer:
      "Conveyancing fees for a standard house purchase typically range from £800 to £1,500 plus VAT, depending on the property value and complexity. Additional disbursements include Land Registry fees (£20-£910), search fees (£250-£400), and Stamp Duty Land Tax where applicable. We provide a transparent fixed-fee quote at the outset.",
    category: "Costs & Fees",
    practiceArea: "conveyancing",
    schema: {
      "@type": "Question",
      name: "How much does conveyancing cost for a house purchase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conveyancing fees typically range from £800 to £1,500 plus VAT, depending on property value and complexity.",
      },
    },
  },
  {
    id: "faq-4",
    question: "Do I need a Grant of Probate if there is no will?",
    answer:
      "If someone dies without a will (intestate), you will need to apply for a Grant of Letters of Administration instead of a Grant of Probate. This is required if the deceased had assets exceeding the threshold set by financial institutions (typically £5,000-£50,000). The intestacy rules determine who inherits and who can apply for the grant.",
    category: "Process & Timelines",
    practiceArea: "probate",
    schema: {
      "@type": "Question",
      name: "Do I need a Grant of Probate if there is no will?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a will, you need a Grant of Letters of Administration. The intestacy rules determine inheritance and who can apply.",
      },
    },
  },
  {
    id: "faq-5",
    question: "What is the difference between a solicitor and a conveyancer?",
    answer:
      "A solicitor is a fully qualified legal professional who can handle all areas of law, while a licensed conveyancer specialises solely in property law. Both can handle conveyancing transactions. Solicitors may offer broader legal support if complications arise, such as boundary disputes or complex chain issues.",
    category: "General Legal",
    practiceArea: "conveyancing",
    schema: {
      "@type": "Question",
      name: "What is the difference between a solicitor and a conveyancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solicitors are qualified across all law areas; licensed conveyancers specialise in property. Both can handle property transactions.",
      },
    },
  },
  {
    id: "faq-6",
    question: "How is child custody decided in the UK?",
    answer:
      "The court's paramount consideration is the welfare of the child. Under the Children Act 1989, the court considers a welfare checklist including the child's physical, emotional and educational needs, the likely effect of any change, the child's age, sex, background, any harm suffered, and the capability of each parent. Most arrangements are agreed by parents without court intervention.",
    category: "Legal Requirements",
    practiceArea: "divorce",
    schema: {
      "@type": "Question",
      name: "How is child custody decided in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The court prioritises child welfare using the Children Act 1989 welfare checklist, considering needs, age, background, and parental capability.",
      },
    },
  },
  {
    id: "faq-7",
    question: "What is a Lasting Power of Attorney and do I need one?",
    answer:
      "A Lasting Power of Attorney (LPA) is a legal document that lets you appoint someone you trust to make decisions on your behalf if you lose mental capacity. There are two types: Property and Financial Affairs, and Health and Welfare. Anyone over 18 can make an LPA. It is strongly recommended as part of future planning.",
    category: "Planning & Prevention",
    practiceArea: "wills",
    schema: {
      "@type": "Question",
      name: "What is a Lasting Power of Attorney and do I need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An LPA lets a trusted person make decisions for you if you lose capacity. Two types exist: financial and health. Recommended for all adults.",
      },
    },
  },
  {
    id: "faq-8",
    question: "How long does a house purchase take from offer to completion?",
    answer:
      "A typical house purchase takes 8-12 weeks from offer acceptance to completion, though this can vary. Factors affecting timelines include chain length, mortgage approval speed, search results, and any legal issues arising from the title. Leasehold properties and new builds may take longer due to additional legal requirements.",
    category: "Process & Timelines",
    practiceArea: "conveyancing",
    schema: {
      "@type": "Question",
      name: "How long does a house purchase take from offer to completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 8-12 weeks from offer to completion, varying by chain length, mortgage speed, and any legal issues.",
      },
    },
  },
];

// ─── Lead Pipeline Data ──────────────────────────────────────────────────────
export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "instructed"
  | "closed";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  status: LeadStatus;
  summary: string;
  urgency: "low" | "medium" | "high";
  createdAt: string;
  lastActivity: string;
}

export const sampleLeads: Lead[] = [
  {
    id: "L-001",
    name: "Sarah Mitchell",
    email: "s.mitchell@email.co.uk",
    phone: "07700 900123",
    practiceArea: "probate",
    status: "new",
    summary:
      "Mother passed away last week. Has a will naming her as executor. Estate includes property valued ~£350,000.",
    urgency: "high",
    createdAt: "2026-01-27T09:15:00Z",
    lastActivity: "2026-01-27T09:15:00Z",
  },
  {
    id: "L-002",
    name: "James & Karen Patel",
    email: "j.patel@email.co.uk",
    phone: "07700 900456",
    practiceArea: "conveyancing",
    status: "contacted",
    summary:
      "First-time buyers. Offer accepted at £275,000. Mortgage in principle obtained from Nationwide.",
    urgency: "medium",
    createdAt: "2026-01-25T14:30:00Z",
    lastActivity: "2026-01-26T11:00:00Z",
  },
  {
    id: "L-003",
    name: "Emma Thornton",
    email: "e.thornton@email.co.uk",
    phone: "07700 900789",
    practiceArea: "divorce",
    status: "qualified",
    summary:
      "Seeking no-fault divorce. Two children (ages 8, 12). Jointly owned property. Amicable separation.",
    urgency: "medium",
    createdAt: "2026-01-22T10:00:00Z",
    lastActivity: "2026-01-26T16:45:00Z",
  },
  {
    id: "L-004",
    name: "Robert Chen",
    email: "r.chen@email.co.uk",
    phone: "07700 900321",
    practiceArea: "commercial",
    status: "instructed",
    summary:
      "Commercial lease renewal for retail premises in Portsmouth. Current lease expires March 2026.",
    urgency: "high",
    createdAt: "2026-01-18T08:45:00Z",
    lastActivity: "2026-01-27T08:30:00Z",
  },
  {
    id: "L-005",
    name: "Diana Osei",
    email: "d.osei@email.co.uk",
    phone: "07700 900654",
    practiceArea: "wills",
    status: "new",
    summary:
      "Wants to draft a will and set up LPA. Recently diagnosed with early-stage Parkinson's.",
    urgency: "high",
    createdAt: "2026-01-27T07:30:00Z",
    lastActivity: "2026-01-27T07:30:00Z",
  },
  {
    id: "L-006",
    name: "Mark Williams",
    email: "m.williams@email.co.uk",
    phone: "07700 900987",
    practiceArea: "litigation",
    status: "contacted",
    summary:
      "Neighbour boundary dispute. Fence erected encroaching 2ft onto property. Seeking resolution.",
    urgency: "low",
    createdAt: "2026-01-24T13:20:00Z",
    lastActivity: "2026-01-25T09:00:00Z",
  },
  {
    id: "L-007",
    name: "Angela Foster",
    email: "a.foster@email.co.uk",
    phone: "07700 900111",
    practiceArea: "probate",
    status: "qualified",
    summary:
      "Intestate estate. Father died without a will. Three siblings disputing distribution.",
    urgency: "high",
    createdAt: "2026-01-20T11:00:00Z",
    lastActivity: "2026-01-26T14:20:00Z",
  },
  {
    id: "L-008",
    name: "Tom & Lisa Harper",
    email: "t.harper@email.co.uk",
    phone: "07700 900222",
    practiceArea: "conveyancing",
    status: "new",
    summary:
      "Selling property and purchasing new build. Chain-free sale. Completion target April 2026.",
    urgency: "medium",
    createdAt: "2026-01-26T16:00:00Z",
    lastActivity: "2026-01-26T16:00:00Z",
  },
];

// ─── Legal Update Scout Data ─────────────────────────────────────────────────
export interface LegalUpdate {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  category: string;
  summary: string;
  impact: "low" | "medium" | "high";
  draftAlert: string;
  status: "new" | "reviewed" | "published" | "dismissed";
}

export const legalUpdates: LegalUpdate[] = [
  {
    id: "LU-001",
    title: "Leasehold and Freehold Reform Act 2024 - Implementation Update",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/leasehold-reform",
    publishedAt: "2026-01-25T10:00:00Z",
    category: "Property Law",
    summary:
      "New provisions extending lease terms to 990 years for both houses and flats. Ground rent capped. Marriage value abolished for lease extensions.",
    impact: "high",
    draftAlert:
      "Major changes to leasehold law are now in effect. Flat and house leaseholders can now extend leases to 990 years with ground rent capped. If you're a leaseholder, this could significantly benefit you. Contact us for advice on your options. #LeaseholdReform #PropertyLaw",
    status: "new",
  },
  {
    id: "LU-002",
    title: "Digital Probate Service Expansion",
    source: "The Law Society",
    sourceUrl: "https://www.lawsociety.org.uk/topics/probate",
    publishedAt: "2026-01-23T14:30:00Z",
    category: "Probate",
    summary:
      "HMCTS expanding online probate application service. New features include digital document upload and real-time status tracking.",
    impact: "medium",
    draftAlert:
      "Good news for executors - the digital probate service is expanding with new online features. Applications can now be tracked in real-time. Our probate team is fully equipped to guide you through the updated process. #Probate #DigitalJustice",
    status: "reviewed",
  },
  {
    id: "LU-003",
    title: "Family Court Mediation Requirement Changes",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/government/news/family-mediation",
    publishedAt: "2026-01-20T09:00:00Z",
    category: "Family Law",
    summary:
      "Mandatory mediation information sessions now required before all private family law applications. Expanded funding for mediation services.",
    impact: "high",
    draftAlert:
      "Important update for separating couples: mediation information sessions are now mandatory before court applications. This aims to resolve disputes faster and more amicably. Our family law team can explain what this means for you. #FamilyLaw #Mediation",
    status: "published",
  },
  {
    id: "LU-004",
    title: "Anti-Money Laundering: Updated Guidance for Conveyancers",
    source: "The Law Society",
    sourceUrl: "https://www.lawsociety.org.uk/topics/anti-money-laundering",
    publishedAt: "2026-01-18T11:00:00Z",
    category: "Compliance",
    summary:
      "New guidance on source of funds verification for property transactions. Enhanced due diligence thresholds updated. Digital ID verification standards revised.",
    impact: "medium",
    draftAlert:
      "Updated AML guidance for property transactions is in effect. Enhanced verification procedures apply to all conveyancing matters. Rest assured, our compliance processes are fully up to date. #AML #Compliance #Conveyancing",
    status: "reviewed",
  },
  {
    id: "LU-005",
    title: "Stamp Duty Land Tax: Temporary Thresholds Extended",
    source: "UK Government",
    sourceUrl: "https://www.gov.uk/stamp-duty-land-tax",
    publishedAt: "2026-01-15T08:00:00Z",
    category: "Tax & Property",
    summary:
      "The current SDLT thresholds for residential property have been extended. First-time buyer relief threshold remains at £425,000.",
    impact: "high",
    draftAlert:
      "Great news for homebuyers! SDLT thresholds have been extended, meaning potential savings on your property purchase. First-time buyers continue to benefit from relief up to £425k. Get in touch for a full breakdown. #SDLT #PropertyBuying #FirstTimeBuyer",
    status: "new",
  },
];

// ─── Audit Log Data ──────────────────────────────────────────────────────────
export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  details: string;
  ipAddress: string;
  riskLevel: "info" | "warning" | "critical";
}

export const auditLog: AuditLogEntry[] = [
  {
    id: "AL-001",
    timestamp: "2026-01-27T09:15:23Z",
    user: "j.hartley@larcomes.co.uk",
    action: "LOGIN",
    resource: "Partner Dashboard",
    details: "Successful authentication via SSO",
    ipAddress: "81.129.xxx.xxx",
    riskLevel: "info",
  },
  {
    id: "AL-002",
    timestamp: "2026-01-27T09:18:45Z",
    user: "j.hartley@larcomes.co.uk",
    action: "VIEW",
    resource: "Lead Pipeline",
    details: "Accessed lead L-001 (Sarah Mitchell - Probate)",
    ipAddress: "81.129.xxx.xxx",
    riskLevel: "info",
  },
  {
    id: "AL-003",
    timestamp: "2026-01-27T09:22:10Z",
    user: "j.hartley@larcomes.co.uk",
    action: "UPDATE",
    resource: "Lead L-003",
    details: 'Status changed from "contacted" to "qualified"',
    ipAddress: "81.129.xxx.xxx",
    riskLevel: "info",
  },
  {
    id: "AL-004",
    timestamp: "2026-01-27T08:45:00Z",
    user: "system@larcomes.co.uk",
    action: "SCRAPE",
    resource: "Legal Update Scout",
    details: "Automated scan of Law Society RSS feed - 2 new items found",
    ipAddress: "10.0.xxx.xxx",
    riskLevel: "info",
  },
  {
    id: "AL-005",
    timestamp: "2026-01-26T23:01:00Z",
    user: "system@larcomes.co.uk",
    action: "EXPORT",
    resource: "Analytics Data",
    details: "Monthly analytics report exported (Jan 2026)",
    ipAddress: "10.0.xxx.xxx",
    riskLevel: "warning",
  },
  {
    id: "AL-006",
    timestamp: "2026-01-26T17:30:00Z",
    user: "a.patel@larcomes.co.uk",
    action: "DATA_RESIDENCY",
    resource: "Compliance Settings",
    details: "Data residency toggled to UK-only storage",
    ipAddress: "81.129.xxx.xxx",
    riskLevel: "warning",
  },
  {
    id: "AL-007",
    timestamp: "2026-01-26T14:20:00Z",
    user: "s.clarke@larcomes.co.uk",
    action: "DELETE",
    resource: "Lead L-009",
    details: "Lead deleted - duplicate entry identified",
    ipAddress: "81.129.xxx.xxx",
    riskLevel: "critical",
  },
  {
    id: "AL-008",
    timestamp: "2026-01-26T11:05:00Z",
    user: "j.hartley@larcomes.co.uk",
    action: "PUBLISH",
    resource: "Legal Alert LU-003",
    details: "Legal alert published to social media channels",
    ipAddress: "81.129.xxx.xxx",
    riskLevel: "info",
  },
];
