import Hero from '@/src/ui/components/Hero'

export default function Home() {
  return (
    <>
      <Hero
        title='Edugrade'
        src='/images/03.jpg'
        description='Java, Spring, REST APIs, Postman, Azure DevOps, MySql and databases.'
      />
      <p className='m-5 font-thin'>
        At EduGrade I studied a range of technical subjects like Java, object
        oriented programming, REST APIs and databases. I also learned about
        DevOps, design patterns and software architecture. In addition, I gained
        knowledge in agile methodologies like Scrum, as well as Java web
        services and software testing.
        <br />
        <br />
        Visit my{' '}
        <a
          href='https://github.com/Nico1ina'
          target='_blank'
          className='underline hover:no-underline'
        >
          Github
        </a>{' '}
        page to see some of the projects I&apos;ve worked on during my studies.
      </p>
      <div className='flex justify-end items-right p-5 w-full'>
        <a
          href='/work'
          className='hover:underline text-black font-light pb-2 text-sm'
        >
          [ Back to projects page ]
        </a>
      </div>
    </>
  )
}
