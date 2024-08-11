import React from "react";
import { Outlet,ScrollRestoration } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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