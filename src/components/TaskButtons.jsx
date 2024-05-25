import React from "react";

const TaskButtons = ({
  task,
  onTaskMarked,
  handleEditTask,
  onDeleteTask,
  handleMoveUp,
  handleMoveDown,
}) => (
  <>
    <button
      onClick={() => onTaskMarked(task.name)}
      style={{
        marginRight: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Done
    </button>
    <button
      onClick={() => handleEditTask(task.name)}
      style={{
        marginRight: "10px",
        backgroundColor: "#2196F3",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Edit
    </button>
    <button
      onClick={() => onDeleteTask(task.name)}
      style={{
        marginRight: "10px",
        backgroundColor: "#f44336",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Delete
    </button>
    <button
      onClick={() => handleMoveUp(task.name)}
      style={{
        marginRight: "10px",
        backgroundColor: "#555555",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Up
    </button>
    <button
      onClick={() => handleMoveDown(task.name)}
      style={{
        marginRight: "10px",
        backgroundColor: "#555555",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Down
    </button>
  </>
);

export default TaskButtons;
