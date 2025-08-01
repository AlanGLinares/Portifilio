import React from 'react'

const Title = ({children}) => {
  return (
    <div>
      <h1 className=' my-[40px] md:my-[70px] relative font-bold text-4xl font-monteserrat text-[#4A4A4A] md:text-6xl text-right pr-[40px] md:pr-[80px]'>{children}
      
      <span className='bg-[#007BFF] absolute before:content-[*] md:h-[30px] md:w-[30px] h-[20px] w-[20px] rounded-[4px]  right-45 -z-30 md:right-80'>

      </span>
      </h1>
    </div>
  )
}

export default Title