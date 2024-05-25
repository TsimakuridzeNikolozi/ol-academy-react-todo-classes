import React, { Component } from "react";

class TaskInputForm extends Component {
  state = {
    taskName: "",
    errorMessage: "",
  };

  clearError = () => {
    this.setState({ errorMessage: "" });
  };

  updateTaskName = (e) => {
    this.setState({ taskName: e.target.value });
  };

  submitTask = () => {
    const { taskName } = this.state;
    const { tasks, onAddTask } = this.props;

    if (taskName === "") {
      this.setState({ errorMessage: "Task name cannot be empty." });
      return;
    }

    if (tasks.some((task) => task.name === taskName)) {
      this.setState({
        errorMessage: `A task with a name ${taskName} already exists.`,
      });
      return;
    }

    onAddTask(taskName);
    this.setState({ taskName: "", errorMessage: "" });
  };

  render() {
    const { taskName, errorMessage } = this.state;
    return (
      <div
        className="add-todo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          value={taskName}
          onChange={this.updateTaskName}
          placeholder="Enter task name"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={this.submitTask}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
      </div>
    );
  }
}

export default TaskInputForm;
