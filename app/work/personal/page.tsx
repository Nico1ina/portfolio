import Hero from '@/src/ui/components/Hero'

export default function Home() {
  return (
    <>
      <Hero
        title='Personal Website'
        src='/images/03.jpg'
        description='React, TypeScript, NextJS, Tailwind CSS, SCSS.'
      />
      <p className='m-5 font-thin'>
        My portfolio web app is a personal project built during my free time.
        It&apos;s showcasing my skills in React, TypeScript and Tailwind CSS.
        It&apos;s designed with a focus on reusability, accessibility, and
        user-friendliness to ensure a smooth and engaging experience. The
        styling is a reflection of my personal taste and personality, aiming to
        be both visually appealing and functional.
      </p>
    </>
  )
}
