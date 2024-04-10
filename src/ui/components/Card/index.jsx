'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'

import { scaleCenterImage, moveUpTitle } from '../Motion/initial/animations.js'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'

const Card = ({
  i,
  title,
  src,
  link,
  progress,
  range,
  targetScale,
  destination,
}) => {
  const router = useRouter()
  const timelineRef = useRef(null)
  const centerImageRef = useRef(null)
  const centerImageWrapperRef = useRef(null)
  const centerImageTitleRef = useRef(null)

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  useEffect(() => {
    const timeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        if (destination) {
          router.push(destination)
        }
      },
    })
    timelineRef.current = timeline

    if (
      timelineRef.current &&
      centerImageWrapperRef.current &&
      centerImageRef.current &&
      centerImageTitleRef.current
    ) {
      timelineRef.current
        .add(
          scaleCenterImage(
            centerImageWrapperRef.current,
            centerImageRef.current
          ),
          '<'
        )
        .add(moveUpTitle(centerImageTitleRef.current), '<')
    }

    return () => {
      // Clean up timeline on unmount
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [destination, router])

  const handleNavigate = () => {
    // Start animation
    timelineRef.current?.play()
  }

  return (
    <a
      // href={link}
      onClick={handleNavigate}
      ref={centerImageWrapperRef}
      data-wrapper-center
    >
      <div ref={container} className={styles.cardContainer}>
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={styles.card}
        >
          <h2
            ref={centerImageTitleRef}
            className='hover:italic text-center font-thin font-5xl'
          >
            {title}
          </h2>
          <div className={styles.body}>
            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={`/images/${src}`}
                  alt='image'
                  data-image-center
                  ref={centerImageRef}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </a>
  )
}

export default Card
