import React from "react";
import useTodo from "../hooks/useTodo"; // Import custom hook
import TodoItems from "./TodoItems";
import TodoCount from "./TodoCount";
import todoTick from "../assets/images/todo-tick.svg";

const Todo = () => {
  const {
    allTodos,
    newTitle,
    newDescription,
    newDate,
    handleAddTodo,
    removeTodo,
    handleCheckbox,
    handleRadio,
    handleSelect,
    editTodo,
    setNewTitle,
    setNewDescription,
    setNewDate
  } = useTodo();

  const todos_completed = allTodos.filter(todo => todo.newStatus === true).length;
  const total_todos = allTodos.length;

  console.log(allTodos);

  return (
    <div className="h-64 w-full bg-white/50 backdrop-blur-md border border-white/20 place-self-center w-14/15 max-w-4xl flex flex-col p-7 min-h-[550px] rounded-lg shadow-md">
      <div className="flex items-center mt-7 gap-2">
        <img src={todoTick} className="w-6 h-6" alt="Todo Tick" />
        <h1 className="text-3xl font-semibold">ToDo List</h1>
      </div>
      <div>
        <TodoCount todos_completed={todos_completed} total_todos={total_todos} />
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-700"
          type="text"
          placeholder="Task name"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />

        <input
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-700"
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />

        <input
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-500"
          type="date"
          placeholder="Due date"
          value={newDate}
          onChange={e => setNewDate(e.target.value)}
        />

        <button
          type="button"
          className="border-none rounded-full bg-blue-900 w-32 h-10 text-white text-lg font-medium cursor-pointer"
          onClick={handleAddTodo}
        >
          ADD +
        </button>
      </div>

      <div>
        {allTodos.map(item => (
          <TodoItems
            key={item.id}
            index={item.id}
            title={item.newTitle}
            content={item.newDescription}
            date={item.newDate}
            removeTodo={removeTodo}
            handleSelect={handleSelect}
            selected={item.newSelect}
            handleCheck={handleCheckbox}
            status={item.newStatus}
            option={item.newRadio}
            handleRadio={handleRadio}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
