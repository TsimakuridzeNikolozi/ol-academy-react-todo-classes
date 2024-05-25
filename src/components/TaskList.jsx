import React from "react";
import TaskButtons from "./TaskButtons";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: "",
      errorMessage: "",
    };
  }

  handleEditTask = (index, taskName) => {
    const { changeEditMode } = this.props;
    this.setState({ newTaskName: taskName, errorMessage: "" });
    changeEditMode(index);
  };

  handleMoveUp = (index) => {
    const { tasks } = this.props;
    this.setState({ errorMessage: "" });
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      this.props.onMoveTask(updatedTasks);
    }
  };

  handleMoveDown = (index) => {
    const { tasks } = this.props;
    this.setState({ errorMessage: "" });
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      this.props.onMoveTask(updatedTasks);
    }
  };

  handleCancelEdit = (index) => {
    const { changeEditMode } = this.props;
    this.setState({ newTaskName: "", errorMessage: "" });
    changeEditMode(index);
  };

  handleSaveTask = (task) => {
    const { newTaskName } = this.state;
    const { tasks, onEditTask } = this.props;

    const taskWithSameName = tasks.find(
      (existingTask) => existingTask.name === newTaskName
    );

    if (taskWithSameName && taskWithSameName.name !== task.name) {
      this.setState({
        errorMessage: `A task with the name ${newTaskName} already exists.`,
      });
      return;
    }

    onEditTask(task.name, newTaskName);
    this.setState({ newTaskName: "", errorMessage: "" });
  };

  render() {
    const { tasks, onDeleteTask, onTaskMarked, onTaskChecked } = this.props;
    const { newTaskName, errorMessage } = this.state;
    return (
      <div
        className="todo-list"
        style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
      >
        {errorMessage && (
          <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
        )}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={task.name}
              style={{
                textDecoration: task.isDone ? "line-through" : "none",
                marginBottom: "10px",
              }}
            >
              {task.editMode ? (
                <>
                  <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) =>
                      this.setState({ newTaskName: e.target.value })
                    }
                    style={{
                      marginRight: "10px",
                      padding: "5px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <button
                    onClick={() => this.handleSaveTask(task)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => this.handleCancelEdit(index)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.isChecked}
                    onChange={() => onTaskChecked(task.name)}
                    style={{ marginRight: "10px" }}
                  />
                  <span style={{ marginRight: "10px" }}>{task.name}</span>
                  <TaskButtons
                    task={task}
                    onTaskMarked={onTaskMarked}
                    handleEditTask={() => this.handleEditTask(index, task.name)}
                    onDeleteTask={onDeleteTask}
                    handleMoveUp={() => this.handleMoveUp(index)}
                    handleMoveDown={() => this.handleMoveDown(index)}
                    style={{ marginLeft: "10px" }}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TaskList;
