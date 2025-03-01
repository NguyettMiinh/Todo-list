import { useState, useEffect } from "react";

export default function useTodo() {
  const [allTodos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todoList")) ?? [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newStatus, setStatus] = useState(false);
  const [newRadio, setRadio] = useState(true);
  const [newSelect, setSelect] = useState(1);
  const [newEdit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(allTodos));
  }, [allTodos]);

  const handleAddTodo = () => {
    const maxId = allTodos.length > 0 ? Math.max(...allTodos.map(todo => todo.id)) : 0;
    const id = maxId + 1;

    if (newEdit) {
      const updatedEdit = allTodos.map(todo =>
        todo.id === newEdit
          ? { ...todo, newTitle, newDescription, newDate }
          : todo
      );
      setTodos(updatedEdit);
      setEdit(null);
    } else {
      const updatedTodo = [
        ...allTodos,
        { id, newTitle, newDescription, newDate, newStatus, newRadio, newSelect }
      ];
      setTodos(updatedTodo);
    }

    setNewDate("");
    setNewDescription("");
    setNewTitle("");
  };

  const removeTodo = id => {
    const reducedTodo = allTodos.filter(todo => todo.id !== id);
    setTodos(reducedTodo);
  };

  const handleCheckbox = (e, id) => {
    const status = e.target.checked;
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, newStatus: status } : todo))
    );
  };

  const handleRadio = (e, id) => {
    const radioSelect = JSON.parse(e.target.value);
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, newRadio: radioSelect } : todo))
    );
  };

  const handleSelect = (e, id) => {
    const selected = Number(e.target.value);
    setSelect(selected);
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, newSelect: selected } : todo))
    );
  };

  const editTodo = id => {
    const findTodo = allTodos.find(todo => todo.id === id);
    if (findTodo) {
      setNewTitle(findTodo.newTitle);
      setNewDescription(findTodo.newDescription);
      setNewDate(findTodo.newDate);
      setEdit(id);
    }
  };

  return {
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
  };
}
