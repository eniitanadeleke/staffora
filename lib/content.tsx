/**
 * All copy below is taken word-for-word from the client's
 * "Staffora Website Content" document. Do not reword without client approval.
 * Icons are from lucide-react (https://lucide.dev).
 */
import type { LucideIcon } from "lucide-react";
import {
  UserCog, Dices, Activity, DoorOpen,
  Building2, UserSearch, Route,
  Network, FileText, ListChecks, Gauge, CalendarRange, ClipboardCheck,
  Workflow, Crown, Target, BadgeCheck, Filter, PenTool,
  ClipboardList, ShieldAlert, GitBranch, ArrowLeftRight, House, Sprout,
  ScanSearch, Briefcase, Cog, Compass,
  Stethoscope, PencilRuler, Hammer,
  Focus, Scale, Wrench, Telescope,
  Feather, Mountain, KeyRound, Handshake, TrendingUp,
  Building, Hotel, Wheat, Cpu, UtensilsCrossed, Presentation, Sofa,
  FileSearch, MessagesSquare, Lightbulb, CalendarCheck,
  Map, MessageSquareText, FileSpreadsheet, PhoneCall,
  CircleCheck,
} from "lucide-react";

export type Item = { label: string; icon: LucideIcon };

/* ---------------- Home: Is Your Business Built to Scale? ---------------- */
export const scale = {
  title: "Is Your Business Built to Scale?",
  lead: "Growth exposes the weaknesses that were easy to ignore when the business was smaller.",
  body: "Roles become unclear. The founder becomes the decision-maker for everything. Hiring becomes reactive. Good employees leave. And performance becomes inconsistent.",
  familiar: "If any of these sound familiar, you're not alone.",
};

export const problems = [
  {
    icon: UserCog,
    quote: "“I can't step away without everything slowing down.”",
    body: ["Every decision comes back to you. You approve payments, solve employee issues, review work, manage key relationships and keep operations moving."],
    point: "Your business is growing, but it still depends heavily on you.",
  },
  {
    icon: Dices,
    quote: "“Finding competent employees feels like a gamble.”",
    body: ["You hire someone who looks great on paper, only to discover they struggle with ownership, problem-solving or the realities of the role."],
    point: "The problem isn't always a lack of talent. Sometimes, the business isn't equipped to identify the right talent.",
  },
  {
    icon: Activity,
    quote: "“We have good people, but performance is inconsistent.”",
    body: [
      "Your team is busy, but being busy isn't the same as performing.",
      "Expectations aren't always clear. Accountability varies. Managers handle similar situations differently. Work depends too much on individual people.",
    ],
    point: "You need a system that makes good performance easier to repeat.",
  },
  {
    icon: DoorOpen,
    quote: "“Our best people don't stay.”",
    body: ["Good employees leave when they don't see growth, expectations are unclear, managers aren't equipped to support them, or the workplace becomes frustrating."],
    point: "Retention isn't just about salary. It's about the experience of working in your organisation.",
  },
];

export const connected = {
  title: "These aren't four separate problems. They're connected.",
  body: "Hiring, structure, performance and retention all affect one another.",
  point: "Staffora helps you address the systems behind these problems not just the symptoms.",
  cta: "Explore Our Solutions",
};

/* ---------------- Services ---------------- */
export type Service = {
  id: string;
  icon: LucideIcon;
  name: string;
  /** Headline used in "How We Help" on the homepage */
  homeHeadline: string;
  /** Text used in "How We Help" on the homepage */
  homeText: string;
  homeLink: string;
  /** Headline used on the Services page */
  headline: string;
  text: string;
  link: string;
  items: Item[];
};

