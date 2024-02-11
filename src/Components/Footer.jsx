import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='flex items-center justify-center p-5 footer'>
      <h6 className='font-semibold'>Copyright ©️ {year}</h6>
    </div>
  )
}

export default Footer
