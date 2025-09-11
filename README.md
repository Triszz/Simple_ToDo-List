# 📝 Todo List Full-Stack Application

A very simple **Todo List application** built with **React.js** frontend and **Node.js + Express.js** backend, designed to demonstrate API development, database integration, and full-stack deployment.

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
├── backend/                     # Node.js backend API
│   ├── controllers/             # Route controllers
│   │   └── task.controller.js      
│   ├── models/                 # Mongoose models
│   │   └── task.model.js
│   ├── routes/                 # API routes
│   │   └── task.route.js
│   ├── index.js                # Server entry point
│   └── package.json
├── frontend/                   # React frontend application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── services/
│   │   │   └── api.js        # Axios configuration
│   │   ├── App.css          
│   │   ├── App.jsx           # Main App component
│   │   ├── index.css         
│   │   └── main.jsx          # Entry point
│   ├── public/   
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
git clone https://github.com/Triszz/Simple_ToDo-List.git
cd Todo-list
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with your MongoDB credentials
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


## 🧪 Features

- **Create Tasks** - Add new todo items
- **Read Tasks** - View all tasks
- **Update Tasks** - Mark as complete/incomplete
- **Delete Tasks** - Remove tasks
- **Persistent Storage** - MongoDB database
- **Responsive Design** - Mobile-friendly UI
- **Real-time Updates** - Instant UI feedback

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
