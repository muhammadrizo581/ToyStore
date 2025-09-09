import React from 'react'
import toy1 from "../../assets/toy1.png"
import toy2 from "../../assets/toy2.png"
import toy3 from "../../assets/toy3.png"
import toy4 from "../../assets/toy4.png"

const List1 = () => {
  return (
    <section>
          <div className="container mx-auto">
              <div className='flex justify-between'>
                  <h3 className='font-sans text-[26px]'>Stuffed Animals</h3>
                  <a href="#">
                    See All Toys ->
                      <hr className='border-gray-400 '/>
                  </a>
              </div>
              <br />
              <hr className='border-gray-400 ' />   
              <div className='mt-[70px] grid grid-cols-4 gap-4'>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy1} alt="" />
                      <strong>Teddy Bear</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 30.00 USD
                      </button>
                  </div>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy2} alt="" />
                      <strong>Mega Plush Toy</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 38.00 USD
                      </button>
                  </div>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy3} alt="" />
                      <strong>Cute Dog</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 24.00 USD
                      </button>
                  </div>
                  <div className='flex flex-col bg-white items-center gap-[15px] px-[44px] py-[33px] rounded-[16px]'>
                      <img src={toy4} alt="" />
                      <strong>Little Friend</strong>
                      <button className='w-[92px] h-[24px] text-[12px]  bg-[#A5C926] text-white rounded-[24px]'>
                          $ 27.00 USD
                      </button>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default List1