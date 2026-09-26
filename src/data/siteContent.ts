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

export type EnginePillarKey = 'training' | 'technology' | 'accountability';

export interface EnginePillar {
  readonly id: EnginePillarKey;
  readonly number: string;
  readonly title: string;
  readonly shortLabel: string;
  readonly coreConcept: string;
  readonly description: string;
  readonly visualKey: EnginePillarKey;
  readonly visualIdea: string;
  readonly focusPoints: readonly string[];
  readonly name: string;
  readonly focus: string;
  readonly summary: string;
}

export interface EngineSectionData {
  readonly id: string;
  readonly eyebrow: string;
  readonly headline: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly intro: string;
  readonly pillars: readonly EnginePillar[];
  readonly climax: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
    readonly headline: string;
    readonly statements: readonly {
      readonly pillar: string;
      readonly action: string;
    }[];
    readonly conclusion: string;
  };
  readonly bridge: {
    readonly statement: string;
    readonly targetLabel: string;
    readonly targetHref: string;
  };
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

export interface ProblemStage {
  readonly number: string;
  readonly id: string;
  readonly title: string;
  readonly shortLabel: string;
  readonly description: string;
  readonly visualState: 'misaligned' | 'inconsistent' | 'unaccounted' | 'missed-opportunities' | 'leadership-gap';
  readonly operationalImpact: string;
}

export interface ProblemClimax {
  readonly equation: string;
  readonly supportingStatement: string;
  readonly closingIdea: string;
}

export interface ProblemSectionData {
  readonly id: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly introParagraphs: readonly string[];
  readonly state0Busy: {
    readonly title: string;
    readonly description: string;
  };
  readonly stages: readonly ProblemStage[];
  readonly climax: ProblemClimax;
  readonly bridge: {
    readonly statement: string;
    readonly targetLabel: string;
  };
}

export interface SolutionCapability {
  readonly number: string;
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly focusKey: 'strategy' | 'team' | 'leadership' | 'accountability' | 'execution' | 'discussions';
}

export interface SolutionSectionData {
  readonly id: string;
  readonly eyebrow: string;
  readonly headline: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly introLead: string;
  readonly supportingParagraph1: string;
  readonly supportingParagraph2: string;
  readonly closingIdea: string;
  readonly credibility: {
    readonly name: string;
    readonly experience: string;
    readonly designation: string;
    readonly role: string;
  };
  readonly capabilities: readonly SolutionCapability[];
  readonly bridge: {
    readonly statement: string;
    readonly targetLabel: string;
  };
}

export type ValueAreaKey = 'strategy' | 'team' | 'leadership' | 'accountability' | 'consulting';

export interface BusinessValueArea {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly shortLabel: string;
  readonly description: string;
  readonly visualConcept: string;
  readonly valueKey: ValueAreaKey;
}

export interface BenefitsSectionData {
  readonly id: string;
  readonly eyebrow: string;
  readonly headline: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly introLead: string;
  readonly valueAreas: readonly BusinessValueArea[];
  readonly centralCore: {
    readonly title: string;
    readonly subline: string;
  };
  readonly closing: {
    readonly statement1: string;
    readonly statement2: string;
  };
  readonly bridge: {
    readonly statement: string;
    readonly targetLabel: string;
    readonly targetHref: string;
  };
  readonly tickerItems: readonly string[];
}

export interface SiteContent {
  readonly brand: BrandMetadata;
  readonly navigation: readonly NavigationItem[];
  readonly cta: CtaConfig;
  readonly authority: AuthorityStripData;
  readonly problem: ProblemSectionData;
  readonly solution: SolutionSectionData;
  readonly benefits: BenefitsSectionData;
  readonly engine: EngineSectionData;
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

