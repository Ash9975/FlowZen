# 🚀 FlowZen

> **AI-Powered Order Processing & Packing Workflow Platform**

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-5-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-2088FF?logo=githubactions)
![License](https://img.shields.io/badge/License-MIT-blue)

FlowZen is an AI-powered order processing platform that transforms handwritten order lists, WhatsApp screenshots, and printed invoices into structured digital packing checklists.

Designed for wholesalers, vegetable suppliers, distributors, warehouses, and packing teams, FlowZen reduces manual work by automating order extraction, tracking packing progress, and managing fulfillment workflows.

---

# 🌍 Live Demo

### 🚀 Application

https://flow-zen-omega.vercel.app

### 💻 Source Code

https://github.com/Ash9975/FlowZen

---

# 📸 Screenshots

> Dashboard

<p align="center">
<img src="YOUR_SCREENSHOT_1" width="900"/>
</p>

> Order Details

<p align="center">
<img src="YOUR_SCREENSHOT_2" width="900"/>
</p>

> Packing Checklist

<p align="center">
<img src="YOUR_SCREENSHOT_3" width="900"/>
</p>

---

# ✨ Features

## 🤖 AI Order Extraction

- Extracts products from handwritten notes
- Supports WhatsApp screenshots
- Reads printed order sheets
- Automatic quantity detection
- Automatic unit detection
- Generates structured packing checklists

---

## 📦 Order Management

- Create Orders
- Delete Orders
- Packing Progress
- Complete Workflow
- Activity Timeline
- Customer Management

---

## ✅ Packing Workflow

- Interactive checklist
- Progress tracking
- Read-only completed orders
- Order completion workflow
- Visual completion summary

---

## 📊 Dashboard

- Total Orders
- Pending Orders
- In Progress Orders
- Completed Orders
- Recent Orders
- Activity Feed

---

## 🔐 Authentication

- JWT Authentication
- Protected Routes
- Secure Cookies
- User Isolation
- Password Hashing

---

## ☁️ Cloud Services

- MongoDB Atlas
- Redis Cloud
- Cloudinary
- Google Gemini AI

---

# 🏗 System Architecture

```
                    User

                      │

                      ▼

             Upload Order Image

                      │

                      ▼

                Cloudinary

                      │

                      ▼

             Google Gemini AI

                      │

                      ▼

          Structured Order JSON

                      │

                      ▼

          Packing Checklist Builder

                      │

                      ▼

          Packing Workflow Dashboard

```

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Cache | Redis Cloud |
| AI | Google Gemini API |
| Storage | Cloudinary |
| Authentication | JWT |
| State Management | TanStack Query |
| Deployment | Vercel, Render |
| DevOps | Docker, Docker Compose, GitHub Actions |

---

# 📂 Project Structure

```
FlowZen

├── frontend

├── backend

├── docker-compose.yml

├── .github
│
└── workflows
      └── ci.yml
```

---

# 🚀 Local Development

Clone the repository

```bash
git clone https://github.com/Ash9975/FlowZen.git
```

Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

Run backend

```bash
npm run dev
```

Run frontend

```bash
npm run dev
```

---

# 🐳 Docker

Build and run the project

```bash
docker compose up --build
```

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# ⚙ Environment Variables

Backend

```env
MONGODB_URI=

JWT_SECRET=

GOOGLE_API_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

REDIS_HOST=

REDIS_PORT=

REDIS_USERNAME=

REDIS_PASSWORD=
```

Frontend

```env
VITE_API_URL=
```

---

# 🔄 CI/CD

FlowZen uses **GitHub Actions** for Continuous Integration.

Every push automatically:

- Installs dependencies
- Builds frontend
- Verifies project integrity
- Validates Docker-ready codebase

Future pipeline:

- Docker Image Build
- Docker Hub Push
- Automatic Deployment

---

# 📈 Business Impact

✔ Reduces manual data entry

✔ Reduces packing mistakes

✔ Faster order processing

✔ Better warehouse visibility

✔ Digital packing workflow

✔ AI-assisted operations

---

# 🔮 Roadmap

- [x] AI Order Extraction
- [x] Packing Workflow
- [x] Dashboard
- [x] Authentication
- [x] Docker
- [x] Docker Compose
- [x] PWA
- [x] GitHub Actions CI

### Upcoming

- [ ] Docker Image Pipeline
- [ ] Automatic Deployment
- [ ] WhatsApp Integration
- [ ] Barcode Scanner
- [ ] Inventory Module
- [ ] Reports & Analytics

---

# 👨‍💻 Developer

## Ashish Pimpalshende

Full Stack MERN Developer

GitHub

https://github.com/Ash9975

Portfolio

https://portfolio-ashishs-projects-428732e9.vercel.app

LinkedIn

www.linkedin.com/in/ashish-pimpalshende

---

# ⭐ Support

If you found FlowZen useful,

⭐ Star the repository

🍴 Fork the project

🛠 Contribute improvements

---

## 📄 License

This project is licensed under the MIT License.
