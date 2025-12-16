import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TaskList= ({ todos, setTodos }) => {

  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <ul className='text-2xl m-2'>
      {todos.map((todo, index) => (
        <div className='flex flex-row justify-center items-center'>
          <li className='bg-gray-700 m-2 text-white w-[300px] py-2 px-4 rounded-lg' key={index}>Task {index + 1}: {todo}</li>
          <button 
          onClick = {() => {
            deleteTask(index)
          }}
          className='bg-blue-600 px-4 py-2 w-auto h-auto rounded-lg text-center font-bold text-white cursor-pointer'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      ))}
    </ul>
  )

}

export default TaskList