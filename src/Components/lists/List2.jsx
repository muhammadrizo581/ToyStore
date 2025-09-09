import React from 'react'
import toy5 from "../../assets/toy5.png"
import toy6 from "../../assets/toy6.png"
import toy7 from "../../assets/toy7.png"
import toy8 from "../../assets/toy8.png"

const List2 = () => {
  return (
    <section className='my-[120px]'>
          <div className="container mx-auto">
              <div className='flex justify-between'>
                  <h3 className='font-sans text-[26px]'>Wooden Toys</h3>
                  <a href="#">
                    See All Toys ->
                      <hr className='border-gray-400 '/>
                  </a>
              </div>
              <br />
              <hr className='border-gray-400 ' />   
              <div className='mt-[70px] grid grid-cols-4 gap-4'>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy5} alt="" />
                      <strong>Happy Flower</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 38.00 USD
                      </button>
                  </div>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy6} alt="" />
                      <strong>Lift Machine</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 24.00 USD
                      </button>
                  </div>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy7} alt="" />
                      <strong>Wooden Camera</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 32.00 USD
                      </button>
                  </div>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy8} alt="" />
                      <strong>Little Rabbit</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 16.00 USD
                      </button>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default List2