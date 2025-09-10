import { useState } from "react";
import { taskAPI } from "../services/api";
function AddTaskInput({ onTaskAdded }) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check empty input
    if (!content.trim()) {
      alert("Please enter task content!");
      return;
    }

    try {
      setIsLoading(true);

      // Call API
      const response = await taskAPI.createTask({
        content: content.trim(),
      });

      console.log("Task created:", response.data);

      onTaskAdded();

      // Reset form
      setContent("");
      alert("Task added successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to add task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <div className="input-group">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your task..."
          disabled={isLoading}
          className="task-input"
        />
        <button
          type="submit"
          disabled={isLoading || !content.trim()}
          className="add-button"
        >
          {isLoading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
}
export default AddTaskInput;
