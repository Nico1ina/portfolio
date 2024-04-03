'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const Card = ({ i, title, src, link, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <a className={styles.url} href={link} target='_blank'>
              See more
            </a>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt='image' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card
