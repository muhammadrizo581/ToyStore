import React from 'react'
import teddy from "../../assets/teddy.png"
import woodToy from "../../assets/wood-toy.png"

const ShopNow = () => {
  return (
      <section className='my-[100px]'>
          <div className="container mx-auto w-[100%]">
              <div className='flex gap-6 w-100%'>
                  <div className='bg-[#FFC12C] w-[50%] rounded-[16px] h-[190px] flex gap-[29px]'>
                      <img src={teddy} alt="" className='mt-[-58px]' />
                      <div className='flex flex-col justify-center gap-6'>
                        <h2 className='text-[28px] font-semibold text-white'>Stuffed Animals</h2>
                        <button className='w-[112px] h-[40px] bg-white rounded-[24px] text-[14px] '>Shop now</button>
                      </div>
                  </div>

                  <div className='bg-[#FB416B] w-[50%] rounded-[16px] h-[190px] flex justify-end  gap-[29px]'>
                      <div className='flex flex-col justify-center items-end gap-6'>
                        <h2 className='text-[28px] font-semibold text-white'>Wooden Toys</h2>
                        <button className='w-[112px] h-[40px] bg-white rounded-[24px] text-[14px] '>Shop now</button>
                      </div>
                      <img src={woodToy} alt="" className='mt-[-58px]' />
                  </div>
                </div>
          </div>
          
    </section>
  )
}

export default ShopNow