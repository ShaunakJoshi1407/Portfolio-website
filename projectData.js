const projects = [
  {
    slug: "ai-inference-orchestrator",
    title: "AI Inference Orchestrator",
    description:
      "Kubernetes-native control plane for AI model inference workloads. Extends the K8s API with a custom AIDeployment resource — managing deployments, autoscaling, drift detection, and observability. Exposes a CLI, HTTP tool server, and natural language interface.",
    stack: ["Go", "Kubernetes", "controller-runtime", "Prometheus", "CRD"],
    image: "/assets/work/ai-orchestrator.svg",
    github: "https://github.com/ShaunakJoshi1407/ai-inference-orchestrator",
    page: "/projects/ai-inference-orchestrator",
    category: "DevOps",
  },
  {
    slug: "medget",
    title: "MedGet",
    description:
      "A comprehensive drug research platform with real-time FDA and financial data analysis, powered by AI.",
    stack: ["Python", "React.js", "Next.js", "LangChain", "PostgreSQL"],
    image: "/assets/work/MedGet.png",
    github: "https://github.com/Aggies-Create-NeuroX1/MedGet",
    page: "/projects/medget",
    category: "ML",
  },
  {
    slug: "gradvisor",
    title: "Gradvisor",
    description:
      "A recommendation system that ranks 500+ universities based on user profile and preferences using a weighted scoring algorithm.",
    stack: ["React.js", "Python", "Django", "SQLite"],
    image: "/assets/work/Gradvisor.png",
    github: "https://mohitsarin-tamu.github.io/Gradvisor/",
    page: "/projects/gradvisor",
    category: "ML",
  },
  {
    slug: "resqvision",
    title: "ResQVision",
    description:
      "Emergency response analytics dashboard visualizing response times, incident severity, and infrastructure effectiveness across Sydney regions using real-world IERAD data.",
    stack: ["React.js", "D3.js", "Vite", "Tailwind", "JSON", "GitHub Pages"],
    image: "/assets/work/ResQVision.png",
    github: "https://github.com/ShaunakJoshi1407/ResQVision",
    page: "/projects/resqvision",
    category: "Full-Stack",
  },
  {
    slug: "epiccaptions",
    title: "EpicCaptions",
    description:
      "Generates cinematic subtitles for videos using FFmpeg and LLM-enhanced processing. Real-time caption rendering and editing.",
    stack: ["React.js", "Next.js", "TypeScript", "Node.js", "FFmpeg"],
    image: "/assets/work/subtitle_3.png",
    github: "https://github.com/ShaunakJoshi1407/epicCaptions",
    page: "/projects/epiccaptions",
    category: "Full-Stack",
  },
  {
    slug: "salon-management",
    title: "Salon Management System",
    description:
      "Web app for managing salon services and appointments with MySQL backend.",
    stack: ["Java", "JSP", "MySQL", "HTML", "JS"],
    image: "/assets/work/salon_3.webp",
    github: "https://github.com/ShaunakJoshi1407/Salon-Management-System",
    page: null,
    category: "Full-Stack",
  },
  {
    slug: "startup-funding",
    title: "Startup Funding Analysis",
    description:
      "Data analysis project exploring trends and insights from startup funding data using ML models.",
    stack: ["Python", "Pandas", "Matplotlib", "ML"],
    image: "/assets/work/startup_2.webp",
    github: "https://github.com/ShaunakJoshi1407/Startup-Funding-Analysis",
    page: null,
    category: "Data Analysis",
  },
  {
    slug: "yelp-sentiment",
    title: "Yelp Review Sentiment Analysis",
    description:
      "Predicting sentiment of Yelp reviews using NLP and supervised ML models.",
    stack: ["Python", "Scikit-learn", "NLP"],
    image: "/assets/work/yelp.webp",
    github: "https://github.com/ShaunakJoshi1407/Yelp_Sentiment_Analysis",
    page: null,
    category: "ML",
  },
  {
    slug: "blindness-detection",
    title: "Blindness Detection",
    description:
      "Computer vision model to detect diabetic retinopathy in retinal scan images using PyTorch.",
    stack: ["Python", "OpenCV", "PyTorch"],
    image: "/assets/work/blindness.webp",
    github: "https://github.com/ShaunakJoshi1407/Blindness-Detection",
    page: null,
    category: "ML",
  },
];

export default projects;
