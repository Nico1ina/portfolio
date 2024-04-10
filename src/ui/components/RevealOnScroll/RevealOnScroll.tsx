'use client'
import { useEffect, useState, useRef, ReactNode } from 'react'

const RevealOnScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current
      if (element) {
        const { top } = element.getBoundingClientRect()
        const isVisible = top < window.innerHeight
        setIsVisible(isVisible)
      }
    }

    window.addEventListener('scroll', onWindScroll)
    return () => {
      window.removeEventListener('scroll', onWindScroll)
    }
  }, [])

  const classes = `transition-opacity duration-1000
        ${isVisible ? 'opacity-100' : 'opacity-0'}`

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

export default RevealOnScroll
