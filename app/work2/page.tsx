export default function Page() {
  return (
    <div className='overflow-x-hidden'>
      <div className='relative flex overflow-x-hidden'>
        <div className='py-12 animate-marquee whitespace-nowrap'>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
        </div>

        <div className='absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
          <span className='mx-4 text-4xl'>YOUWE</span>
        </div>
      </div>
    </div>
  )
}
