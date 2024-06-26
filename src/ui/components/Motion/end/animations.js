import { gsap } from 'gsap'

gsap.defaults({
  duration: 2,
  ease: 'expo.out',
})

export const titleAnimation = (titleRef) => {
  return gsap.to(titleRef, {
    y: 0,
    duration: 2.5,
  })
}

export const fadeInOverlay = (overlayRef) => {
  return gsap.to(overlayRef, {
    opacity: 1,
  })
}
