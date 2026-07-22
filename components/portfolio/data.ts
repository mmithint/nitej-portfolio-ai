export const personalInfo = {
  name: "Mohana Nitej Mithinti",
  shortName: "Nitej",
  title: "GenAI / Agentic AI Engineer",
  company: "Bizmetric Partners Inc.",
  location: "Houston, Texas",
  email: "mithintinitej@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohananitej-mithinti/",
  github: "https://github.com/mmithint",
  resume: "/resume.pdf",
  phone: "+1 (602) 784-5356",
  tagline: "I build the production layers most prototypes skip.",
  summary:
    "I architect multi-agent systems and Agentic RAG platforms on Azure OpenAI, LangChain, and LangGraph — embedded directly in customer environments across energy, subsea, manufacturing, and HSE. I lead POCs from whiteboard to client demo to Azure production, owning the full stack: architecture, deployment, and customer handoff.",
  differentiators: [
    "Embedded with enterprise clients (CITGO, USG, energy/HSE) — shipped production AI against their real data, not demo environments",
    "Multi-tenant isolation, JWT auth, and AES-128 encrypted secrets in production",
    "Two-tier query caching, exponential backoff, semaphore-gated concurrency",
    "4-layer prompt architecture (foundation → schema → query templates → runtime rules)",
    "LangSmith-based LLMOps for full observability and performance tuning",
  ],
};

export const stats = [
  { value: 45, suffix: "%", label: "Lift in answer relevance", prefix: "↑" },
  { value: 60, suffix: "%", label: "Reduction in analyst effort", prefix: "↓" },
  { value: 40, suffix: "%", label: "Drop in LLM hallucinations", prefix: "↓" },
  { value: 95, suffix: "%", label: "AWS Lambda compute cut", prefix: "↓" },
];

export const skillCategories = [
  {
    name: "Languages",
    color: "blue" as const,
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "PL/pgSQL", "Java", "C/C++", "R"],
  },
  {
    name: "GenAI & Agents",
    color: "blue" as const,
    skills: [
      "LangChain", "LangGraph", "CrewAI", "LlamaIndex", "MCP",
      "Azure OpenAI", "GPT-4 / GPT-4o", "Azure AI Foundry",
      "OpenAI Function Calling", "Hugging Face Transformers",
      "AWS Bedrock", "Azure Speech Services", "Azure Document Intelligence",
    ],
  },
  {
    name: "RAG & Vector Stores",
    color: "purple" as const,
    skills: [
      "Azure Cosmos DB", "pgvector", "Pinecone", "Chroma",
      "Azure Cognitive Search", "ElasticSearch",
      "Semantic Chunking", "Embedding Pipelines", "Layered Prompt Engineering",
    ],
  },
  {
    name: "Backend & Data",
    color: "indigo" as const,
    skills: [
      "FastAPI", "Python", "async/await", "REST", "JWT Auth",
      "PostgreSQL", "MongoDB", "MSSQL", "Oracle",
      "Microsoft Fabric", "Databricks Mosaic AI", "PL/pgSQL", "SQLAlchemy",
    ],
  },
  {
    name: "Cloud, DevOps & MLOps",
    color: "cyan" as const,
    skills: [
      "Azure Container Apps", "App Service", "Key Vault",
      "AWS Lambda", "SageMaker", "ECR",
      "Docker", "Kubernetes", "LangSmith",
      "GitHub Actions", "Jenkins", "MLflow", "Azure DevOps",
    ],
  },
  {
    name: "Frontend & ML",
    color: "violet" as const,
    skills: [
      "React", "TypeScript", "Tailwind CSS", "Chart.js",
      "Power BI Embedded", "Tableau", "ReportLab",
      "Pandas", "NumPy", "PyTorch", "Apache Spark", "matplotlib",
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer — GenAI / Agentic AI",
    company: "Bizmetric Partners Inc.",
    period: "Feb 2025 – Present",
    location: "Houston, TX",
    current: true,
    bullets: [
      "Architected multi-tenant FastAPI GenAI platform (JWT auth, Azure Container Apps, AES-128 secrets) — RAG + NLQ-to-SQL across isolated client schemas",
      "Built dual-mode conversational AI: LangGraph state machine for Agentic RAG over Azure Cosmos DB (1536-dim, 20K+ chunks) + LangChain SQL Agent — 35–45% answer relevance lift, ~60% analyst effort cut",
      "Designed 4-layer modular prompt architecture with auto-routing — cut hallucinations ~40% via groundedness checks and citation enforcement",
      "Engineered 7-tool multi-agent troubleshooting system in LangGraph for USG manufacturing — integrating on-prem MSSQL + Oracle with metadata-driven actionability ranking",
      "Shipped parallel LLM pipelines (10 concurrent Azure OpenAI calls, semaphore-gated) for HSE analytics — replacing fully manual analyst workflows",
      "Architected CITGO Split Billing Compliance chatbot on Microsoft Fabric Lakehouse with Power BI Embedded and Azure Speech Services",
      "Hardened production with two-tier caching, exponential-backoff retries, rate-limit-aware embedding batching (240K TPM), LangSmith LLMOps — cut latency ~30%",
    ],
    tech: ["LangGraph", "LangChain", "FastAPI", "Azure OpenAI", "Azure Cosmos DB", "PostgreSQL", "Microsoft Fabric", "Docker"],
  },
  {
    role: "AI Full Stack Developer",
    company: "Arizona State University",
    period: "May 2024 – Jan 2025",
    location: "Tempe, AZ",
    current: false,
    bullets: [
      "Built and deployed production RAG pipeline on AWS connecting Google Drive to a chat interface for university research groups",
      "Cut AWS Lambda compute time 95% via semantic chunking and batched LLM embedding requests",
      "Shipped CI/CD pipeline: SageMaker testing → Docker → ECR → AWS Lambda with OpenSearch vector indexing",
    ],
    tech: ["AWS Lambda", "SageMaker", "OpenSearch", "Docker", "ECR", "Google Drive API", "RAG"],
  },
  {
    role: "Software Developer",
    company: "Algonox Technologies Pvt Ltd",
    period: "Aug 2020 – Jun 2022",
    location: "Hyderabad, India",
    current: false,
    bullets: [
      "Designed Python FastAPI microservice on Azure for GroupM (US media investment client) — cut maintenance cost 70%, lifted throughput 25%",
      "Resolved 700+ complex technical cases (90% quality index), authored 30+ KB articles, automated ETL scripts — reduced case lifecycle 50%",
      "Client-facing engineer for L'Oréal and Capgemini; mentored 3 interns",
    ],
    tech: ["FastAPI", "Python", "Azure", "MSSQL", "Oracle", "Docker", "EC2"],
  },
  {
    role: "Software Engineer",
    company: "Dhunis Technologies Pvt Ltd",
    period: "Apr 2018 – Jun 2018",
    location: "India",
    current: false,
    bullets: [
      "Built React + FastAPI + PostgreSQL internal web tool with RESTful APIs serving requests in <2ms",
      "Collaborated on CI/CD pipeline with minimal downtime",
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "CI/CD"],
  },
];