  problem: {
    id: 'problem',
    eyebrow: 'Diagnostic Exploration • The Performance Gap',
    headline: 'More Salespeople. More Targets. Still Not Enough Sales?',
    introParagraphs: [
      'Many businesses invest in salespeople, processes, and technology.',
      'Yet the results may remain inconsistent.',
      'The problem may not simply be the number of people on the sales team. It may also involve the leadership, direction, execution, and accountability surrounding them.',
    ],
    state0Busy: {
      title: 'High Sales Activity',
      description: 'The team is active, pipelines are moving, and targets are set. But activity alone does not ensure coordinated performance.',
    },
    stages: [
      {
        number: '01',
        id: 'sales-without-clear-direction',
        title: 'Sales Without Clear Direction',
        shortLabel: 'Direction Gap',
        description:
          'Your team is active, but priorities, strategy, and execution may not be aligned with business goals.',
        visualState: 'misaligned',
        operationalImpact:
          'Effort disperses across scattered targets rather than concentrating on core business growth priorities.',
      },
      {
        number: '02',
        id: 'inconsistent-sales-performance',
        title: 'Inconsistent Sales Performance',
        shortLabel: 'Consistency Gap',
        description:
          'Some periods are good. Others are disappointing. Performance may depend too heavily on a few individuals rather than a repeatable system.',
        visualState: 'inconsistent',
        operationalImpact:
          'Revenue rhythm fluctuates unreliably when conversions rely on isolated hero efforts instead of an institutionalized sales system.',
      },
      {
        number: '03',
        id: 'weak-accountability',
        title: 'Weak Accountability',
        shortLabel: 'Accountability Gap',
        description:
          'Targets may be established, but reviews, follow-through, and ownership of results may not be consistent.',
        visualState: 'unaccounted',
        operationalImpact:
          'Sales commitments lose momentum when tracking intervals lack disciplined weekly governance and clear individual ownership.',
      },
      {
        number: '04',
        id: 'missed-opportunities',
        title: 'Missed Opportunities',
        shortLabel: 'Opportunity Gap',
        description:
          'Potential customers, follow-ups, negotiations, and conversions may not receive the attention they require.',
        visualState: 'missed-opportunities',
        operationalImpact:
          'Qualified leads drift out of active pipeline focus due to inconsistent follow-up cadence and unmanaged negotiation stages.',
      },
      {
        number: '05',
        id: 'leadership-gaps',
        title: 'Leadership Gaps',
        shortLabel: 'Leadership Gap',
        description:
          'As the business grows, the owner may find it difficult to manage sales strategy, team performance, customer relationships, and daily operations simultaneously.',
        visualState: 'leadership-gap',
        operationalImpact:
          'Executive bandwidth becomes the central operational bottleneck when leadership, coaching, and execution discipline rest solely on the owner.',
      },
    ],
    climax: {
      equation: 'ACTIVITY ≠ PERFORMANCE',
      supportingStatement:
        'A hardworking sales team still needs direction, execution discipline and accountability around the work.',
      closingIdea:
        'When sales leadership and execution are not aligned, even a hardworking team can struggle to deliver consistent results.',
    },
    bridge: {
      statement: 'When activity is not enough, leadership and structure become the next question.',
      targetLabel: 'Experienced Sales Leadership',
    },
  },

  solution: {
    id: 'about',
    eyebrow: 'Experienced Sales Leadership • Structured Performance Support',
    headline: {
      primary: 'Experienced Sales Leadership.',
      secondary: 'Without Necessarily Hiring Another Full-Time Executive.',
    },
    introLead:
      'Virtual State Head is designed to help MSMEs in Odisha access experienced sales leadership and structured performance support.',
    supportingParagraph1:
      'We work with business owners and sales teams to bring greater clarity to sales strategy, improve execution, strengthen accountability, and develop sales capability.',
    supportingParagraph2:
      'Instead of treating sales challenges as isolated training problems, the approach considers the wider sales performance system.',
    closingIdea:
      'The objective is to help your sales function become more structured, aligned, and performance-focused.',
    credibility: {
      name: 'Royal Bal',
      experience: 'More than 30 years of sales experience',
      designation: 'Sales Leadership Consultant',
      role: 'Founder of Sales Performance Engine',
    },
    capabilities: [
      {
        number: '01',
        id: 'sales-strategy',
        title: 'Sales Strategy',
        description:
          'Bring greater clarity to priorities, direction and actions required to support business objectives.',
        focusKey: 'strategy',
      },
      {
        number: '02',
        id: 'team-development',
        title: 'Team Development',
        description:
          'Develop sales capability, communication, customer engagement and execution discipline.',
        focusKey: 'team',
      },
      {
        number: '03',
        id: 'leadership-support',
        title: 'Leadership Support',
        description:
          'Help business owners and sales leaders strengthen how they guide, manage and support teams.',
        focusKey: 'leadership',
      },
      {
        number: '04',
        id: 'accountability',
        title: 'Accountability',
        description:
          'Establish a more structured approach to reviewing activities, commitments, progress and performance.',
        focusKey: 'accountability',
      },
      {
        number: '05',
        id: 'sales-execution',
        title: 'Sales Execution',
        description:
          'Support implementation of agreed actions and sales practices.',
        focusKey: 'execution',
      },
      {
        number: '06',
        id: 'strategic-discussions',
        title: 'Strategic Discussions',
        description:
          'Work with business owners and leadership teams on important sales decisions and priorities.',
        focusKey: 'discussions',
      },
    ],
    bridge: {
      statement: 'When leadership is in place, the operational benefits become clearer.',
      targetLabel: 'What Your Business Gets',
    },
  },