export const services: Service[] = [
  {
    id: "hr-consulting",
    icon: Building2,
    name: "HR Consulting & Organisational Structure",
    homeHeadline: "Build a business that can operate with clarity and accountability.",
    homeText:
      "We help growing businesses in Nigeria put the right structures, processes and people systems in place so work doesn't depend on guesswork or individual people.",
    homeLink: "Explore HR Consulting",
    headline: "Build the structure your business needs to perform and grow.",
    text:
      "As your business grows, informal ways of working become harder to manage. We help you create clearer structures, processes and people systems that improve accountability and make the business easier to manage.",
    link: "Explore HR Consulting",
    items: [
      { label: "HR Structure & Strategy", icon: Network },
      { label: "HR Policies & Processes", icon: FileText },
      { label: "SOP Development & Process Improvement", icon: ListChecks },
      { label: "Performance Management Systems", icon: Gauge },
      { label: "Workforce Planning", icon: CalendarRange },
      { label: "HR Audits & Advisory", icon: ClipboardCheck },
    ],
  },
  {
    id: "recruitment",
    icon: UserSearch,
    name: "Recruitment & Performance Hiring",
    homeHeadline: "Hire people who can perform—not just people who look good on paper.",
    homeText:
      "We help businesses define what success looks like in a role, identify the right candidates and use structured assessments to make better hiring decisions.",
    homeLink: "Explore Recruitment",
    headline: "Hire people who can perform, not just people who look good on paper.",
    text:
      "We help growing businesses identify what success looks like in a role, find qualified candidates and make better hiring decisions through a structured, evidence-based process.",
    link: "Explore Recruitment",
    items: [
      { label: "End-to-End Recruitment", icon: Workflow },
      { label: "Leadership & Key-Role Recruitment", icon: Crown },
      { label: "Performance Hiring™", icon: Target },
      { label: "Competency-Based Hiring", icon: BadgeCheck },
      { label: "Talent Pipeline Development", icon: Filter },
      { label: "Recruitment Process Design", icon: PenTool },
    ],
  },
  {
    id: "succession-planning",
    icon: Route,
    name: "Succession Planning & Family Business Continuity",
    homeHeadline: "Build a business that can continue beyond its key people.",
    homeText:
      "We help business owners in Nigeria identify critical roles, reduce dependency on individuals, prepare for leadership transitions and create practical plans for business continuity.",
    homeLink: "Explore Succession & Continuity",
    headline: "Build a business that can continue beyond its key people.",
    text:
      "We help founders and family-owned businesses prepare for the future by reducing dependency on critical individuals, identifying future successors and creating practical plans for continuity.",
    link: "Explore Succession Planning",
    items: [
      { label: "Succession Readiness Assessment", icon: ClipboardList },
      { label: "Key-Person Risk Assessment", icon: ShieldAlert },
      { label: "Succession Planning", icon: GitBranch },
      { label: "Knowledge & Responsibility Transfer", icon: ArrowLeftRight },
      { label: "Family Business Structure", icon: House },
      { label: "Next Generation Development", icon: Sprout },
    ],
  },
];

export const howWeHelp = {
  title: "Build the Organisation Behind Your Business",
  body: "Growing businesses need more than good employees. They need the right structure, the right people, and a plan for continuity.",
  lead: "Staffora helps business owners strengthen three critical areas:",
};

export const servicesPage = {
  title: "Practical solutions for growing businesses",
  intro: "We help growing businesses build stronger organisations through",
  introBold: "HR consulting, performance-focused recruitment, and succession planning.",
  includes: "Services include:",
};

/* ---------------- Why Businesses Choose Staffora ---------------- */
export type Reason = { icon: LucideIcon; title: string; body: string[]; questions?: string[]; after?: string; point: string };

export const reasons: Reason[] = [
  {
    icon: ScanSearch,
    title: "We Look Beyond the Immediate Problem",
    body: [
      "A hiring problem may actually be a structure problem.",
      "A performance problem may actually be a management or accountability problem.",
      "A retention problem may start with how people are hired and onboarded.",
    ],
    point: "We look at what's causing the problem, not just what's happening on the surface.",
  },
  {
    icon: Briefcase,
    title: "We Start With the Business",
    body: [
      "We don't recommend HR activities simply because they're considered “best practice.”",
      "We first understand how your business operates, where people-related challenges are affecting performance, and what needs to change.",
    ],
    point: "Our solutions are built around your business; not a generic HR template.",
  },
  {
    icon: Cog,
    title: "We Build Practical Systems",
    body: [
      "Your policies shouldn't sit in a folder. Your processes shouldn't depend on one person remembering what to do.",
      "We build practical structures, processes and people systems that your team can actually use and maintain.",
    ],
    point: "",
  },
  {
    icon: Compass,
    title: "We Build for What Comes Next",
    body: ["Growing businesses eventually face bigger questions:"],
    questions: [
      "Who can take on more responsibility?",
      "What happens when a key employee leaves?",
      "Can the business operate without the founder?",
      "Are we preparing the people who will take the business forward?",
    ],
    after: "We help businesses build with the future in mind—not just solve today's problem.",
    point: "",
  },
];

/* ---------------- How We Work (from the client's company profile) ---------------- */
export const approach = [
  { icon: Stethoscope, step: "Diagnose", body: "Understand the business, people and underlying challenge." },
  { icon: PencilRuler, step: "Design", body: "Develop the structure, strategy or solution the business needs." },
  { icon: Hammer, step: "Build", body: "Put practical systems, people and processes in place." },
];

