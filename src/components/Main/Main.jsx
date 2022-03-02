import React from 'react'
import Categories from '../Categories/Categories'
import Footer from '../Footer/Footer'
import Nav from '../Header/Nav/Nav'
import Products from '../Products/Products'

export default function Main() {
  return (
    <>
      <Nav />
      <Categories />
      <Products />
      <Footer />
    </>
  )
}
