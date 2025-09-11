import axios from "axios";

// Base URL of backend
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://backend-production-cdad.up.railway.app/api"
    : "http://localhost:3000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Task API functions
export const taskAPI = {
  // GET all tasks
  getAllTasks: () => api.get("/tasks"),

  // GET single task by ID
  getTask: (id) => api.get(`/tasks/${id}`),

  // POST new task
  createTask: (taskData) => api.post("/tasks", taskData),

  // PUT update task
  updateTask: (id, taskData) => api.put(`/tasks/${id}`, taskData),

  // DELETE task
  deleteTask: (id) => api.delete(`/tasks/${id}`),
};

export default api;
