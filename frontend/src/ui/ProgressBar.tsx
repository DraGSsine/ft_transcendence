import React from 'react'

const ProgressBar = ({progress}:{progress:number}) => {
  return (
    <div className="h-4 w-full bg-gray-300 rounded-full">
      <div style={{width: `50%`}} className="h-4 bg-green-500 rounded-full"></div>
    </div>
  )
}

export default ProgressBar