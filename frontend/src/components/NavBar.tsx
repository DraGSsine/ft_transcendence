import React from 'react'
import SearchBar from './SearchBar'
import { Bell } from 'lucide-react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className=' h-[10vh] flex items-center justify-between'>
        <SearchBar />
        <div className=' gap-10 flex items-center'>
            <div className='cursor-pointer relative '>
                <Bell size={32} />
                <span className='bg-secondary w-5 h-5 rounded-full flex items-center justify-center -top-1 absolute -right-1 '>3</span>
            </div>
            <span className=' bg-secondary rounded-full p-[1px]' >
              <div className='cursor-pointer h-14 w-14 flex items-center justify-center rounded-full overflow-hidden '>
                  <Image src='/assets/profile.jpg' alt='avatar' width={80} height={80} />
              </div>
            </span>
        </div>
    </div>
  )
}

export default NavBar