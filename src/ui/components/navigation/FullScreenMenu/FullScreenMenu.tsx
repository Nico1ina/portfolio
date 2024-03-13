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
        className={`top-0 right-0 w-[100vw] bg-[#f5f3ef] p-10 text-[#1a1818] fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? 'translate-y-0 ' : 'translate-y-full'
        }`}
      >
        <div id='mySidenav' className='font-serif'>
          <section className='text-[#1a1818]'>
            <ul className='fixed inset-0 ml-5 flex text-left justify-center flex-col sans font-serif text-[50px] sm:text-[100px] md:text-[130px] lg:text-[140px] lg:mt-10'>
              <li className='tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200'>
                <a href='/'>━Home</a>
              </li>
              <li className='tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200'>
                <a href='/'>━Work</a>
              </li>
              <li className='tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200'>
                <a href='/about'>━About</a>
              </li>
              <li className='tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200'>
                <a href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'>
                  ━Contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default FullScreenMenu
