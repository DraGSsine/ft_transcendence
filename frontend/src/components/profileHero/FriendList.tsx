import React from 'react'
import Friend from './Friend'

const FriendList = () => {
  return (
    <aside className=' bg-slate-800 h-full w-[25vw] rounded-t-2xl p-6 space-y-14 '>
        <h1 className=' font-semibold text-2xl  '>Friends</h1>
        <div className=' space-y-5'>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
        </div>
    </aside>
  )
}

export default FriendList