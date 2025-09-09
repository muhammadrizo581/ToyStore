import React from 'react'
import icons from "../../assets/Frame.svg"

const SubHeader = () => {
  return (
      <section className='bg-[#A5C926] w-[100%] h-[32px]'>
        <div className="container mx-auto h-[100%]">
            <div className='flex justify-between h-[100%]'>
                <div className='flex gap-4 text-white h-[100%]  text-[11px] items-center '>
                  <p>Call Us: +1 213 974-5898</p>
                  <p>Email: toystore@template.com</p>
                </div>
              <img src={icons} alt="" />
            </div>
        </div>
    </section>
  )
}

export default SubHeader