  benefits: {
    id: 'benefits',
    eyebrow: 'What Your Business Gets • Structured Performance Support',
    headline: {
      primary: 'More Than Training.',
      secondary: 'A Structured Approach to Sales Performance.',
    },
    introLead:
      'Virtual State Head addresses the broader sales-performance system, aligning strategy, capability, leadership, execution, and accountability into a cohesive operational discipline.',
    centralCore: {
      title: 'SALES PERFORMANCE',
      subline: 'Strategy • Capability • Leadership • Accountability • Consulting',
    },
    valueAreas: [
      {
        id: 'sales-strategy',
        number: '01',
        title: 'SALES STRATEGY',
        shortLabel: 'Sales Strategy',
        description:
          'Bring greater clarity to priorities, direction, and the actions required to support business objectives.',
        visualConcept: 'Direction, clarity and commercial priorities',
        valueKey: 'strategy',
      },
      {
        id: 'team-performance',
        number: '02',
        title: 'TEAM PERFORMANCE',
        shortLabel: 'Team Performance',
        description:
          'Develop sales capability, communication, customer engagement, and execution discipline.',
        visualConcept: 'Coordinated capability, skills and communication',
        valueKey: 'team',
      },
      {
        id: 'leadership-support',
        number: '03',
        title: 'LEADERSHIP SUPPORT',
        shortLabel: 'Leadership Support',
        description:
          'Help business owners and sales leaders strengthen the way they guide, manage, and support their teams.',
        visualConcept: 'Guidance and management support for leaders',
        valueKey: 'leadership',
      },
      {
        id: 'accountability',
        number: '04',
        title: 'ACCOUNTABILITY',
        shortLabel: 'Accountability',
        description:
          'Establish a more structured approach to reviewing activities, commitments, progress, and performance.',
        visualConcept: 'Structured review rhythm and commitment tracking',
        valueKey: 'accountability',
      },
      {
        id: 'performance-consulting',
        number: '05',
        title: 'PERFORMANCE CONSULTING',
        shortLabel: 'Performance Consulting',
        description:
          'Identify gaps, discuss practical solutions, and support the implementation of improvements.',
        visualConcept: 'Practical gap identification and solution implementation',
        valueKey: 'consulting',
      },
    ],
    closing: {
      statement1:
        'Sales performance is influenced by strategy, leadership, capability, execution, and accountability.',
      statement2:
        'Virtual State Head brings these elements together through a structured consulting and development approach.',
    },
    bridge: {
      statement: 'When the value areas are clear, the operating engine becomes the foundation for execution.',
      targetLabel: 'Sales Performance Engine',
      targetHref: '#engine',
    },
    tickerItems: ['STRATEGY', 'TEAM', 'LEADERSHIP', 'ACCOUNTABILITY', 'CONSULTING'],
  },

