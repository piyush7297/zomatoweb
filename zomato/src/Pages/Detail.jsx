import React from 'react'
import Header from '../Common/Header'
import Dishes from '../Component/Dishes'

export default function Detail() {
  return (
    <>
        <div className='sticky-top bg-white top-0 mb-4  '>
        <Header/>
        </div>
        <Dishes/>
    </>
  )
}
