import React from 'react'
import Footer from './Footer.js';
import Header from './Header.js';
const Layout = ({children}) => {
  return (
    <>
    <Header/>
      <main style={{ minHeight:"80vh" }}>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout
