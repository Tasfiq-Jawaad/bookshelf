import React from 'react'
import IconCard from './IconCard'

const IconCardContainer = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 sm:gap-7 lg:gap-12 xl:gap-16 2xl:w-4/5 m-auto'>
        <IconCard/>
        <IconCard/>
        <IconCard/>
        <IconCard/>
        <IconCard/>
        <IconCard/>
    </div>
  )
}

export default IconCardContainer