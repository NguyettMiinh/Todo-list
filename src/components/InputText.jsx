import React from 'react'

const InputText = ({valueText,type, setForm, placeholder,name}) => {
  return (
    <div>
      <input
          className="bg-transparent border-0 outline-none 
          flex-1 h-10 pl-6 pr-2 text-slate-700"
          type= {type}
          placeholder= {placeholder}
          value={valueText}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [name]: e.target.value }))
          }
        />
    </div>
  )
}

export default InputText
