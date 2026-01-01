# 💰 FinEase – Personal Finance Management App

## 🌟 Project Overview

**FinEase** is a personal finance management web application that helps users easily manage their **income**, **expenses**, and **financial goals** in one place.  
It provides a secure login system, insightful charts, and a smooth user experience for better financial decision-making.

---
## 🚀 Live Demo

[Live Demo](https://finease-397b3.web.app/)

---

## 🚀 Features

- 🔐 **Secure Authentication:** Users can log in with Email/Password or Google using Firebase Authentication.  
- 💸 **Transaction Management:** Add, edit, or delete income and expense records instantly.  
- 📊 **Visual Analytics:** Get real-time financial insights with interactive charts and reports.  
- 🧭 **Private Routes:** Logged-in users can access protected pages without being redirected after page reload.  
- ☁️ **Data Persistence:** All transactions are saved securely in the backend (MongoDB via Express.js API).  
- 🌐 **Hosting Setup:** Client hosted on **Firebase**, Server hosted on **Vercel**.  
- 🧾 **Error-Free Reloading:** SPA routing configured to prevent 404 errors on reload from any route.  

---

## 🧩 Technologies Used

- **Frontend:** React.js, React Router, Tailwind CSS, Recharts  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** Firebase Authentication  
- **Hosting:** Netlify (Client), Vercel (Server)  
- **UI Enhancements:** SweetAlert2 / React Toastify for user notifications  

---

## Installation & Setup
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---
## 📂 Project Structure
```plaintext
│
├── 📁 public/               # Publicly accessible static files (images, fonts, icons) 
│
├── 📁 src/                  # Main application source code 
│   │
│   ├── 📁 assets/           # Local images, icons, SVGs, and media 
│   ├── 📁 auth/             # Authentication logic and hooks 
│   ├── 📁 components/       # Reusable React components 
│   ├── 📁 context/          # React Context providers for state management
│   ├── 📁 layouts/          # Layouts and structural templates for pages 
│   ├── 📁 pages/            # Next.js page routes / main views 
│   ├── 📁 routes/           # Application routing configuration 
│   ├── 📁 utils/            # Utility functions and helpers 
│   │
│   ├── App.jsx              # Main React application component 
│   └── main.jsx             # Entry point of the React application
│
└── 📦 package.json          # Project dependencies and scripts

```

---

## 🌈 Screenshots

### Home Screen
![Home Screen](https://i.ibb.co.com/wNQV4YjP/Home-page.png)





---

## 🛠️ Deployment

1. **Environment Setup**: Ensure all `.env` variables are properly configured.
2. **Production Build**:
   ```bash
   npm run build
   npm start
   ```
3. **Hosting**: Deploy on platforms like Vercel, Netlify, or AWS.

---



