import React from 'react'

const InputRadio = ({content,value, radioValue, setForm}) => {
  return (
    <div>
         <label className="mr-10">
          <input
            type="radio"
            name= "radio"
            value={value}
            onChange={(e) => setForm((prev) => ({ ...prev, radio: radioValue }))}
            className="accent-blue-700 w-5 h-5"
          />
          <span className="ml-5">{content}</span>
        </label>
    </div>
  )
}

export default InputRadio
