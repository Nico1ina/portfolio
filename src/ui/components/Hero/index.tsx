'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import FullScreenMenu from '../navigation/FullScreenMenu/FullScreenMenu'
import {
  titleAnimation,
  fadeInOverlay,
} from '@/src/ui/components/Motion/end/animations.js'
import { projects } from '../data'

interface HeroProps {
  src: string
  title: string
  description?: string
}

const Hero = ({ src, title, description }: HeroProps) => {
  const overlayRef = useRef(null)
  const titleRef = useRef(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    // Assuming fadeInOverlay and titleAnimation are defined elsewhere
    fadeInOverlay(overlayRef.current!)
    titleAnimation(titleRef.current!)
  }, [])

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    )
  }

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    )
  }

  const currentProject = projects[currentProjectIndex]

  return (
    <section className='relative flex w-full h-screen overflow-hidden'>
      <div className='right-0 fixed z-10 flex flex-row justify-between pt-4'>
        <FullScreenMenu />
      </div>
      <div className='justify-center items-center'>
        <div
          ref={overlayRef}
          className='absolute inset-0 z-2 bg-gradient-to-b from-transparent via-transparent to-black opacity-0'
        />
        <Image
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
          fill
          className='w-full h-full object-cover'
          src={currentProject.src}
          alt=''
        />
        <div className='absolute bottom-[4.6rem] sm:bottom-[9.6rem] left-[1.4rem] sm:left-[6.4rem] font-thin z-2 text-white flex gap-[16rem] items-center'>
          <div className='block overflow-hidden'>
            <h1
              className='text-4xl transform -translate-y-[100px]'
              ref={titleRef}
            >
              {currentProject.title}
            </h1>
            <p className='animate-slidein opacity-0 [--slidein-delay:800ms]'>
              {currentProject.description}
            </p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex z-20 text-white font-thin text-sm'>
          <div className='flex flex-row justify-between w-full px-4'>
            <button onClick={handlePreviousProject}>← Previous Project</button>
            <button onClick={handleNextProject}>Next Project →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
