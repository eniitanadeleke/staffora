/** All copy comes from the client's "Staffora Website Content" document. */

export const problems = [
  {
    quote: "I can't step away without everything slowing down.",
    body: "Every decision comes back to you. You approve payments, solve employee issues, review work, manage key relationships and keep operations moving.",
    point: "Your business is growing, but it still depends heavily on you.",
  },
  {
    quote: "Finding competent employees feels like a gamble.",
    body: "You hire someone who looks great on paper, only to discover they struggle with ownership, problem-solving or the realities of the role.",
    point: "The problem isn't always a lack of talent. Sometimes, the business isn't equipped to identify the right talent.",
  },
  {
    quote: "We have good people, but performance is inconsistent.",
    body: "Your team is busy, but being busy isn't the same as performing. Expectations aren't always clear. Accountability varies. Managers handle similar situations differently.",
    point: "You need a system that makes good performance easier to repeat.",
  },
  {
    quote: "Our best people don't stay.",
    body: "Good employees leave when they don't see growth, expectations are unclear, managers aren't equipped to support them, or the workplace becomes frustrating.",
    point: "Retention isn't just about salary. It's about the experience of working in your organisation.",
  },
];

export type Service = {
  id: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  detail: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "hr-consulting",
    name: "HR Consulting & Organisational Structure",
    shortName: "HR Consulting",
    headline: "Build the structure your business needs to perform and grow.",
    summary:
      "We help growing businesses in Nigeria put the right structures, processes and people systems in place so work doesn't depend on guesswork or individual people.",
    detail:
      "As your business grows, informal ways of working become harder to manage. We help you create clearer structures, processes and people systems that improve accountability and make the business easier to manage.",
    items: [
      "HR Structure & Strategy",
      "HR Policies & Processes",
      "SOP Development & Process Improvement",
      "Performance Management Systems",
      "Workforce Planning",
      "HR Audits & Advisory",
    ],
  },
  {
    id: "recruitment",
    name: "Recruitment & Performance Hiring™",
    shortName: "Recruitment",
    headline: "Hire people who can perform, not just people who look good on paper.",
    summary:
      "We help businesses define what success looks like in a role, identify the right candidates and use structured assessments to make better hiring decisions.",
    detail:
      "We help growing businesses identify what success looks like in a role, find qualified candidates and make better hiring decisions through a structured, evidence-based process.",
    items: [
      "End-to-End Recruitment",
      "Leadership & Key-Role Recruitment",
      "Performance Hiring™",
      "Competency-Based Hiring",
      "Talent Pipeline Development",
      "Recruitment Process Design",
    ],
  },
  {
    id: "succession-planning",
    name: "Succession Planning & Family Business Continuity",
    shortName: "Succession & Continuity",
    headline: "Build a business that can continue beyond its key people.",
    summary:
      "We help business owners in Nigeria identify critical roles, reduce dependency on individuals, prepare for leadership transitions and create practical plans for business continuity.",
    detail:
      "We help founders and family-owned businesses prepare for the future by reducing dependency on critical individuals, identifying future successors and creating practical plans for continuity.",
    items: [
      "Succession Readiness Assessment",
      "Key-Person Risk Assessment",
      "Succession Planning",
      "Knowledge & Responsibility Transfer",
      "Family Business Structure",
      "Next Generation Development",
    ],
  },
];

export const reasons = [
  {
    title: "We look beyond the immediate problem",
    body: "A hiring problem may actually be a structure problem. A performance problem may actually be a management or accountability problem. A retention problem may start with how people are hired and onboarded. We look at what's causing the problem, not just what's happening on the surface.",
  },
  {
    title: "We start with the business",
    body: "We don't recommend HR activities simply because they're considered \"best practice\". We first understand how your business operates, where people-related challenges are affecting performance, and what needs to change. Our solutions are built around your business, not a generic HR template.",
  },
  {
    title: "We build practical systems",
    body: "Your policies shouldn't sit in a folder. Your processes shouldn't depend on one person remembering what to do. We build practical structures, processes and people systems that your team can actually use and maintain.",
  },
  {
    title: "We build for what comes next",
    body: "Who can take on more responsibility? What happens when a key employee leaves? Can the business operate without the founder? We help businesses build with the future in mind, not just solve today's problem.",
  },
];

