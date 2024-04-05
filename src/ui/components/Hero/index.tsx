'use client'
import react, { useRef, useEffect } from 'react'
import Image from 'next/image'
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
    <section className='relative flex justify-center items-center w-full h-screen overflow-hidden'>
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
      <div className='absolute bottom-[9.6rem] left-[6.4rem] z-2 text-white flex gap-[16rem] items-center'>
        <div className='block overflow-hidden'>
          <h1 className='transform -translate-y-[100px]' ref={titleRef}>
            {title}
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
