import React from 'react'
import story from "../../assets/story.png"
import play from "../../assets/play-icon.svg"
const Story = () => {
  return (
      <section>
          <div className="relative">
          <img src={story} alt="" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/40 text-white grid place-items-center">
                  <div className='w-[800px]  text-center flex flex-col gap-5'>
                    <p>About The Shop</p>
                    <h3 className='text-[36px] font-sans'>Watch Our Story</h3>
                    <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
                    <button className='m-auto size-16 bg-[#A5C926] grid place-items-center'>
                      <img src={play} className='w-[15px] h-[18px]' alt="" />
                    </button>
                  </div>
              </div>
              
              
      </div>

    </section>
  )
}

export default Story