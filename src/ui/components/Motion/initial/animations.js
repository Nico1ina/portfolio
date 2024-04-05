import { gsap } from 'gsap'

gsap.defaults({
  duration: 2,
  ease: 'expo.inOut',
})

export const introAnimation = (centerImageWrapperRef) => {
  gsap.fromTo(
    [centerImageWrapperRef],
    {
      opacity: 0,
      x: 160,
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.02,
      duration: 3,
      delay: 0.2,
      ease: 'expo.out',
    },
  )
}

export const scaleCenterImage = (centerImageWrapperRef, centerImageRef) => {
  const tl = gsap.timeline()

  tl.to(centerImageWrapperRef, {
    width: '100%',
    height: '100vh',
  }).to(
    centerImageRef,
    {
      scale: 1,
    },
    0,
  )

  return tl
}

export const moveUpTitle = (centerImageTitleRef) => {
  return gsap.to(centerImageTitleRef, {
    yPercent: -100,
  })
}
