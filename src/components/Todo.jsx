import React, { Component } from "react";
import TaskInputForm from "./TaskInputForm";
import TaskList from "./TaskList";
import TodoControlButtons from "./TodoControlButtons";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      errorMessage: "",
    };
  }

  handleAddTask = (taskName) => {
    const { tasks } = this.state;
    if (!taskName.trim()) {
      return this.setState({ errorMessage: "Task name cannot be empty." });
    }
    if (tasks.some((task) => task.name === taskName)) {
      return this.setState({
        errorMessage: "A task with this name already exists.",
      });
    }
    this.setState({
      tasks: [
        ...tasks,
        { name: taskName, isDone: false, isToggle: false, editMode: false },
      ],
      errorMessage: "",
    });
  };

  deleteDoneTasks = () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.isDone),
    }));
  };

  deleteCheckedTasks = () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.isChecked),
    }));
  };

  deleteAllTasks = () => {
    this.setState({ tasks: [] });
  };

  handleTaskMarked = (taskName) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.name === taskName ? { ...task, isDone: !task.isDone } : task
      ),
    }));
  };

  handleTaskChecked = (taskName) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.name === taskName ? { ...task, isChecked: !task.isChecked } : task
      ),
    }));
  };

  handleDeleteTask = (taskName) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.name !== taskName),
    }));
  };

  handleEditTask = (oldTaskName, newTaskName) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.name === oldTaskName
          ? { ...task, name: newTaskName, editMode: false }
          : task
      ),
    }));
  };

  handleMoveTask = (updatedTasks) => {
    this.setState({ tasks: updatedTasks, errorMessage: "" });
  };

  changeEditMode = (index) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task, taskIndex) =>
        index === taskIndex ? { ...task, editMode: !task.editMode } : task
      ),
    }));
  };

  render() {
    const { tasks, errorMessage } = this.state;
    return (
      <div className="todo-wrapper">
        <h1>Ol Academy Todo List</h1>
        <TaskInputForm onAddTask={this.handleAddTask} tasks={tasks} />
        <TodoControlButtons
          deleteDoneTasks={this.deleteDoneTasks}
          deleteCheckedTasks={this.deleteCheckedTasks}
          deleteAllTasks={this.deleteAllTasks}
        />
        <TaskList
          tasks={tasks}
          errorMessage={errorMessage}
          onDeleteTask={this.handleDeleteTask}
          onTaskMarked={this.handleTaskMarked}
          onTaskChecked={this.handleTaskChecked}
          onEditTask={this.handleEditTask}
          onMoveTask={this.handleMoveTask}
          changeEditMode={this.changeEditMode}
        />
      </div>
    );
  }
}

export default Todo;
