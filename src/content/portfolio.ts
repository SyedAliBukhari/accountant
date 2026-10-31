/**
 * All editable portfolio content lives here.
 * Items marked `confirm: true` or containing "[TO CONFIRM]" must be verified
 * with Saima before the site is launched.
 */
export const profile = {
  name: "Saima Nawal Umair",
  monogram: "Nawal",
  descriptor: "ACCA Qualified Professional",
  // Replace with Saima's real details before launch:
  email: "nawal@gmail.com", // e.g. "saima@example.com"
  linkedin: "", // e.g. "https://www.linkedin.com/in/..."
  location: "[Location — to confirm]",
  // Set to a real portrait import/URL to replace the placeholder frame.
  portrait: "" as string,
};

/** Contact form endpoint (e.g. "https://formspree.io/f/xxxx"). Leave empty until configured. */
export const FORM_ENDPOINT = "";

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const about = {
  body: "With a strong foundation in accounting principles and financial analysis, I approach every challenge with precision, integrity, and a commitment to delivering meaningful insights. My focus is on transforming financial information into clarity that supports informed decisions and sustainable growth.",
  statement: "Accuracy is essential. Insight makes the difference.",
  credentials: [
    { label: "Qualification", value: "ACCA Qualified" },
    { label: "Membership status", value: "[To confirm]" },
    { label: "Based in", value: "[To confirm]" },
  ],
};

export const expertise = [
  {
    icon: "FileText",
    title: "Financial Reporting",
    text: "Clear, structured financial information to support transparency and informed decision-making.",
  },
  {
    icon: "PieChart",
    title: "Management Accounting",
    text: "Financial insights, budgeting, and performance analysis to support business planning.",
  },
  {
    icon: "LineChart",
    title: "Financial Analysis",
    text: "Analytical thinking and financial data interpretation to identify trends and support strategic decisions.",
  },
  {
    icon: "ShieldCheck",
    title: "Accounting & Compliance",
    text: "An accuracy-focused approach to accounting processes, financial records, and applicable compliance requirements.",
  },
] as const;

// Proposed offerings — confirm each with Saima before publication.
export const services = [
  { title: "Financial reporting & statement preparation", text: "Organised, accurate statements that present a clear picture of financial position." },
  { title: "Budgeting & forecasting support", text: "Structured budgets and forward-looking forecasts to guide planning." },
  { title: "Financial performance analysis", text: "Reviewing results against plan to surface trends, risks and opportunities." },
  { title: "Management reporting", text: "Concise, decision-ready reports tailored to the people who use them." },
  { title: "Bookkeeping & accounting support", text: "Reliable, well-kept records that form a sound financial foundation." },
  { title: "Accounting process improvement", text: "Refining workflows and controls for greater accuracy and efficiency." },
];

// Timeline — replace placeholders with verified details.
export const journey = [
  { period: "[Year]", title: "ACCA Qualification", place: "Association of Chartered Certified Accountants", text: "Completed the ACCA qualification. [Add verified details]", placeholder: false },
  { period: "[Dates]", title: "[Job title]", place: "[Employer]", text: "[Key responsibilities and achievements — to confirm]", placeholder: true },
  { period: "[Dates]", title: "[Job title]", place: "[Employer]", text: "[Key responsibilities and achievements — to confirm]", placeholder: true },
  { period: "[Dates]", title: "[Degree / education]", place: "[Institution]", text: "[Education details — to confirm]", placeholder: true },
];

export const values = [
  { title: "Integrity", text: "Upholding honesty, confidentiality, and professional ethics." },
  { title: "Precision", text: "Paying attention to the details that matter." },
  { title: "Insight", text: "Turning financial information into meaningful understanding." },
];
