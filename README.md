# 🧾 Job Tracker App

A full-stack Job Application Tracker built using **React.js**, **Node.js**, and **MongoDB**. This app allows users to register, log in, and manage job applications by adding, editing, and deleting job entries securely.

---

## 🌐 Live Demo

🔗 [View the Live App](https://job-tracker-iota-seven.vercel.app)

---

## 📁 Project Structure

job-tracker/
├── job-tracker-frontend/ # React.js frontend
├── job-tracker-backend/ # Node.js + Express backend

---

## 🚀 Features

- 🔐 User Registration & Login
- ✨ Add/Edit/Delete Job Applications
- 📋 View all jobs in a dashboard
- 🧭 Route Protection (JWT auth)
- 🔄 Persistent login via tokens
- ✅ Clean UI with responsive design
- 🔔 Toast Notifications

---

## 🧰 Tech Stack

### Frontend:
- React.js
- React Router DOM
- Axios
- Tailwind CSS (or CSS Modules)
- React Toastify

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- dotenv
- CORS

---

## 🧪 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Varma2327/JobTracker.git
cd JobTracker



2️⃣ Backend Setup
cd job-tracker-backend
npm install
npm run dev

Create a .env file inside job-tracker-backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


3️⃣ Frontend Setup
cd ../job-tracker-frontend
npm install
npm start


Create a .env file inside job-tracker-frontend:
REACT_APP_API_URL=http://localhost:5000/api
📸 Screenshots (Optional)
You can add screenshots like login page, dashboard, add job form, etc.

🧑‍💻 Author
Akhil Varma Sakhineti
📧 sa.varma23@gmail.com
🌐 GitHub
