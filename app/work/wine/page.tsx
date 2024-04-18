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
        src='/images/Skärmavbild 2024-04-18 kl. 11.47.13.png'
        description='React, JavaScript, Tailwind CSS, REST API, JSON.'
      />
      <p className='m-5 font-thin'>
        At EduGrade I studied a range of technical subjects like Java, object
        oriented programming, REST APIs and databases. I also learned about
        DevOps, design patterns and software architecture. In addition, I gained
        knowledge in agile methodologies like Scrum, as well as Java web
        services and software testing.
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
        className={`flex flex-row gap-x-3 justify-center items-center sm:h-[300px] h-auto transition-transform duration-200 ${
          isEnlarged ? 'transform scale-150' : ''
        }`}
      >
        <img
          className='sm:h-[300px] invisible sm:visible h-auto py-10 hover:scale-110 transition duration-300'
          src='/images/Skärmavbild 2024-04-18 kl. 15.47.53.png'
          alt=''
          onClick={handleImageClick}
        />
        <img
          className='sm:h-[300px] invisible sm:visible h-auto py-10 hover:scale-110 transition duration-300'
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
