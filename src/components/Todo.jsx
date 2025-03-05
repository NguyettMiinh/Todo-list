import React from "react";
import TodoItems from "./TodoItems";
import todoTick from "../assets/images/todo-tick.svg";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import InputText from "./InputText";

const Todo = () => {
  const [form, setForm] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    date: "2025-03-04",
    priority: "1",
    radio: false,
    check: false,
  });

  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);

  const Add = () => {
    setTodoList([...todoList, form]);
    ResetForm();
  };

  const ResetForm = () => {
    setForm({
      id: uuidv4(),
      title: "",
      description: "",
      date: "2025-03-04",
      priority: "1",
      radio: false,
      check: false,
    });
  };

  const Edit = () => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === edit
          ? {
              ...form,
            }
          : todo
      )
    );
    setEdit(null);
    ResetForm();
  };

  const removeTodo = (id) => {
    const result = confirm("Do you want to delete?");
    if (result) {
      const reducedTodo = todoList.filter((todo) => todo.id !== id);
      setTodoList(reducedTodo);
    }
  };

  const editTodo = (id) => {
    const findTodo = todoList.find((todo) => todo.id === id);
    if (findTodo) {
      setForm({
        ...findTodo,
      });
      setEdit(id);
    }
  };

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div
      className="w-full bg-white/50 backdrop-blur-md border border-white/20
     place-self-center w-17/16 max-w-6xl flex flex-col flex-grow p-7 min-h-[550px] rounded-lg shadow-md"
    >
      <div className="flex items-center mt-7 gap-2">
        <img src={todoTick} className="w-7 h-7" alt="Todo Tick" />
        <h1 className="text-4xl font-semibold">ToDoList</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <InputText type= "text" value={form.title} 
        placeholder = "Task name" setForm={setForm}  name= "title"/>
        <InputText type= "text" value={form.description} 
        placeholder = "Description" setForm={setForm} name= "description" />

        {/* <input
          className="bg-transparent border-0 outline-none
           flex-1 h-10 pl-6 pr-2 text-slate-700"
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, description: e.target.value }))
          }
        /> */}

        <input
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-500"
          type="date"
          placeholder="Due date"
          value={form.date}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, date: e.target.value }))
          }
        />

        <label className="ml-7 text-slate-700 ">
          <span className="font-bold text-xs">Priority</span> <br />
          <select
            value={form.priority}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, priority: e.target.value }))
            }
          >
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </label>

        <label className="mr-10">
          
          <input
            type="radio"
            name="radio"
            value={form.radio}
            onChange={(e) => setForm((prev) => ({ ...prev, radio: true }))}
            className="accent-blue-700 w-5 h-5"
          />
          <span className="ml-5">Not started</span>
        </label>
        <label className="mr-10">
          <input
            type="radio"
            name="radio"
            value={!form.radio}
            onChange={(e) => setForm((prev) => ({ ...prev, radio: false }))}
            className="accent-blue-700 w-5 h-5"
          />
          <span className="ml-5">Pending</span>
        </label>

        <button
          type="button"
          className="border-none rounded-full bg-blue-900 w-32 
          h-10 text-white text-lg font-medium cursor-pointer"
          onClick={edit ? Edit : Add}
        >
          {edit !== null ? "UPDATE" : "CREATE"}
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        {todoList.map((item, index) => (
          <TodoItems
            key={index}
            form={item}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
