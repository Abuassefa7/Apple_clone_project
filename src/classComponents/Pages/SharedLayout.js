import React from 'react'
import Header from '../Header/Header'
import FooterSection from '../FooterSection/FooterSection'
import { Outlet } from 'react-router-dom'

function SharedLayout() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <FooterSection/>
    

    </>
  )
}

export default SharedLayout