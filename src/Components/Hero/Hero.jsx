import React from 'react'
import hero from "../../assets/Hero.png"

const Hero = () => {
  return (
      <>
          <section>
              
              <div className='relative '>
                  <img src={hero} alt="" className='h-[640px] w-[100%] object-cover' />
              <div className='absolute flex flex-col items-center gap-[18px] py-[55px] px-[77px] text-center rounded-[16px] top-[50%] left-[50%] w-[507px]  bg-white translate-x-[-50%] translate-y-[-50%] '>
                    <p className='text-[#A5C926] text-[13px]'>Say Hello to ToyStore!</p>
                    <h3 className='font-semibold text-[39px] w-[416px] '>Free Ecommerce Template for Webflow</h3>
                    <button className='bg-[#A5C926] text-[14px] text-white w-[153px] h-[43px] rounded-[24px]'>Open Catalog</button>
              </div>
                  </div>
                
          </section>
      </>
  )
}

export default Hero