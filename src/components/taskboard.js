import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  { id: "task-1", title: "Music", description: "Learn to play guitar", status: "to-do" },
  { id: "task-2", title: "Career", description: "Apply for a new job", status: "to-do" },
  { id: "task-3", title: "Philosophy", description: "Read 'Meditations' by Marcus Aurelius", status: "doing" },
  { id: "task-4", title: "History", description: "Study World War II", status: "done" },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks || initialTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleEditTask = (taskId, newContent) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, content: newContent } : task
      )
    );
  };

  const handleUpdateTaskTitle = (taskId, newTitle) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, title: newTitle } : task))
    );
  };

  const handleUpdateTaskDescription = (taskId, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  };


  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || !newTaskDescription.trim()) return;
    const newTask = {
      id: `task-${tasks.length + 1}`,
      title: newTaskTitle,
      description: newTaskDescription,
      status: "to-do",
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      const newTasks = [...tasks];
      const index = newTasks.findIndex((task) => task.id === draggableId);
      const [removed] = newTasks.splice(index, 1);
      newTasks.splice(destination.index, 0, removed);
      setTasks(newTasks);
    } else {
      const newTasks = [...tasks];
      const index = newTasks.findIndex((task) => task.id === draggableId);
      const [removed] = newTasks.splice(index, 1);
      setTasks([
        ...newTasks.slice(0, destination.index),
        { ...removed, status: destination.droppableId },
        ...newTasks.slice(destination.index),
      ]);
    }

  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div
        style={{
          color: "#d4d0d0",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#aa707e",
          minHeight: "50vh",
          padding: "2rem",
        }}
      >
        {["to-do", "doing", "done"].map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <div
                style={{
                  backgroundColor: "#581922",
                  margin: "1rem",
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  minWidth: "350px",
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h2 style={{ color: "#d4d0d0", fontWeight: "" }}> {status === "to-do" ? "To Do" : status === "doing" ? "Doing" : "Done"}</h2>
                  {status === "to-do" && (
                    <form onSubmit={handleAddTask}>
                      <button type="submit" style={{ marginLeft: "8px" }}>
                        +
                      </button>
                    </form>
                  )}
                </div>
                {tasks
                  .filter((task) => task.status === status)
                  .map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          style={{
                            margin: "0.5rem",
                            padding: "0.5rem",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            ...provided.draggableProps.style,
                          }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <input
                              type="text"
                              value={task.title}
                              onChange={(e) =>
                                handleUpdateTaskTitle(task.id, e.target.value)
                              }
                              style={{ backgroundColor: "transparent", border: "none", color: "#d4d0d0" }}
                            />
                            <ul style={{ margin: 0, padding: 0, paddingLeft: "20px" }}>
                              <li style={{ listStyleType: "disc", color: "#d4d0d0" }}>
                                <input
                                  type="text"
                                  value={task.description}
                                  onChange={(e) =>
                                    handleUpdateTaskDescription(task.id, e.target.value)
                                  }
                                  style={{ backgroundColor: "transparent", border: "none", paddingLeft: "0px", color: "#d4d0d0" }}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
                {status === "to-do" && (
                  <form onSubmit={handleAddTask} style={{ marginTop: "1rem" }}>
                    <input
                      type="text"
                      placeholder="Enter task title"
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      style={{ backgroundColor: "transparent", border: "none", color: "#d4d0d0" }}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter task description"
                      value={newTaskDescription}
                      onChange={(e) => setNewTaskDescription(e.target.value)}
                      style={{ backgroundColor: "transparent", border: "none", color: "#d4d0d0" }}
                    />
                    <button type="submit" style={{ marginLeft: "8px" }}>
                      +
                    </button>
                  </form>
                )}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;

