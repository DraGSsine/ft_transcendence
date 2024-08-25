import React from 'react'
import PlayedGame from './PlayedGame'

const GamesHistory = () => {
  return (
    <div className=' h-[600px] rounded-2xl w-[35%] bg-slate-800 p-4'>
        <h1 className=' title mb-10 '>Recent Games</h1>
        <div className=' flex gap-4 flex-col'>
            <PlayedGame />
            <PlayedGame />
            <PlayedGame />
            <PlayedGame />
        </div>
    </div>
  )
}

export default GamesHistory