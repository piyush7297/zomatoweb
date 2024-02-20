import React from 'react'
import Header from '../Common/Header'
import Restaurent from '../Component/Restaurent'

export default function Home() {
  return (
    <>  
        <div className='sticky-top bg-white top-0 mb-4'>
          <Header />
        </div>
        <Restaurent/>
    </>
  )
}
