import React, { useEffect, useState } from 'react'
import Menu from '@/src/ui/components/navigation/Menu/Menu'
import moment from 'moment'
import Footer from '@/src/ui/components/navigation/Footer/Footer'

export default function Home() {
  const currentTime = moment().format('HH:mm')
  return (
    <>
      <main className='bg-[#f5f3ef] min-h-screen text-[#1a1818]'>
        <section id='hero' className='flex flex-col overflow-hidden relative'>
          <Menu />
          <div className='mx-5 sm:mx-20'>
            <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-9xl animate-slidein opacity-0 [--slidein-delay:300ms] tracking-tight'>
              Nicolina Larsson
              <br />
              <span className='animate-slidein opacity-0 [--slidein-delay:500ms]'>
                Front End Designer
              </span>
            </h1>
            <div className='flex flex-row justify-between mb-10'>
              <p className='text-sm sm:text-xl md:text-3xl lg:text-3xl animate-slidein opacity-0 [--slidein-delay:500ms]'>
                (Stockholm, Sweden - {currentTime})
              </p>
              <a
                href='#image'
                data-twe-smooth-scroll-init
                className='text-3xl animate-slidein opacity-0 [--slidein-delay:500ms] group transition duration-500 invisible lg:visible'
              >
                ↓ Scroll down
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#1a1818]'></span>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            {/*TODO: CHANGE IMAGE
                        <img
              className='w-full mt-10 animate-slidein opacity-0 [--slidein-delay:500ms] group transition duration-500 bg-hero-pattern bg-fixed bg-cover'
              src='https://media.licdn.com/dms/image/D4D03AQG40y1wkBFb1Q/profile-displayphoto-shrink_800_800/0/1677610358836?e=2147483647&v=beta&t=QfUw8q2KBRhnQwq1jduNkJ18hMCFeSBzagebX0GdkZk'
              alt=''
            />
            */}
          </div>
          <section
            id='image'
            className='bg-hero-pattern h-lvh justify-content align-center w-full bg-fixed bg-cover mb-5 sm:mb-0'
          ></section>
        </section>
        <section
          id='about'
          className='flex flex-col sm:grid sm:grid-cols-2 sm:m-10'
        >
          <h2 className='order-last sm:order-first sm:border-r border-black block text-5xl sm:text-7xl lg:text-8xl overflow-hidden m-10 sm:m-0'>
            I have always been driven to bla bla and I focus on producing
            top-notch stuff.
          </h2>
          <div className='flex flex-col justify-between'>
            <div className='text-4xl sm:ml-5'>
              <span className='invisible sm:visible'>←</span> About me{' '}
              <span className='visible sm:invisible'>↓</span>
            </div>
            {/*TODO: Create separate files for each SVG and import them that way*/}
            <div className='flex flex-row gap-x-2 ml-10 sm:ml-5'>
              <a
                href='https://www.linkedin.com/in/nicolina-larsson-8434a5206/'
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='34'
                  height='34'
                  viewBox='0 0 24 24'
                >
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                </svg>
              </a>
              <a href='https://www.instagram.com/nihaolina/' target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='34'
                  height='34'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <hr className='border-t border-[#1a1818] my-8' />
        <section
          id='work'
          className='flex flex-col sm:grid sm:grid-cols-2 m-10'
        >
          <div className='flex flex-col justify-between'>
            <div className='text-4xl ml-5 mb-10 sm:mb-0'>
              <span className='visible sm:invisible'>↓&nbsp;</span>
              What I do <span className='invisible sm:visible'>→</span>
            </div>
          </div>
          <h2 className='block text-5xl sm:text-7xl md:text-7xl lg:text-8xl overflow-hidden sm:border-l border-black pl-5'>
            I have always been driven to bla bla and I focus on producing
            top-notch stuff.
          </h2>
        </section>
        <Footer />
      </main>
    </>
  )
}
