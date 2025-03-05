import React from "react";
import Button from "./Button";

const TodoItems = ({ removeTodo, handleCheck, editTodo, form }) => {
  return (
    <div
      className={`flex bg-white/70 items-center my-3 gap-2 shadow-md rounded-lg`}
    >
      <div className="flex flex-1 items-center cursor-pointer">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-500  ml-8 accent-blue-700 w-5 h-5"
          onChange={(e) => handleCheck(e, index)}
        />

        <div className="text-slate-700 ml-4 text-[17px] max-w-64">
          <h3 className="font-bold">
            {form.title} <span> ({form.date})</span>
          </h3>
          <p>{form.description}</p>
        </div>

        <div>
          <p>
            {
                (()=> {
                    let labelP;

                    switch(form.priority) {

                        case "1":
                            labelP = "High";
                            break;
                        case "2":
                            labelP = "Medium";
                            break;
                        case "3":
                            labelP = "Low";
                            break;
                        default:
                            labelP = "Unknow";

                            
                    }
                    return labelP;
                })()
                
           
              }
          </p>
        </div>

        <div>
          <p>{form.radio ? "Not started" : "Pending"}</p>
        </div>
      </div>

      <Button className = "text-2xl text-slate-700" 
      onClick={() => removeTodo(form.id)}
      content={<i className="bx bx-trash text-2xl text-slate-700"></i>}
      />
      <Button className = "text-2xl text-slate-700 mr-5" 
      onClick={() => editTodo(form.id)}
      content={<i className="bx bx-edit-alt"></i>}
      />
    </div>
  );
};

export default TodoItems;
