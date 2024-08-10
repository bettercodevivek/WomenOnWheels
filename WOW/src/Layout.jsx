import React from "react";
import { Outlet,ScrollRestoration } from "react-router-dom";

export const Layout = () =>{
    return(
     <>
     <ScrollRestoration/>
     <Navbar/>
     <Outlet/>
     <Footer/>
     </>
    );
}