  engine: {
    id: 'engine',
    eyebrow: 'The Operating Approach • Three Core Elements',
    headline: {
      primary: 'Introducing the',
      secondary: 'Sales Performance Engine',
    },
    intro:
      'A structured approach that brings together three essential elements of sales performance.',
    pillars: [
      {
        id: 'training',
        number: '01',
        title: 'TRAINING',
        shortLabel: 'Training',
        coreConcept: 'CAPABILITY',
        description:
          'Develop the skills, mindset, communication, and sales capabilities required for effective performance.',
        visualKey: 'training',
        visualIdea: 'Capability nodes activate and skill signals begin flowing into the system',
        focusPoints: [
          'Sales skills and communication techniques',
          'Negotiation and objection handling',
          'Mindset and disciplined sales habits',
        ],
        name: 'Training',
        focus: 'Sales Capability & Skills',
        summary:
          'Develop the skills, mindset, communication, and sales capabilities required for effective performance.',
      },
      {
        id: 'technology',
        number: '02',
        title: 'TECHNOLOGY',
        shortLabel: 'Technology',
        coreConcept: 'VISIBILITY + EXECUTION SUPPORT',
        description:
          'Use appropriate tools and systems to support sales visibility, tracking, coordination, and execution.',
        visualKey: 'technology',
        visualIdea: 'Visibility pathways, tracking connections, and coordination lines activate',
        focusPoints: [
          'Appropriate pipeline and activity tracking',
          'Sales visibility and coordination tools',
          'Execution support without software bloat',
        ],
        name: 'Technology',
        focus: 'Visibility & Tools',
        summary:
          'Use appropriate tools and systems to support sales visibility, tracking, coordination, and execution.',
      },
      {
        id: 'accountability',
        number: '03',
        title: 'ACCOUNTABILITY',
        shortLabel: 'Accountability',
        coreConcept: 'FOLLOW-THROUGH',
        description:
          'Create greater ownership through structured reviews, clear commitments, follow-through, and performance discussions.',
        visualKey: 'accountability',
        visualIdea: 'Review checkpoints connect, closing the follow-through loop into a repeating rhythm',
        focusPoints: [
          'Structured weekly review cadence',
          'Clear performance commitments',
          'Ownership and follow-through discussions',
        ],
        name: 'Accountability',
        focus: 'Governance & Ownership',
        summary:
          'Create greater ownership through structured reviews, clear commitments, follow-through, and performance discussions.',
      },
    ],
    climax: {
      eyebrow: 'System Integration • Operating Engine',
      title: 'SALES PERFORMANCE ENGINE',
      subtitle: 'TRAINING + TECHNOLOGY + ACCOUNTABILITY',
      headline: 'How the Engine Works Together',
      statements: [
        { pillar: 'Training', action: 'builds capability.' },
        { pillar: 'Technology', action: 'supports execution.' },
        { pillar: 'Accountability', action: 'strengthens follow-through.' },
      ],
      conclusion:
        'When these three elements work together under experienced sales leadership, sales teams build discipline, managers gain visibility, and business owners gain confidence in sales execution.',
    },
    bridge: {
      statement: 'A structured system needs practical sales frameworks.',
      targetLabel: 'Sales Frameworks',
      targetHref: '#frameworks',
    },
  },

  pillars: [
    {
      id: 'training',
      number: '01',
      title: 'TRAINING',
      shortLabel: 'Training',
      coreConcept: 'CAPABILITY',
      description:
        'Develop the skills, mindset, communication, and sales capabilities required for effective performance.',
      visualKey: 'training',
      visualIdea: 'Capability nodes activate and skill signals begin flowing into the system',
      focusPoints: [
        'Sales skills and communication techniques',
        'Negotiation and objection handling',
        'Mindset and disciplined sales habits',
      ],
      name: 'Training',
      focus: 'Sales Capability & Skills',
      summary:
        'Develop the skills, mindset, communication, and sales capabilities required for effective performance.',
    },
    {
      id: 'technology',
      number: '02',
      title: 'TECHNOLOGY',
      shortLabel: 'Technology',
      coreConcept: 'VISIBILITY + EXECUTION SUPPORT',
      description:
        'Use appropriate tools and systems to support sales visibility, tracking, coordination, and execution.',
      visualKey: 'technology',
      visualIdea: 'Visibility pathways, tracking connections, and coordination lines activate',
      focusPoints: [
        'Appropriate pipeline and activity tracking',
        'Sales visibility and coordination tools',
        'Execution support without software bloat',
      ],
      name: 'Technology',
      focus: 'Visibility & Tools',
      summary:
        'Use appropriate tools and systems to support sales visibility, tracking, coordination, and execution.',
    },
    {
      id: 'accountability',
      number: '03',
      title: 'ACCOUNTABILITY',
      shortLabel: 'Accountability',
      coreConcept: 'FOLLOW-THROUGH',
      description:
        'Create greater ownership through structured reviews, clear commitments, follow-through, and performance discussions.',
      visualKey: 'accountability',
      visualIdea: 'Review checkpoints connect, closing the follow-through loop into a repeating rhythm',
      focusPoints: [
        'Structured weekly review cadence',
        'Clear performance commitments',
        'Ownership and follow-through discussions',
      ],
      name: 'Accountability',
      focus: 'Governance & Ownership',
      summary:
        'Create greater ownership through structured reviews, clear commitments, follow-through, and performance discussions.',
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
      role: 'Founder of Sales Performance Engine',
      experience: 'More than 30 years of sales experience',
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
        'Organizations with ambitious business goals that want structured execution rather than guesswork.',
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
