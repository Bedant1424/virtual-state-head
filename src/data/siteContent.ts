/**
 * AUTHORITATIVE SITE CONTENT & DATA MODEL
 * Virtual State Head — Sales Performance Engine
 * Fully typed, centralized source of truth for all business and program content.
 */

export interface BrandMetadata {
  readonly brandName: string;
  readonly shortName: string;
  readonly programName: string;
  readonly parentEntity: string;
  readonly targetAudience: string;
  readonly location: string;
  readonly positioningStatement: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
}

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface CtaConfig {
  readonly primaryLabel: string;
  readonly secondaryLabel: string;
  readonly helperText: string;
}

export interface EnginePillar {
  readonly id: 'training' | 'technology' | 'accountability';
  readonly name: string;
  readonly focus: string;
  readonly summary: string;
}

export interface Framework {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
}

export interface Coach {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly experience: string;
  readonly bioSummary: string;
  readonly initials: string;
}

export interface EngagementStage {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface AudienceFitCategory {
  readonly type: 'ideal' | 'not_suited';
  readonly heading: string;
  readonly points: readonly string[];
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category?: string;
}

export interface BatchInfo {
  readonly statusBadge: string;
  readonly cohortLimit: string;
  readonly targetMarket: string;
  readonly deliveryModel: string;
  readonly note: string;
}

export interface AuthorityConcept {
  readonly title: string;
  readonly description: string;
}

export interface AuthorityStripData {
  readonly royalBalExperience: string;
  readonly concepts: readonly AuthorityConcept[];
}

export interface SiteContent {
  readonly brand: BrandMetadata;
  readonly navigation: readonly NavigationItem[];
  readonly cta: CtaConfig;
  readonly authority: AuthorityStripData;
  readonly pillars: readonly EnginePillar[];
  readonly frameworks: readonly Framework[];
  readonly coaches: readonly Coach[];
  readonly processStages: readonly EngagementStage[];
  readonly audienceFit: readonly AudienceFitCategory[];
  readonly faqs: readonly FaqItem[];
  readonly batch: BatchInfo;
}

export const siteContent: SiteContent = {
  brand: {
    brandName: 'Virtual State Head',
    shortName: 'VSH',
    programName: 'Sales Performance Engine',
    parentEntity: 'Royal Way Academy',
    targetAudience: 'MSME owners, founders, directors and business leaders in Odisha, India',
    location: 'Odisha, India',
    positioningStatement:
      'Virtual State Head provides experienced sales leadership, strategic direction, team development, performance consulting and accountability support for MSMEs that already have sales activity but need stronger direction, execution and performance discipline.',
    metaTitle: 'Virtual State Head | Sales Leadership & Performance Consulting in Odisha',
    metaDescription:
      'Virtual State Head helps MSMEs in Odisha strengthen sales strategy, develop sales teams, and improve execution through experienced sales leadership and the Sales Performance Engine.',
  },

  navigation: [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'engine', label: 'Sales Performance Engine', href: '#engine' },
    { id: 'coaches', label: 'Our Coaches', href: '#coaches' },
    { id: 'fit', label: 'Who We Help', href: '#fit' },
    { id: 'faq', label: 'FAQs', href: '#faq' },
  ],

  cta: {
    primaryLabel: 'Book Your Sales Strategy Call',
    secondaryLabel: 'Explore the Engine',
    helperText: 'Confidential 1-on-1 strategy discussion for MSME leadership in Odisha.',
  },

  authority: {
    royalBalExperience: '30+ Years Sales Experience (Royal Bal)',
    concepts: [
      {
        title: 'Experienced Sales Leadership',
        description: 'Senior executive direction guiding field execution and pipeline rigor',
      },
      {
        title: 'Strategic Direction',
        description: 'Target market clarity, territory structuring, and margin protection',
      },
      {
        title: 'Team Performance',
        description: 'Capability development, objection handling, and conversion discipline',
      },
      {
        title: 'Accountability',
        description: 'Weekly reviews, pacing governance, and ownership removing founder burden',
      },
    ],
  },

  pillars: [
    {
      id: 'training',
      name: 'Training',
      focus: 'Sales Capability & Skills',
      summary:
        'Equipping field teams with structured negotiation, objection handling, and relationship-building capabilities.',
    },
    {
      id: 'technology',
      name: 'Technology',
      focus: 'Visibility & Tools',
      summary:
        'Enabling lead hygiene, pipeline visibility, daily reporting cadence, and activity tracking without software bloat.',
    },
    {
      id: 'accountability',
      name: 'Accountability',
      focus: 'Governance & Ownership',
      summary:
        'Weekly sales reviews, target pacing, pipeline inspection, and performance governance that removes the burden from founders.',
    },
  ],

