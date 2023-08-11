import React from 'react'
import HeaderIcons from '../HeaderIcons'
import NavbarToggle from './NavbarToggle'

const Header = () => {

  return (
    <div className=' w-full bg-[#2c2a55] text-[#8391a2] px-8 h-16 flex items-center justify-between fixed top-0'>
        
        <div className=' flex items-center gap-6 '>
          <div className=' font-bold cursor-pointer hidden md:block'>
            ASM
          </div>
          <NavbarToggle />
        </div>

        <HeaderIcons />
    </div>
  )
}

export default Header