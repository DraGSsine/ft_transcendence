import { Search } from 'lucide-react'
import React from 'react'

const MessageSearch = () => {
  return (
    <div className=' h-24 flex items-center gap-4 w-full px-10 bg-slate-800 rounded-2xl '>
      <div className=' w-full flex h-12 items-center border-secondary border rounded-full px-4 gap-2 '>
        <Search size={26} />
        <input type="text" className=' w-full outline-none bg-transparent placeholder:text-gray-400 ' placeholder='Search for Messages' />
      </div>
    </div>
  )
}

export default MessageSearch