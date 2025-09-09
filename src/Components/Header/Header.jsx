import React from 'react'
import SubHeader from './SubHeader'
import korzinka from "../../assets/korzinka.svg"
const Header = () => {
  return (
      <>
          <SubHeader />
          <section className='h-[72px]'>
              <div className="container mx-auto">
                  <div className='flex justify-between items-center h-[72px]'>
                      <div className='flex text-[#111111] gap-10 items-center'>
                          <h2 className='text-[20px]'>ToyStore</h2>
                          <ul className='flex text-[12px] gap-5'>
                              <li>Catalog</li>
                              <li>Delivery</li>
                              <li>About</li>
                              <li>Contacts</li>
                          </ul>
                      </div>
                      <div className='flex items-center'>
                          <span>Cart</span>
                          <img className='size-8' src={korzinka} alt="" />
                          <div className='size-4 bg-[#A5C926] rounded-full grid place-items-center text-[12px] text-white'>0</div>                          
                      </div>
                  </div>
              </div>
          </section>    
      </>
  )
}

export default Header