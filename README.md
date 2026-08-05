# 🚀 DevTrail

**Track Every Commit. Share Every Milestone.**

DevTrail is a full-stack developer platform where developers can organize projects, track milestones, maintain daily development logs, and showcase their complete building journey to the world.

---

## ✨ Features

### 🔐 Authentication & Accounts
- User signup & login with JWT authentication
- Secure password hashing (bcryptjs)
- Persistent login with token stored in localStorage
- Change password functionality

### 📁 Project Management
- Create, edit, and delete projects
- Add tech stack, description, and status
- Track project progress with visual progress bars
- Like and view projects
- Public project pages for showcasing

### 📝 Daily Development Logs
- Create structured build logs (title, description, status)
- Search and filter logs by status
- Track mood, time spent, challenges, and learnings
- Edit and delete logs
- Empty state UI for new projects

### 📊 Dashboard
- Real-time statistics: total projects, logs, streak, completed
- Overall progress tracking
- Quick actions to create projects
- Animated stat cards with Framer Motion

### 👤 Developer Profiles
- Public profile pages (`/u/[username]`)
- Profile image upload (Cloudinary)
- Bio, skills, and social links (GitHub, LinkedIn, Instagram, Website)
- Follow/unfollow other developers
- Profile completion tracking

### ⚙️ Settings
- **Account**: Update name, bio, skills, social links
- **Security**: Change password
- **Appearance**: Dark / Light / System theme switcher
- **Notifications**: Email, weekly report, build reminder preferences
- **Privacy**: Toggle public profile, projects, and timeline
- **Delete Account**: Permanently delete account and all data

### 🎨 UI / UX
- Dark theme by default with smooth animations
- Framer Motion animations throughout
- Lucide icons
- Responsive design with mobile bottom navigation
- Beautiful loading screen and error/404 pages

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **React Hook Form** + **Zod** (forms & validation)
- **React Hot Toast** (notifications)
- **Lucide React** (icons)
- **Axios** (API calls)

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose** (database)
- **JSON Web Token** (authentication)
- **bcryptjs** (password hashing)
- **Cloudinary** (image uploads)
- **Multer** (file uploads)

---

## 📁 Project Structure

```
DevTrail/
├── backend/               # Node.js + Express API
│   ├── config/           # DB & Cloudinary config
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Auth & upload middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   └── server.js         # Express app entry
│
└── frontend/             # Next.js application
    └── src/
        ├── app/          # Pages (App Router)
        ├── components/   # Reusable components
        ├── context/      # Auth context
        ├── hooks/        # Custom hooks
        └── services/     # API service layer
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the Repository
```bash
git clone https://github.com/CodeWithDeb202/DevTrail.git
cd DevTrail
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/devtrail
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

Run the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5002/api
```

Run the frontend:
```bash
npm run dev
```

Open **http://localhost:3000** in your browser. 🎉

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/signup` | Create account | No |
| POST | `/api/auth/login` | Login | No |
| PUT | `/api/auth/password` | Change password | Yes |
| DELETE | `/api/auth/account` | Delete account | Yes |

### Users
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/users/profile` | Get current user | Yes |

### Projects
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/projects` | Create project | Yes |
| GET | `/api/projects` | Get my projects | Yes |
| GET | `/api/projects/:id` | Get project | Yes |
| PUT | `/api/projects/:id` | Update project | Yes |
| DELETE | `/api/projects/:id` | Delete project | Yes |
| POST | `/api/projects/:id/like` | Toggle like | Yes |

### Logs
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/logs` | Create log | Yes |
| GET | `/api/logs/project/:projectId` | Get project logs | Yes |
| GET | `/api/logs/stats` | Get log stats | Yes |
| GET | `/api/logs/search` | Search logs | Yes |
| GET | `/api/logs/:id` | Get single log | Yes |
| PUT | `/api/logs/:id` | Update log | Yes |
| DELETE | `/api/logs/:id` | Delete log | Yes |

### Profile
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/profile/me` | Get my profile | Yes |
| PUT | `/api/profile/update` | Update profile | Yes |
| GET | `/api/profile/:username` | Get public profile | No |
| POST | `/api/profile/follow/:id` | Follow user | Yes |
| POST | `/api/profile/unfollow/:id` | Unfollow user | Yes |

### Dashboard
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/dashboard/stats` | Get dashboard stats | Yes |

---

## 🚢 Deployment

### Frontend (Vercel)
1. Push the code to GitHub
2. Import the `frontend/` folder into Vercel
3. Set the environment variable: `NEXT_PUBLIC_API_URL` pointing to your deployed backend
4. Deploy

### Backend (Render / Railway / Heroku)
1. Create a new web service
2. Point it to the `backend/` folder
3. Set environment variables: `MONGO_URI`, `JWT_SECRET`, `CLOUDINARY_*`
4. Set `NODE_ENV=production` and `FRONTEND_URL` to your frontend URL
5. Deploy

---

## 🧪 Running in Production

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
npm start
```

---

## 🗺️ Roadmap

- [x] Authentication system
- [x] Project management
- [x] Daily dev logs
- [x] Public profiles
- [x] Dashboard analytics
- [ ] Real-time notifications
- [ ] In-app messaging
- [ ] Team collaboration
- [ ] Mobile app

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🙌 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Made with ❤️ by [CodeWithDeb202](https://github.com/CodeWithDeb202)
