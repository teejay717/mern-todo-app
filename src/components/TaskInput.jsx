import React from 'react'
import { useState } from 'react'

const TaskInput = ({ todos, setTodos}) => {
  const [inputValue, setInputValue] = useState('');


  function submitTask (inputValue) {
    setTodos([...todos, inputValue]);
    setInputValue('');
    console.log([...todos, inputValue]);
  }

  return ( 
    <div className='flex justify-center items-center mb-4'>
        <input 
        value = {inputValue}
        onChange = {(e) => setInputValue(e.target.value)}
        className='bg-gray-600 rounded-lg text-2xl px-6 py-3 m-2' type="text" placeholder='Add new task'/>

        <button onClick={() => {submitTask(inputValue)}} 
        className='bg-blue-600 px-5 py-3 rounded-lg text-2xl text-center font-bold text-white cursor-pointer'>+</button>
    </div>
  )
}

export default TaskInput