'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import FullScreenMenu from '../navigation/FullScreenMenu/FullScreenMenu'
import {
  titleAnimation,
  fadeInOverlay,
} from '@/src/ui/components/Motion/end/animations.js'

interface HeroProps {
  src: string
  title: string
  description?: string
}

const Hero = ({ src, title, description }: HeroProps) => {
  const overlayRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    fadeInOverlay(overlayRef.current!)
    titleAnimation(titleRef.current!)
  }, [])

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
          src={src}
          alt=''
        />
        <div className='absolute bottom-[4.6rem] sm:bottom-[9.6rem] left-[1.4rem] sm:left-[6.4rem] font-thin z-2 text-white flex gap-[16rem] items-center'>
          <div className='block overflow-hidden'>
            <h1
              className='text-4xl transform -translate-y-[100px]'
              ref={titleRef}
            >
              {title}
            </h1>
            <p className='animate-slidein opacity-0 [--slidein-delay:800ms]'>
              {description}
            </p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex z-20 text-white font-thin text-sm'>
          <div className='flex flex-row justify-between w-full px-4'>
            <p>← Previous Project</p>
            <p>Next Project →</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
