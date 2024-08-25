import React from 'react'
import MessageNavbar from './MessageNavbar'
import AllMessages from './AllMessages'
import Inputs from './Inputs'

const MessagesSection = () => {
  return (
    <div className=' flex flex-col w-full space-y-5'>
        <MessageNavbar />
        <AllMessages />
        <Inputs/>
    </div>
  )
}

export default MessagesSection