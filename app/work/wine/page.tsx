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
        title='Wine Shop'
        src='/images/03.jpg'
        description='React, JavaScript, Tailwind CSS, REST API, JSON.'
      />
      <p className='m-5 font-thin'>
        This project is a dynamic Natural Wine Shop built with React and
        JavaScript. It&apos;s styled with Tailwind CSS and powered by data
        fetched from a REST API. This combination of technologies allows for a
        responsive, visually appealing and data driven online store. Reacts
        component based architecture ensures a smooth user experience, while
        Tailwind CSS utility first approach simplifies the styling process,
        making the application both functional and visually appealing.
        <br />
        <br />
        Visit my{' '}
        <a
          href='https://wine-shop-beta.vercel.app'
          target='_blank'
          className='underline hover:no-underline'
        >
          Wine Shop
        </a>{' '}
        here.
      </p>
      <div
        className={`flex flex-col sm:flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto`}
      >
        <img
          className='sm:h-[300px] h-auto py-3 md:py-10 md:hover:scale-150 transition duration-300'
          src='/images/Skärmavbild 2024-04-18 kl. 11.47.13.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-aut py-3 md:py-10 md:hover:scale-150 transition duration-300'
          src='/images/Skärmavbild 2024-04-18 kl. 15.47.53.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] h-auto py-3 md:py-10 md:hover:scale-150 transition duration-300'
          src='/images/Skärmavbild 2024-04-18 kl. 16.15.48.png'
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