export const projects = [
  {
    title: "Enterprise GenAI Chatbot (iCUE)",
    domain: "Subsea / Risk-Based Assessment",
    description:
      "Multi-tenant FastAPI platform powering AI chatbot for industrial asset management — dual-mode RAG + NLQ-to-SQL over structured and unstructured data.",
    highlights: [
      "LangGraph state machine over Azure CosmosDB (1536-dim, cosine similarity, 20K+ chunks)",
      "LangChain SQL Agent across 6 domain schemas with 4-layer prompt architecture",
      "Two-tier caching (1h NL-SQL, 5min results), 240K TPM embedding batching",
      "Component Auto-Fill: parallel RAG extraction for engineering attribute tables",
    ],
    tech: ["LangGraph", "LangChain", "FastAPI", "Azure OpenAI", "CosmosDB", "PostgreSQL", "Docker"],
    impact: "35–45% answer relevance lift · ~60% analyst effort cut",
    colorClass: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40",
    badgeClass: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dotClass: "bg-blue-500",
  },
  {
    title: "CITGO Split Billing Compliance",
    domain: "Energy / Financial Compliance",
    description:
      "Voice-driven compliance chatbot for CITGO on Microsoft Fabric Lakehouse — NLQ over structured billing data and unstructured document libraries.",
    highlights: [
      "Dual-agent backend: NLQ SQL Agent + RAG Agent for documents/receipts",
      "Microsoft Fabric as single source of truth with OneLake Shortcuts (no sync pipelines)",
      "Azure Speech Services for voice-driven natural language queries",
      "Power BI Embedded + Power Apps write-back directly to Fabric",
    ],
    tech: ["React", "FastAPI", "LangChain", "Microsoft Fabric", "Azure Speech", "Power BI"],
    impact: "Eliminated sync pipelines · enabled voice-driven compliance",
    colorClass: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/40",
    badgeClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dotClass: "bg-emerald-500",
  },
  {
    title: "HSE Analytics Platform",
    domain: "Health, Safety & Environment",
    description:
      "Full-stack AI platform auto-generating executive PDF reports and email summaries from HSE safety observation data — replaced fully manual analyst workflows.",
    highlights: [
      "3 parallel LLM pipelines: executive summary, intervention detection, category analysis",
      "10 concurrent Azure OpenAI calls, batched processing of 200 records at a time",
      "ReportLab A4 PDFs + HTML email with embedded matplotlib charts",
      "Multi-week AI-generated cross-week narratives with delta KPI cards",
    ],
    tech: ["FastAPI", "React", "Azure OpenAI", "MongoDB", "ReportLab", "matplotlib", "Chart.js"],
    impact: "60% analyst effort reduction · fully automated reporting",
    colorClass: "from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-400/40",
    badgeClass: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    dotClass: "bg-orange-500",
  },
  {
    title: "Nail Pull Troubleshooting Agent",
    domain: "Manufacturing QC · USG Corporation",
    description:
      "7-tool LangGraph multi-agent system for USG manufacturing — diagnosing gypsum wallboard Nail Pull compliance issues with statistical RCA and metadata-driven recommendations.",
    highlights: [
      "7 tools: DataConnector, ComplianceTool, ShortTermDriftTool, KnownRCATool, PotentialRCATool, OutlierTool, RAGTool",
      "Statistical compliance targets using 95% CI (SE = StdDev/√(n-1))",
      "Metadata-driven control category flags for operator-actionable recommendations",
      "Dynamic Oracle query construction from lkpModelInputMetadata",
    ],
    tech: ["LangGraph", "Python", "MSSQL", "Oracle", "RAG", "Statistical Analysis"],
    impact: "Automated RCA across on-prem MSSQL + Oracle",
    colorClass: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40",
    badgeClass: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    dotClass: "bg-purple-500",
  },
  {
    title: "HAZOP Automation (P&ID)",
    domain: "Process Safety Engineering",
    description:
      "Hybrid Computer Vision + LLM pipeline for extracting safety-critical data from P&ID drawings to pre-populate HAZOP worksheets.",
    highlights: [
      "Systematic evaluation of LLM spatial reasoning limits on complex P&ID drawings",
      "Hybrid pipeline: CV layer for spatial detection, LLM for semantic interpretation",
      "Documented hard architectural boundary for LLM instrument tracing",
      "Architecture documentation and findings for internal team presentation",
    ],
    tech: ["Computer Vision", "Azure OpenAI", "Python", "LLM Evaluation"],
    impact: "Designed hybrid CV+LLM pipeline · documented LLM limits",
    colorClass: "from-red-500/10 to-red-600/5 border-red-500/20 hover:border-red-400/40",
    badgeClass: "bg-red-500/10 text-red-300 border-red-500/20",
    dotClass: "bg-red-400",
  },
  {
    title: "Production RAG Pipeline (AWS)",
    domain: "University Research · ASU",
    description:
      "Production-grade RAG pipeline on AWS for Arizona State University research groups — connecting Google Drive content to a chat interface.",
    highlights: [
      "95% AWS Lambda compute reduction via semantic chunking + batched embeddings",
      "CI/CD: SageMaker testing → Docker → ECR → AWS Lambda",
      "Google Drive APIs for retrieval, OpenSearch for vector indexing",
    ],
    tech: ["AWS Lambda", "SageMaker", "OpenSearch", "Docker", "ECR", "Google Drive API"],
    impact: "95% Lambda compute reduction · production-grade pipeline",
    colorClass: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/40",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dotClass: "bg-cyan-500",
  },
];

