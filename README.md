# 📝 Todo List Full-Stack Application

A modern **Todo List application** built with **React.js** frontend and **Node.js + Express.js** backend, designed to demonstrate API development, database integration, and full-stack deployment.

## 🚀 Live Demo: [https://tris-simple-todo-list.netlify.app](https://tris-simple-todo-list.netlify.app)

## 🎯 Learning Objectives

This project demonstrates:
- **RESTful API Development** with Node.js and Express.js
- **MongoDB Integration** with Mongoose ODM
- **React Frontend** with modern hooks and state management
- **CORS Configuration** for cross-origin requests
- **Environment Variables** management
- **Full-Stack Deployment** (Netlify + Railway + MongoDB Atlas)

## 🛠️ Tech Stack

### Frontend
- **React.js 19** - UI library
- **Axios** - HTTP client for API calls
- **Vite** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Deployment
- **Frontend:** Netlify
- **Backend:** Railway
- **Database:** MongoDB Atlas

## 📁 Project Structure

```
Todo-list/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── config/
│   │   │   └── api.js       # Axios configuration
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── public/
│   │   └── _redirects       # Netlify routing
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── controllers/         # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json
└── README.md
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "MONGODB_URI=your-mongodb-connection-string" > .env
echo "NODE_ENV=development" >> .env
echo "PORT=3000" >> .env

# Start backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Start development server
npm run dev
```

### 4. Open Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/:id` | Get single task |
| `POST` | `/api/tasks` | Create new task |
| `PUT` | `/api/tasks/:id` | Update task |
| `DELETE` | `/api/tasks/:id` | Delete task |

### Example API Usage

**Get all tasks:**
```bash
curl https://backend-production-cdad.up.railway.app/api/tasks
```

**Create new task:**
```bash
curl -X POST https://backend-production-cdad.up.railway.app/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"content":"Learn React","completed":false}'
```

## 🌍 Deployment

### Frontend (Netlify)
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add `_redirects` file for React Router support

### Backend (Railway)
1. Connect GitHub repository to Railway
2. Set root directory: `backend`
3. Add environment variables:
   - `MONGODB_URI`
   - `NODE_ENV=production`
   - `PORT=3000`

### Environment Variables

**Backend (.env):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
NODE_ENV=development
PORT=3000
```

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:3000/api
```

## 🔄 Development Workflow

### Local Development
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

### Building for Production
```bash
# Frontend build
cd frontend && npm run build

# Backend is ready for production deployment
```

## 🧪 Features

- **Create Tasks** - Add new todo items
- **Read Tasks** - View all tasks
- **Update Tasks** - Mark as complete/incomplete
- **Delete Tasks** - Remove tasks
- **Persistent Storage** - MongoDB database
- **Responsive Design** - Mobile-friendly UI
- **Real-time Updates** - Instant UI feedback

## 🐛 Troubleshooting

### Common Issues

**CORS Error:**
```javascript
// Ensure backend CORS is configured
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend-url.netlify.app']
}));
```

**MongoDB Connection Failed:**
```bash
# Check environment variable
echo $MONGODB_URI

# Ensure MongoDB Atlas IP whitelist includes 0.0.0.0/0
```

**Build Errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 What I Learned

Through building this project, I gained hands-on experience with:

- **RESTful API Design** - CRUD operations and HTTP methods
- **Database Modeling** - MongoDB schema design with Mongoose
- **Frontend-Backend Communication** - API integration with Axios
- **Error Handling** - Both client and server-side error management
- **Deployment Strategies** - Full-stack application deployment
- **Environment Management** - Configuration for different environments
- **CORS** - Understanding cross-origin requests and security

## 🤝 Contributing

This is a learning project, but suggestions are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [Triszz](https://github.com/Triszz)
- LinkedIn: [Trí Trần Thanh](https://linkedin.com/in/trí-trần-thanh-199526363)

***

⭐ **If this project helped you learn full-stack development, please give it a star!**
