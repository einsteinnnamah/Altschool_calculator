import React from 'react'

const Header = () => {
  return (
    <div className='head_top flex gap-[200px]'>
        <h1 className='font-bold'>Calc</h1>
        <div className='flex'><p>THEME</p><button>Toggle</button></div>
    </div>
  )
}

export default Header