/* ---------------- Client Success Stories ---------------- */
export const stories = {
  title: "From HR Gaps to Better Business Systems",
  intro:
    "Real examples of how Staffora has helped growing businesses strengthen their people practices, make better hiring decisions and build stronger organisations.",
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  person: string;
  quote: string[];
  challenge: string;
  action: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cinnamona-bakery",
    title: "Creating Clarity in People Management",
    client: "Cinnamona Bakery",
    person: "Ms. Eeman, Cinnamona Bakery",
    quote: [
      "Working with Staffora has made documentation and administration much easier. It has given us clarity on management improvements and made the workplace more enjoyable.",
    ],
    challenge:
      "Low employee morale, poor communication with management, feelings of being undervalued, and increasing employee turnover.",
    action:
      "We reviewed the organisation's people practices and strengthened its HR documentation, management processes and employee communication systems.",
    result:
      "Management gained greater clarity in managing employees, while employees had clearer communication channels and a more structured workplace experience.",
  },
  {
    id: "modexpress",
    title: "Hiring the Right Leader for the Business",
    client: "Modexpress",
    person: "Ms. Rosemary, CEO, Modexpress",
    quote: [
      "Staffora Global really impressed me with the recruitment of my Dispatch and Operations Supervisor. From the initial consulting process and salary advice to the speed at which they closed the role, every step was handled professionally and efficiently.",
      "They also prepared an employment contract that covered important areas I hadn't initially considered necessary, which gave me greater confidence and clarity as an employer.",
      "Most importantly, the quality of the hire has been exceptional. The employee is truly an answer to prayers, and I'm genuinely pleased with the outcome. Staffora Global delivered beyond my expectations.",
    ],
    challenge:
      "The business needed to fill a key operational role with the right candidate while ensuring the position, compensation and employment terms were properly structured.",
    action:
      "We provided salary advisory, managed the recruitment process and developed an employment contract covering important employment considerations.",
    result:
      "The role was successfully filled with a high-quality hire, giving the client greater confidence in both the hiring decision and the employment process.",
  },
];

/* ---------------- CTA ---------------- */
export const mainCta = {
  title: "Ready to Build a Business That Doesn't Depend on One Person?",
  body:
    "Whether you need to strengthen your HR structure, hire the right people or prepare your business for the future, Staffora helps you build the systems and people needed for sustainable performance.",
};

/* ---------------- About ---------------- */
export const about = {
  title: "Building Sustainable Performance™",
  lead:
    "Staffora Global helps growing businesses build the structure, people and systems they need to perform, grow and scale sustainably.",
  body:
    "We work with business owners to strengthen their HR foundations, hire the right people and prepare their organisations for what comes next.",
  existsEyebrow: "Why Staffora Exists",
  existsTitle: "Growing a Business Changes Everything",
  exists: [
    "What works when a business has five employees doesn't always work when it has twenty or fifty.",
    "As businesses grow, founders often find themselves making more decisions, managing more people and solving problems that should no longer depend on them.",
    "Hiring becomes reactive. Roles become unclear. Processes live in people's heads. Performance becomes inconsistent.",
  ],
  existsPoint:
    "Staffora exists to help growing businesses in Nigeria build the structure and people systems that allow the organisation to grow beyond informal ways of working.",
  approachEyebrow: "Our Approach",
  approachTitle: "We Look Beyond the Immediate Problem",
  approach: [
    "A hiring problem may actually be a structure problem.",
    "A performance problem may be an accountability problem.",
    "A retention problem may begin with how people are hired, onboarded or managed.",
  ],
  approachPoint: "We look at what's causing the problem not just what's happening on the surface.",
  approachAfter:
    "We combine practical HR consulting, structured recruitment and organisational thinking to help businesses make better people decisions.",
  ctaTitle: "Build for Today. Prepare for Tomorrow.",
  ctaBody:
    "Whether you need to strengthen your HR structure, hire the right people or prepare your business for continuity, Staffora helps you build the people and organisational foundation for sustainable performance.",
};

export const founder = {
  title: "Founded by Adesewa Herbert",
  body: [
    "Adesewa Herbert is an HR and Organisational Performance Consultant and the Founder of Staffora Global.",
    "With over nine years of experience working with growing businesses, she helps business owners build stronger organisational structures, hire and develop the right people, and put the systems and leadership practices in place for sustainable performance.",
    "Her work focuses on helping businesses move beyond founder-dependence and build organisations that can perform, grow and thrive beyond any one individual.",
  ],
};

export const beliefs = [
  { icon: Focus, title: "People perform better when the organisation is clear.", body: "Clear roles, expectations and processes create better conditions for people to succeed." },
  { icon: Scale, title: "Hiring is a business decision, not just an HR activity.", body: "The right hire should solve a business need not simply fill a vacancy." },
  { icon: Wrench, title: "Systems should work in the real world.", body: "We build practical solutions that businesses can actually implement and maintain." },
  { icon: Telescope, title: "Businesses should prepare for what comes next.", body: "Growth, key-person exits and leadership transitions shouldn't catch a business unprepared." },
];

