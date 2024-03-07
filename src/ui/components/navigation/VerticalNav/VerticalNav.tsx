const VerticalNav = () => {
  return (
    <div
      className='fixed bottom-4 right-0'
      style={{
        transform: 'rotate(90deg)',
      }}
    >
      © 2024 / &nbsp;
      <a href='/' className='hover:underline font-mono text-[#1a1818]'>
        Nicolina Larsson
      </a>
    </div>
  )
}

export default VerticalNav
