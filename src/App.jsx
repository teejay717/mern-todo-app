import React from 'react'
import { useState } from 'react'
import TaskCard from './components/TaskCard'

function App() {

  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-900 '>
        <TaskCard />
    </div>
  )
}

export default App
