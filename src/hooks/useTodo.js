import { useState, useEffect } from "react";

export default function useTodo() {
  const [allTodos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todoList")) ?? [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newStatus, setStatus] = useState(false);
  const [newRadio, setRadio] = useState("");
  const [newSelect, setSelect] = useState(1);
  const [newEdit, setEdit] = useState(null);
  const [show, setShowAll] = useState(true);
  const [newBtn, setBtn] =useState("CREATE");



  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(allTodos));
  }, [allTodos]);

  // const handleAddTodo = () => {
  //   const maxId = allTodos.length > 0 ? Math.max(...allTodos.map(todo => todo.id)) : 0;
  //   const id = maxId + 1;

  //   if (newEdit) {
  //     const updatedEdit = allTodos.map(todo =>
  //       todo.id === newEdit
  //         ? { ...todo, newTitle, newDescription, newDate, newSelect, newRadio }
  //         : todo
  //     );
  //     setTodos(updatedEdit);
  //     setEdit(null);
  //   } else {
  //     const updatedTodo = [
  //       ...allTodos,
  //       { id, newTitle, newDescription, newDate, newStatus, newRadio, newSelect, show }
  //     ];
  //     setTodos(updatedTodo);
  //   }

  //   setBtn("CREATE");
  //   setNewDate("");
  //   setNewDescription("");
  //   setNewTitle("");
  // };

  const removeTodo = id => {
    const result = confirm("Do you want to delete?");
    if (result){
      const reducedTodo = allTodos.filter(todo => todo.id !== id);
      setTodos(reducedTodo);
    }
   
  };

  const handleCheckbox = (e, id) => {
    const status = e.target.checked;
    
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, newStatus: status } : todo))
    );
  };

  const handleRadio = (e) => {
    const radioSelect = JSON.parse(e.target.value);
    setRadio(radioSelect);
  };

  const handleSelect = (e, id) => {
    const selected = Number(e.target.value);
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
      setSelect(findTodo.newSelect);
      setRadio(findTodo.newRadio);
      
      setEdit(id);
      setBtn("UPDATE");
    }
  };


  return {
    allTodos,
    newTitle,
    newDescription,
    newDate,
    show,
    newSelect,
    newBtn,
    newRadio,
    removeTodo,
    handleCheckbox,
    handleRadio,
    handleSelect,
    editTodo,
    setNewTitle,
    setNewDescription,
    setNewDate,
    setShowAll,
    setSelect,
    setBtn,
    setRadio
  };
}
