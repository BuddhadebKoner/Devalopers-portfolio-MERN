import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Index (){

   return(

     <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     </>

   )

}