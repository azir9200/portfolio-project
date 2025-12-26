
A **modern full-stack portfolio website** built with **Next.js, Express.js, and Prisma**, designed to showcase personal projects, blogs, and professional information.  
It includes a secure admin dashboard for managing content dynamically, with proper authentication and authorization.

---

## 🚀 Live Demo

- **Frontend:** [https://portfolio-project-weld-three.vercel.app](#)
- **Backend API:** [https://azir-portfolio-backend.vercel.app](#)

---

## 📋 Project Overview

This portfolio serves as both a **personal showcase** and a **content management system (CMS)** for the owner.  

It includes both **public** and **private (owner-only)** sections, with strong focus on performance, security, and UX.

### 🎯 Core Features

#### 🔓 Public Features
- **Home / About Me:** Display personal information, bio, and skills using Static Site Generation (SSG).
- **Projects Showcase:** Interactive list of personal projects with live demo links, GitHub links, and project details.
- **Blog Section:** Publicly accessible blog posts with individual post pages, dynamically generated using Incremental Static Regeneration (ISR).

#### 🔐 Private (Owner) Features
- **Authentication:** JWT-based login for secure admin access.
- **Dashboard:** Owner-only dashboard to manage blogs and projects.
- **Blog Management:** CRUD (Create, Read, Update, Delete) operations on blog posts.
- **Project Management:** Manage portfolio projects dynamically from the dashboard.
- **Authorization:** Only the admin user (seeded in the database) can access private routes.

---

## 🧰 Tech Stack

### **Frontend**
- [Next.js](https://nextjs.org/) (React Framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (for responsive styling)
- [React Hot Toast](https://react-hot-toast.com/) (notifications)
- [React Quill](https://www.npmjs.com/package/react-quill) (rich text editor for blog content)

### **Backend**
- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/) (with PostgreSQL or MongoDB)
- [JWT](https://jwt.io/) for authentication
- [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing

### **Database**
- PostgreSQL (Recommended)  
  or  
- MongoDB (Alternative option with Mongoose)

### **Deployment**
- Frontend: **Vercel**
- Backend: **Vercel / Render / Railway**
- Database: **Neon.tech / Supabase / MongoDB Atlas**

---

## ⚙️ Installation & Setup

### 🔸 Prerequisites
- Node.js ≥ 18.x
- npm or pnpm
- PostgreSQL / MongoDB instance
- `.env` file with environment variables

---

### 🧩 Environment Variables

Create a `.env` file in both the frontend and backend root directories.

#### **Backend `.env`**
```env
DATABASE_URL="your_database_connection_string"
JWT_SECRET="your_secure_jwt_secret"
PORT=5000