export const values = [
  { icon: Feather, letter: "S", name: "Simplicity", body: "We turn complex people and organisational challenges into practical solutions." },
  { icon: Mountain, letter: "C", name: "Courage", body: "We ask the difficult questions and challenge structures that hold businesses back." },
  { icon: KeyRound, letter: "O", name: "Ownership", body: "We take responsibility, act with initiative, and follow through." },
  { icon: Handshake, letter: "P", name: "Partnership", body: "We work alongside business owners as trusted advisors, not just service providers." },
  { icon: TrendingUp, letter: "E", name: "Evolution", body: "We help businesses build the capacity to grow, adapt and thrive through change." },
];

export const industries: Item[] = [
  { label: "Real Estate", icon: Building },
  { label: "Hospitality", icon: Hotel },
  { label: "Legal", icon: Scale },
  { label: "Agriculture", icon: Wheat },
  { label: "Technology", icon: Cpu },
  { label: "F&B", icon: UtensilsCrossed },
  { label: "Consulting", icon: Presentation },
  { label: "Interior Design", icon: Sofa },
];

/* ---------------- Masterclass ---------------- */
export const masterclass = {
  badge: "FREE MASTERCLASS — 2026",
  title: "Hire People Who Perform, Grow & Stay.",
  intro: "Hiring the wrong person can cost a growing business time, money, productivity and team morale.",
  body:
    "helps founders, business owners and hiring managers make better hiring decisions by moving beyond CVs, unstructured interviews and gut feeling.",
  learnLine: "You'll learn a practical approach to",
  learnBold: "defining the right hire, assessing candidates, making better hiring decisions and setting new employees up for success.",
  format: "A live 3 hour virtual masterclass for founders, CEOs, HR professionals and hiring managers.",
  forYouTitle: "Is This Masterclass For You?",
  forYouLead: "This session is for you if:",
  forYou: [
    "You've hired someone who looked great on paper but didn't perform.",
    "You rely heavily on interviews or gut feeling when hiring.",
    "New employees take too long to become productive.",
    "You're unsure how to assess whether a candidate is truly right for the role.",
    "You're growing your team and want a more structured hiring process.",
  ],
  forYouIcon: CircleCheck,
  learnTitle: "What You'll Learn",
  learnLead: "By the end of the masterclass, you'll know how to:",
  learn: [
    { label: "Define what success looks like before hiring.", icon: Target },
    { label: "Assess candidates beyond their CV.", icon: FileSearch },
    { label: "Conduct structured interviews that reveal more than rehearsed answers.", icon: MessagesSquare },
    { label: "Evaluate capability, behaviour and workplace fit.", icon: Scale },
    { label: "Make more informed hiring decisions.", icon: Lightbulb },
    { label: "Set new hires up for success with a structured 30-60-90 day plan.", icon: CalendarCheck },
  ],
  toolkitTitle: "Free Performance Hiring Toolkit™",
  toolkitLead: "Your registration includes practical tools to help you apply what you learn:",
  toolkit: [
    { label: "Role Success Blueprint™", icon: Map },
    { label: "Performance Hiring Scorecard", icon: ClipboardCheck },
    { label: "Structured Interview Guide", icon: MessageSquareText },
    { label: "Candidate Evaluation Template", icon: FileSpreadsheet },
    { label: "Reference Check Framework", icon: PhoneCall },
    { label: "30-60-90 Day Onboarding Roadmap", icon: Route },
  ],
  toolkitClose: "Learn it. Use it. Improve the way you hire.",
  whyTitle: "Why Performance Hiring™?",
  whyLead: "Hiring shouldn't end when you find a qualified candidate.",
  whyBodyA: "The right hire is someone who can",
  whyBold: "succeed in the role, contribute to the business and grow with the organisation.",
  whyConnects: "Our approach connects:",
  flow: ["Role Success", "Candidate Evidence", "Structured Assessment", "Better Hiring", "Successful Onboarding"],
  afterTitle: "What Happens After the Masterclass?",
  afterLead: "Sometimes, you don't need training.",
  afterBold: "You need help.",
  afterBody: "If you have an important role to fill or broader people challenges to solve, Staffora can support you.",
  hireTitle: "Need to Hire?",
  hireBody: "Let Staffora manage your recruitment process from candidate sourcing to selection.",
  hrTitle: "Need to Strengthen Your HR?",
  hrBody: "We help growing businesses build clearer HR structures, processes and people systems.",
  closeTitle: "Your next great hire shouldn't be a gamble.",
  closeBody: "Reserve your free seat for the Staffora Performance Hiring Masterclass™.",
};
