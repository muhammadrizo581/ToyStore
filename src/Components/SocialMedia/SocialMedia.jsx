import React from 'react'
import imgs from "../../assets/imgs.png"
const SocialMedia = () => {
  return (
      <section>
          <div className="container mx-auto flex flex-col items-center">
              <div className='mb-[150px] text-center'>
                <p className='text-[#A5C926]'>@ElasticThemes</p>
                <h3 className='font-sans text-[31px]'>We're on Instagram!</h3>                  
              </div>
              <img src={imgs} alt="" className='m-auto' />
              <button className='mt-[76px] w-[173px] h-[48px] bg-[#A5C926] rounded-[24px] text-white'>See More Photos</button>
          </div>
    </section>
  )
}

export default SocialMedia