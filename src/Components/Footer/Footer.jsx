import React from 'react'
import icons from "../../assets/foot-i.svg"
const Footer = () => {
  return (
      <footer className='bg-[#A5C926] w-[100%] h-[210px] mt-[120px]'>
          <div className="container mx-auto">
              <div className='text-white'>
                  <div className='flex justify-between py-[47px] items-center'>
                      <p className='text-[21px] '>ToyStore</p>
                      <ul className='flex gap-7 text-[14px]'>
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>Delivery</li>
                        <li>Contacts</li>
                      </ul>
                      <img src={icons} alt="" />
                  </div>
                  <hr className='border-gray-300' />
                  <div className='flex justify-between h-[81px] items-center '>
                      <p className='text-[11px]'>
                          Created with love by Elastic Themes                          
                      </p>
                      <ul className='list-disc flex gap-5 text-[11px]'>
                          Powered By Webflow
                          <li>Style Guide</li>
                          <li>Licensing</li>
                      </ul>
                  </div>
              </div>
          </div>
    </footer>
  )
}

export default Footer