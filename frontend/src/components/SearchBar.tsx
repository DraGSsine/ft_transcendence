import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className=' flex border p-2 h-14 rounded-full w-[400px] text-center items-center px-4 bg-black/30 '>
        <SearchIcon />
        <input  className=' pl-4 w-full bg-transparent outline-none ' placeholder='Search for someone' type="text" />
    </div>
  )
}

export default SearchBar