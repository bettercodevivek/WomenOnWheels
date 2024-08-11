import React from "react";
import { Outlet,ScrollRestoration } from "react-router-dom";
import Navbar from './Client/Components/Navbar'
import Footer from './Client/Components/Footer'

 const Layout = () =>{
    return(
     <>
     <ScrollRestoration/>
     <Navbar/>
     <Outlet/>
     <Footer/>
     </>
    );
}

export default Layout;