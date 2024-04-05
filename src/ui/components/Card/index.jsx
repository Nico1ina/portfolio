'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'

import { scaleCenterImage, moveUpTitle } from '../Motion/initial/animations.js'

const Card = ({
  i,
  title,
  src,
  link,
  progress,
  range,
  targetScale,
  timeline,
}) => {
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
    if (timeline) {
      introAnimation(centerImageWrapperRef.current)

      timeline
        .add(
          scaleCenterImage(
            centerImageWrapperRef.current,
            centerImageRef.current
          ),
          '<'
        )
        .add(moveUpTitle(centerImageTitleRef.current), '<')
    }
  }, [timeline])

  const handlePlay = () => {
    timeline?.play()
    router.push(link)
  }

  return (
    <a
      href={link}
      onClick={() => timeline?.play()}
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
          <h2 ref={centerImageTitleRef}>{title}</h2>
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
                  ref={centerImageRef}
                  data-image-center
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
