import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className=' flex p-2 h-14 rounded-full w-[400px] text-center items-center px-4 bg-gray-800 text-white '>
        <SearchIcon size={30} />
        <input  className=' placeholder:text-white/50 pl-4 w-full bg-transparent outline-none ' placeholder='Search for someone' type="text" />
    </div>
  )
}

export default SearchBar