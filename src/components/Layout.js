import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Layout.css'

const Layout = ({children}) => {

    return (
        <>
          <Navbar/>
          <main style={{minHeight:'80vh'}}>{children}</main>
          <Footer/>
        </>
    )
}

export default Layout