import React from 'react'

const ProgressBar = ({color,width}:{color:string,width:string}) => {
  return (
    <div className={`h-2 ${color + width}`} ></div>
  )
}

export default ProgressBar