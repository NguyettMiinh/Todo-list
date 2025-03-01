import React from 'react'

const TodoCount = ({todos_completed,total_todos}) => {
  return (
    <section>
        <div className=''>
            <div>
                <p className=' ml-[45px] text-yellow-900 font-semibold'>Task Done</p>
            </div>
            <div className='ml-[50px] text-yellow-900 font-semibold'>
                {todos_completed} / {total_todos}
            </div>
        </div>
        
    </section>
   
  )
}

export default TodoCount
