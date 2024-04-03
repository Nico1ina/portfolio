'use client'
import React, { useState } from 'react'

const FullScreenMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const genericHamburgerLine = `h-0.5 w-7 my-1 bg-black rounded-full transition ease transform duration-300`

  return (
    <>
      <button
        className='flex flex-col h-12 w-12 justify-center items-center group hover:cursor-pointer pr-10 z-[999]'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div
          className={`${genericHamburgerLine} ${
            showSidebar ? 'rotate-45 translate-y-2' : ' '
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            showSidebar ? 'opacity-0' : ' '
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            showSidebar ? '-rotate-45 -translate-y-3' : ' '
          }`}
        />
      </button>

      <div
        className={`top-0 left-0 w-[100vw] bg-[#f5f3ef] p-10 text-[#1a1818] fixed h-full z-40 ease-in-out duration-500 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <section id='mySidenav'>
          <ul className='fixed inset-0 flex flex-col text-center justify-center text-[50px] sm:text-[100px] md:text-5lg'>
            <li className='tracking-widest hover:italic'>
              <a href='/'>Home</a>
            </li>
            <li className='tracking-widest hover:italic'>
              <a href='/work'>Work</a>
            </li>
            <li className='tracking-widest hover:italic'>
              <a href='/about'>About</a>
            </li>
            <li className='tracking-widest hover:italic'>
              <a href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'>
                Contact
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default FullScreenMenu
