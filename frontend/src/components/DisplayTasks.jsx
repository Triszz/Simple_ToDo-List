import { useEffect, useState } from "react";
import { taskAPI } from "../services/api";
function DisplayTasks({ refreshTrigger }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  // Fetch data
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await taskAPI.getAllTasks();
        setTasks(response.data);
        setIsError(null);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setIsError("Failed to load tasks");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, [refreshTrigger]);

  // Toggle completed status
  const handleToggleComplete = async (taskId, currentStatus) => {
    try {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, completed: !currentStatus } : task
        )
      );

      // Call API to update task
      await taskAPI.updateTask(taskId, {
        completed: !currentStatus,
      });
    } catch (error) {
      console.error("Error updating task:", error);
      // Revert when fail to call API
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, completed: currentStatus } : task
        )
      );
      alert("Failed to update task status");
    }
  };

  // Delete task in current array
  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }
    // Backup variable
    const originalTasks = tasks;
    try {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

      // Call API to delete task
      await taskAPI.deleteTask(taskId);
    } catch (error) {
      console.error("Error deleting task:", error);
      // Restore tasks if fail to delete task
      setTasks(originalTasks);
      alert("Failed to delete task");
    }
  };

  // Edit task
  const handleDoubleClick = (taskId, currentContent) => {
    setEditingTaskId(taskId);
    setEditingValue(currentContent);
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditingValue("");
  };

  const handleSaveEdit = async () => {
    if (!editingValue.trim()) {
      alert("Task content cannot be empty!");
      return;
    }

    const originalTask = tasks.find((task) => task._id === editingTaskId);
    if (editingValue.trim() === originalTask.content) {
      handleCancelEdit();
      return;
    }

    try {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === editingTaskId
            ? { ...task, content: editingValue.trim() }
            : task
        )
      );

      // Call API to update task
      await taskAPI.updateTask(editingTaskId, {
        content: editingValue.trim(),
      });

      // Exit edit mode
      handleCancelEdit();
    } catch (error) {
      console.error("Error updating task:", error);

      // Revert when fail to call API
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === editingTaskId
            ? { ...task, content: originalTask.content }
            : task
        )
      );

      alert("Failed to update task content");
    }
  };

  // Handle key events when edit task
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveEdit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCancelEdit();
    }
  };

  if (isLoading) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (isError) {
    return <div className="error">Error: {isError}</div>;
  }

  if (tasks.length === 0) {
    return <div className="empty">No tasks found. Add your first task!</div>;
  }
  return (
    <div className="tasks-container">
      <h2>Your Tasks</h2>
      <ul className="tasks-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <div className="task-content">
              {/* Checkbox */}
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() =>
                    handleToggleComplete(task._id, task.completed)
                  }
                />
                <span className="checkmark"></span>
              </label>

              {/* Task content */}
              {editingTaskId === task._id ? (
                <input
                  type="text"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={handleSaveEdit}
                  className="task-edit-input"
                  autoFocus
                />
              ) : (
                <span
                  className={`task-text ${task.completed ? "completed" : ""}`}
                  onDoubleClick={() =>
                    handleDoubleClick(task._id, task.content)
                  }
                  title="Double-click to edit"
                >
                  {task.content}
                </span>
              )}
            </div>

            {/* Delete button*/}
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(task._id)}
              title="Delete task"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DisplayTasks;