export const certifications = [
  {
    name: "Databricks Certified Generative AI Engineer Associate",
    issuer: "Databricks",
    icon: "Bot",
    credentialUrl: "https://credentials.databricks.com/634dc6b6-bfcf-4d8d-b288-b895a5f5d09d#acc.YU1a4NPg",
  },
  { name: "OCI 2024 Generative AI Certified Professional", issuer: "Oracle", icon: "Cpu" },
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    issuer: "Microsoft",
    icon: "Database",
    credentialUrl: "https://learn.microsoft.com/en-us/users/mohanamithinti-1198/credentials/9a50fa5f0274d58e",
  },
  { name: "AZ-104: Azure Administrator", issuer: "Microsoft", icon: "Cloud" },
  { name: "CBAP — Certified Business Analyst", issuer: "IIBA", icon: "BriefcaseBusiness" },
  { name: "Automation Anywhere Certified", issuer: "Automation Anywhere", icon: "Bot" },
  { name: "Python Intermediate Certificate", issuer: "HackerRank", icon: "Code2" },
  { name: "Sparkling Star Award", issuer: "Bizmetric", icon: "Star" },
];

export const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "Arizona State University",
    location: "Tempe, AZ",
    period: "Aug 2022 – May 2024",
    gpa: "3.97 / 4.0",
  },
  {
    degree: "Bachelor of Technology, CS Engineering",
    school: "KL University",
    location: "Guntur, India",
    period: "Jun 2016 – Jun 2020",
    gpa: "3.25 / 4.0",
  },
];
