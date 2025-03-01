import React from 'react';

const TodoItems = (
    {title,content,date,
     index,removeTodo,
     handleSelect,selected,
     handleCheck,
     status,
     option,
     handleRadio,
     editTodo
    }) => {
  return (
    <div className= {`flex bg-white/70 items-center my-3 gap-2 shadow-md rounded-lg ${status ? "bg-gray-300 opacity-50" : "bg-white"}`} key={index}>

        <div className = 'flex flex-1 items-center cursor-pointer'>
            <input type="checkbox" className="w-5 h-5 text-blue-500  ml-8 accent-blue-700 w-5 h-5"
            checked= {status} onChange={(e) => handleCheck(e,index)}
             />

            <div className='text-slate-700 ml-4 text-[17px] max-w-64' >
                <h3 className='font-bold'> {title} <span> ({date})</span></h3>
                <p>{content}</p>

            </div> 
            <div className='flex'>
                <label className='ml-7 text-slate-700 '>
                    <span className='font-bold'>Priority</span>  <br/>
                    <select value={selected}  onChange={(e) => handleSelect(e,index)}>
                        <option value= "1" >High</option>
                        <option value= "2" >Medium</option>
                        <option value= "3" >Low</option>
                    </select>
                </label>
            </div>

            

            <div className='ml-10 text-slate-700'>
                <label className='mr-10'>
                    <input type="radio" name= {`radion-${index}`} 
                    checked={true === option}
                    value= {true}
                     onChange = {(e) => handleRadio(e,index)}
                     className="accent-blue-700 w-5 h-5"
                     />
                    <span className='ml-5'>Not started</span>
                </label>
                <label className='mr-10'>
                    <input type="radio" name= {`radion-${index}`} 
                     checked= {false === option} 
                     value= {false}
                     onChange = {(e) => handleRadio(e,index)} 
                     className="accent-blue-700 w-5 h-5"
                     />
                    <span className='ml-5'>In progress</span>
                </label>
            </div>
            
        </div>

        <button onClick={() => removeTodo(index)}>
            <i className="bx bx-trash text-2xl text-slate-700"></i>


        </button>
        <button onClick={() => editTodo(index)}>
            <i className='bx bx-edit-alt mr-5 text-2xl text-slate-700' ></i>
        </button>
        
    </div>
  )
}

export default TodoItems
