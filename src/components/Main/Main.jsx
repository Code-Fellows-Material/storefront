import React from 'react'
import Catagories from '../Categories/Catagories'
import Footer from '../Footer/Footer'
import Nav from '../Header/Nav/Nav'
import Products from '../Products/Products'

export default function Main() {
  return (
    <>
      <Nav />
      <Catagories />
      <Products />
      <Footer />
    </>
  )
}
