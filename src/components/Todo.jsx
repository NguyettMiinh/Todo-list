import React from "react";
import TodoItems from "./TodoItems";
import todoTick from "../assets/images/todo-tick.svg";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import Button from "./Button";

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


  console.log(todoList);

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
        className= "bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-700"
        placeholder = "Task name" setForm={setForm}  name= "title"/>
        <InputText type= "text" value={form.description} 
         className= "bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-700"
        placeholder = "Description" setForm={setForm} name= "description" />
        <InputText type= "date" value={form.date} 
          className= "bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 text-slate-500"
         setForm={setForm} name= "date" />

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

        <InputRadio setForm={setForm} content= "Not started" value={form.radio} radioValue={true}/>
        <InputRadio setForm={setForm} content= "Pending" value={!form.radio} radioValue={false}/>

        <Button  className="border-none rounded-full bg-blue-900 w-32 
          h-10 text-white text-lg font-medium cursor-pointer"
          onClick={edit ? Edit : Add}
          content= {edit !== null ? "UPDATE" : "CREATE"}
          />
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
