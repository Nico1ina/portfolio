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
        title='Weather Forecast App'
        src='/images/01.jpg'
        description='React, TypeScript, Tailwind CSS, NextJS, Storybook and Apollo GraphQL.'
      />
      <p className='m-5 font-thin'>
        This project is a dynamic and userfriendly Weather Forecast App built
        with <b>React and TypeScript</b>, enhancing my skills in modern web
        development practices. It dynamically fetches real-time weather
        information from a <b>REST API</b>, leveraging <b>Tailwind CSS</b> for
        responsive design, to provide an immersive and accessible user
        experience for any location worldwide.
        <br />
        <br />
        Visit my{' '}
        <a
          href='https://weather-app-iota-sooty.vercel.app'
          target='_blank'
          className='underline hover:no-underline'
        >
          Weather App
        </a>{' '}
        here.
      </p>
      <div
        className={`flex flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto transition-transform duration-200 ${
          isEnlarged ? 'transform scale-150' : ''
        }`}
      >
        <img
          className='sm:h-[300px] h-auto py-10 hover:scale-110 transition duration-300'
          src='/images/Skärmavbild 2024-04-18 kl. 15.39.44.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-auto py-10 hover:scale-110 transition duration-300'
          src='/images/Skärmavbild 2024-04-18 kl. 15.48.29.png'
          alt=''
          onClick={handleImageClick}
        />
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
