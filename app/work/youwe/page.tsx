import Hero from '@/src/ui/components/Hero'

export default function Home() {
  return (
    <>
      <Hero
        title='Youwe'
        src='/images/03.jpg'
        description='React, TypeScript, Tailwind CSS, NextJS, Storybook and Apollo GraphQL.'
      />
      <p className='m-5 font-thin'>
        During my time at Youwe, I was involved with modular Front End
        development focusing on building reactive and digital accessible UI
        components based on Youwes designsystem. I&apos;ve also produced stories
        and documentation in Storybook and work with technologies like React,
        TypeScript, NextJS and Apollo GraphQL.
        <br />
        <br /> My role involved close collaboration in an agile team working
        closely with designers, other developers and product owners.
      </p>
    </>
  )
}