export const approach = [
  { step: "Diagnose", body: "Understand the business, people and underlying challenge." },
  { step: "Design", body: "Develop the structure, strategy or solution the business needs." },
  { step: "Build", body: "Put practical systems, people and processes in place." },
];

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  person: string;
  tags: string[];
  challenge: string;
  action: string;
  result: string;
  quote: string;
  shortQuote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cinnamona-bakery",
    title: "Creating clarity in people management",
    client: "Cinnamona Bakery",
    person: "Ms. Eeman, Cinnamona Bakery",
    tags: ["HR Structure", "Recruitment", "Performance", "Employee Engagement"],
    challenge:
      "Recurring employee turnover, workplace dissatisfaction, avoidable errors and inconsistent performance. There was also no structured system for tracking performance and accountability.",
    action:
      "We restructured the team, recruited more competent staff, introduced performance and reporting systems, and implemented strategies to strengthen workplace communication and employee engagement.",
    result:
      "Clearer roles and accountability, better visibility into performance, improved workplace communication and a more structured employee experience.",
    quote:
      "Working with Staffora has made documentation and administration much easier. It has given us clarity on management improvements and made the workplace more enjoyable.",
    shortQuote:
      "Working with Staffora has made documentation and administration much easier. It has given us clarity on management improvements and made the workplace more enjoyable.",
  },
  {
    id: "modexpress",
    title: "Hiring the right leader for the business",
    client: "Modexpress",
    person: "Ms. Rosemary, CEO, Modexpress",
    tags: ["Recruitment", "Salary Advisory", "Employment Structuring"],
    challenge:
      "The business needed to fill a key operational role with the right candidate while ensuring the role, compensation and employment terms were properly structured.",
    action:
      "We provided salary advisory, managed the recruitment process and developed a comprehensive employment contract covering important employment considerations.",
    result:
      "The role was successfully filled with a high-quality hire, giving the client greater confidence in both the hiring decision and the employment process.",
    quote:
      "Staffora Global really impressed me with the recruitment of my Dispatch and Operations Supervisor. From the initial consulting process and salary advice to the speed at which they closed the role, every step was handled professionally and efficiently. They also prepared an employment contract that covered important areas I hadn't initially considered necessary, which gave me greater confidence and clarity as an employer. Most importantly, the quality of the hire has been exceptional. The employee is truly an answer to prayers, and I'm genuinely pleased with the outcome. Staffora Global delivered beyond my expectations.",
    shortQuote:
      "Most importantly, the quality of the hire has been exceptional. The employee is truly an answer to prayers, and I'm genuinely pleased with the outcome.",
  },
];

export const beliefs = [
  {
    title: "People perform better when the organisation is clear.",
    body: "Clear roles, expectations and processes create better conditions for people to succeed.",
  },
  {
    title: "Hiring is a business decision, not just an HR activity.",
    body: "The right hire should solve a business need, not simply fill a vacancy.",
  },
  {
    title: "Systems should work in the real world.",
    body: "We build practical solutions that businesses can actually implement and maintain.",
  },
  {
    title: "Businesses should prepare for what comes next.",
    body: "Growth, key-person exits and leadership transitions shouldn't catch a business unprepared.",
  },
];

export const values = [
  { letter: "S", name: "Simplicity", body: "We turn complex people and organisational challenges into practical solutions." },
  { letter: "C", name: "Courage", body: "We ask the difficult questions and challenge structures that hold businesses back." },
  { letter: "O", name: "Ownership", body: "We take responsibility, act with initiative, and follow through." },
  { letter: "P", name: "Partnership", body: "We work alongside business owners as trusted advisors, not just service providers." },
  { letter: "E", name: "Evolution", body: "We help businesses build the capacity to grow, adapt and thrive through change." },
];

export const industries = [
  "Real Estate",
  "Hospitality",
  "Legal",
  "Agriculture",
  "Technology",
  "Food & Beverage",
  "Consulting",
  "Interior Design",
];

export const masterclass = {
  forYou: [
    "You've hired someone who looked great on paper but didn't perform.",
    "You rely heavily on interviews or gut feeling when hiring.",
    "New employees take too long to become productive.",
    "You're unsure how to assess whether a candidate is truly right for the role.",
    "You're growing your team and want a more structured hiring process.",
  ],
  learn: [
    "Define what success looks like before hiring.",
    "Assess candidates beyond their CV.",
    "Conduct structured interviews that reveal more than rehearsed answers.",
    "Evaluate capability, behaviour and workplace fit.",
    "Make more informed hiring decisions.",
    "Set new hires up for success with a structured 30-60-90 day plan.",
  ],
  toolkit: [
    "Role Success Blueprint™",
    "Performance Hiring Scorecard",
    "Structured Interview Guide",
    "Candidate Evaluation Template",
    "Reference Check Framework",
    "30-60-90 Day Onboarding Roadmap",
  ],
  flow: ["Role Success", "Candidate Evidence", "Structured Assessment", "Better Hiring", "Successful Onboarding"],
};