  frameworks: [
    {
      id: 'royal-selling-formula',
      name: 'Royal Selling Formula',
      category: 'Core Methodology',
      description:
        'The foundational sales conversion discipline that aligns prospect qualification, discovery, value articulation, and close.',
    },
    {
      id: 'strategic-negotiator',
      name: 'Strategic Negotiator',
      category: 'Commercial Deal Making',
      description:
        'Protects gross margins, handles enterprise procurement pressure, and avoids premature discounting.',
    },
    {
      id: 'sense-selling',
      name: 'Sense Selling',
      category: 'Customer Insight',
      description:
        'Deep situational listening that identifies unstated customer friction and aligns offerings directly with buyer priorities.',
    },
    {
      id: 'performance-consulting',
      name: 'Performance Consulting',
      category: 'Organizational Diagnosis',
      description:
        'Uncovering sales bottlenecks, capability deficits, and pipeline leakages across the distribution and direct sales force.',
    },
    {
      id: 'lifetime-client-relationship',
      name: 'Lifetime Client Relationship (LCR)',
      category: 'Retention & Account Growth',
      description:
        'Transforming one-off transactional sales into sustained recurring business, repeat orders, and referral flywheels.',
    },
  ],

  coaches: [
    {
      id: 'royal-bal',
      name: 'Royal Bal',
      role: 'Founder & Sales Leadership Consultant',
      experience: 'More than 30 Years Experience',
      bioSummary:
        'Veteran enterprise sales leader who has architected state-wide sales distribution engines and coached high-performing sales teams across diverse industry verticals.',
      initials: 'RB',
    },
    {
      id: 'saroj-kumar-panda',
      name: 'Saroj Kumar Panda',
      role: 'Mindfulness Educator & Mindset Coach',
      experience: 'Senior Executive Mentor',
      bioSummary:
        'Focuses on sales resilience, emotional equilibrium under pressure, mindset calibration, and mental stamina for demanding commercial targets.',
      initials: 'SP',
    },
    {
      id: 'sudeep-mohanty',
      name: 'Sudeep Mohanty',
      role: 'Head Coach & Senior Sales Leadership Mentor',
      experience: 'Operational Sales Strategist',
      bioSummary:
        'Specializes in field execution discipline, pipeline management, territory distribution rigor, and accountability reviews.',
      initials: 'SM',
    },
  ],

  processStages: [
    {
      step: 1,
      title: 'Sales Diagnostic',
      description: 'Audit current pipeline, team skill matrix, conversion ratios, and owner bottlenecks.',
    },
    {
      step: 2,
      title: 'Strategy & Territory Alignment',
      description: 'Define clear target sectors, account prioritization, and realistic monthly milestones.',
    },
    {
      step: 3,
      title: 'Capability & Skills Activation',
      description: 'Field coaching on the 5 proprietary frameworks to improve conversion and value defense.',
    },
    {
      step: 4,
      title: 'Technology & Reporting Cadence',
      description: 'Deploy streamlined tracking tools for daily activity metrics and pipeline visibility.',
    },
    {
      step: 5,
      title: 'Weekly Governance & Reviews',
      description: 'Conduct structured weekly sales reviews to drive accountability and deal progression.',
    },
    {
      step: 6,
      title: 'Continuous Performance Optimization',
      description: 'Refine territory coverage, incentives, and leadership capacity for sustained scale.',
    },
  ],

  audienceFit: [
    {
      type: 'ideal',
      heading: 'Designed For',
      points: [
        'Established MSME businesses in Odisha with existing products, customers, and revenues.',
        'Businesses with an active sales team of 3 to 25+ people that requires stronger leadership.',
        'Founders and directors spending too much time firefighting daily sales operations.',
        'Organizations with ambitious revenue targets that want structured execution rather than guesswork.',
      ],
    },
    {
      type: 'not_suited',
      heading: 'Not Designed For',
      points: [
        'Pre-revenue concepts without a validated product or operational business model.',
        'Companies looking for a hands-off lead generation vendor or marketing outsourcing agency.',
        'Teams resistant to weekly accountability, structured reviews, and transparent performance metrics.',
      ],
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What is a Virtual State Head?',
      answer:
        'A Virtual State Head acts as your senior sales director on an advisory and governance model. We provide the strategic clarity, team coaching, and weekly accountability of an enterprise sales leader without the overhead of a full-time executive hire.',
    },
    {
      id: 'faq-2',
      question: 'How is this different from traditional sales training?',
      answer:
        'Traditional training is an isolated event where knowledge fades quickly. The Sales Performance Engine integrates training with technology and ongoing weekly accountability reviews to ensure habits, pipelines, and performance results actually stick.',
    },
    {
      id: 'faq-3',
      question: 'Do we need a full CRM before starting?',
      answer:
        'No. We meet your business where it currently operates—whether using spreadsheets, paper registers, or an existing CRM. We first establish reporting discipline and pipeline hygiene before introducing or optimizing software.',
    },
    {
      id: 'faq-4',
      question: 'Who conducts the weekly reviews?',
      answer:
        'Our senior sales coaches and consultants conduct the weekly performance reviews directly with your sales team and leadership, reviewing pipeline health, deal blockers, and commitments.',
    },
    {
      id: 'faq-5',
      question: 'How are companies selected for the upcoming batch?',
      answer:
        'We select 10 MSME companies in Odisha per cohort to ensure deep executive attention. Selection is based on mutual fit during the initial Sales Strategy Call.',
    },
  ],

  batch: {
    statusBadge: 'Upcoming Focused Engagement',
    cohortLimit: '10 MSME Companies',
    targetMarket: 'Odisha MSMEs',
    deliveryModel: 'Direct Advisory & Leadership',
    note: 'Selection confirmed through mutual fit assessment during initial strategy discussion.',
  },
};
