import React from 'react'
import img from "../../assets/bussiness.png"
import tg from "../../assets/telegram.svg"

const Bussiness = () => {
  return (
      <>
          <section className='my-[120px]'>
              <div className="container mx-auto">
                  <div className='text-center flex flex-col gap-4'>
                      <p className='text-[#A5C926]'>Made for Webflow</p>
                      <h3 className='font-sans text-[31px] max-w-[447px] m-auto'>Simple & Colorful Ecommerce Template for Your Business</h3>
                  </div>

                  <div className='mt-80px flex mt-[80px]'>
                      <div className='flex flex-col w-[50%] gap-5 py-[81px]'>
                          <strong className='text-[31px]'>Available for FREE!</strong>
                          <hr className='w-[70px] border-[#A5C926] border-[1px]' />
                          <p className='max-w-[451px] text-[#999999]'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                          <button className='w-[145px] h-[48px] bg-[#A5C926] rounded-[24px] text-white'>GET IT NOW!</button>
                      </div>
                      <img src={img} alt="" />
                  </div>
                  
                  <div className='w-[1150px] bg-white  mt-[120px] rounded-[16px] p-[47.5px] flex justify-between items-center'>
                      <div className='flex gap-3'>
                        <img src={tg} className='size-[64px]' alt="" />
                        <p className='text-[23px]'>
                            Subscribe to our newsletter
                            <br />
                            & get 
                            <span className='text-[#A5C926]'> 10% discount!</span>
                        </p>                            
                      </div>
                      <div className='flex gap-4'>
                          <div className='border-[#E5E5E5] border-[1px] w-[376px] h-[47px] rounded-[200px] bg-[#F8F8F8]'></div>
                          <div className='bg-[#A5C926] h-[47px] rounded-[200px] w-[120px]'></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Bussiness