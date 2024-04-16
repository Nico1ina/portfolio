'use client'
import { projects } from '../../src/ui/components/data.js'
import Card from '../../src/ui/components/Card/index.jsx'
import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>
      <div className='right-0 fixed z-999 flex flex-row justify-between pt-4'>
        <FullScreenMenu />
      </div>
      <main ref={container}>
        <h1 className='justify-center text-center font-thin pt-20 text-xs'>
          [ Scroll to read more about my previous work and projects ]
        </h1>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              destination={project.link}
            />
          )
        })}
      </main>
    </>
  )
}
