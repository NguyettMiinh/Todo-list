import React from 'react'
import Todo from './components/Todo'


const App = () => {
  return (
    <div className="w-full bg-gradient-to-t from-blue-950 to-blue-300
       bg-opacity-30 backdrop-blur-md border border-blue-500/20 
       grid py-4 min-h-screen">
      <Todo />
    </div>
  )
}

export default App
