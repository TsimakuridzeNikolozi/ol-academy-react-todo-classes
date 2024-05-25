// TaskButtons.jsx
import React from "react";

const TodoControlButtons = ({
  deleteAllTasks,
  deleteDoneTasks,
  deleteCheckedTasks,
}) => (
  <>
    <button
      onClick={deleteAllTasks}
      style={{
        marginRight: "10px",
        backgroundColor: "#f44336",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Delete All
    </button>
    <button
      onClick={deleteDoneTasks}
      style={{
        marginRight: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Delete Done
    </button>
    <button
      onClick={deleteCheckedTasks}
      style={{
        marginRight: "10px",
        backgroundColor: "#2196F3",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Delete Checked
    </button>
  </>
);

export default TodoControlButtons;
