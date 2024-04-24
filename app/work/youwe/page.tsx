'use client'
import Hero from '@/src/ui/components/Hero'
import { useState } from 'react'

export default function Home() {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged)
  }
  return (
    <>
      <Hero
        title='Youwe'
        src='/images/05.jpg'
        description='React, TypeScript, Tailwind CSS, NextJS, Storybook and Apollo GraphQL.'
      />
      <p className='m-5 font-thin'>
        During my time at Youwe, I was involved with modular Front End
        development focusing on building reactive and digital accessible UI
        components based on Youwes designsystem. I&apos;ve also produced stories
        and documentation in Storybook and work with technologies like React,
        TypeScript, NextJS and Apollo GraphQL.
        <br />
        <br /> My role involved close collaboration in an agile team working
        closely with designers, other developers and product owners.
      </p>
      <p className='flex justify-center items-center font-thin text-xl pt-10'>
        Some examples of components I&apos;ve built:
      </p>
      <div
        className={`flex flex-col sm:flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto`}
      >
        <img
          className='sm:h-[300px] h-auto py-3 md:pt-5 md:hover:scale-110 transition duration-300'
          src='/images/toggle.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-aut py-3 md:pt-5 md:hover:scale-110 transition duration-300'
          src='/images/toggle2.png'
          alt=''
          onClick={handleImageClick}
        />
      </div>
      <div>
        <p className='flex justify-center items-center font-thin italic mb-10'>
          Toggle
        </p>
      </div>
      <div
        className={`flex flex-col sm:flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto`}
      >
        <img
          className='sm:h-[300px] h-auto py-3 md:pt-10 md:hover:scale-110 transition duration-300'
          src='/images/accordion.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-aut py-3 md:pt-10 md:hover:scale-110 transition duration-300'
          src='/images/accordion2.png'
          alt=''
          onClick={handleImageClick}
        />
      </div>
      <div>
        <p className='flex justify-center items-center font-thin italic mb-10'>
          Accordion
        </p>
      </div>
      <div
        className={`flex flex-col sm:flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto`}
      >
        <img
          className='sm:h-[300px] h-auto py-3 md:pt-10 md:hover:scale-150 transition duration-300'
          src='/images/pill2.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-aut py-3 md:pt-10 md:hover:scale-150 transition duration-300'
          src='/images/loadingspinner.png'
          alt=''
          onClick={handleImageClick}
        />
      </div>
      <div>
        <p className='flex justify-center items-center font-thin italic mb-10'>
          Pill & Loading Spinner{' '}
        </p>
      </div>
      <div
        className={`flex flex-col sm:flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto`}
      >
        <img
          className='sm:h-[300px] h-auto py-3 md:pt-10 md:hover:scale-150 transition duration-300'
          src='/images/contentcard.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-aut py-3 md:pt-10 md:hover:scale-150 transition duration-300'
          src='/images/contentcard2.png'
          alt=''
          onClick={handleImageClick}
        />
      </div>
      <div>
        <p className='flex justify-center items-center font-thin italic mb-10'>
          Content card
        </p>
      </div>
      <div className='flex justify-end items-right p-5 w-full'>
        <a
          href='/work'
          className='hover:underline text-black font-light pb-2 text-sm'
        >
          [ Back to projects page ]
        </a>
      </div>
    </>
  )
}
