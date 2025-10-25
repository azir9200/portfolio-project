import {
  BarChart3,
  BookOpen,
  Calculator,
  FileCheck,
  PieChart,
  TrendingUp,
} from "lucide-react";
export const services = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "⚙️ Custom Web Applications",
    description:
      "Bespoke full-stack applications designed to fit your business logic, streamline operations, and scale as your business grows.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "🧹 Code Refactoring & Optimization",
    description:
      "Fixing messy or outdated codebases, improving performance, security, and maintainability — getting your project back on track with modern best practices.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "📦 API Development & Integration",
    description:
      "Robust REST APIs built with Express and Node.js — including secure authentication, third-party integrations, and real-time data handling.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "🛒 E-commerce Development",
    description:
      "Complete e-commerce solutions with cart systems, payment integration (Stripe, PayPal), product management, and responsive design.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "🌐 React Frontend Development",
    description:
      "Beautiful, interactive UIs built with React.js and styled with Tailwind CSS or ShadCN UI. Optimized for speed, accessibility, and responsiveness.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "☁️ Cloud & Database Integration",
    description:
      "Secure MongoDB Atlas and cloud-based deployments. Includes schema design, database modeling, and CRUD operations with Mongoose.",
    color: "from-teal-500 to-cyan-500",
  },
];
