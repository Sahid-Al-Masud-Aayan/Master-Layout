import React from 'react'
import Navbar2 from '../Components/Navbar2';
import Story from '../Pages/Story';
import { Outlet } from 'react-router-dom';
const LayoutTwo = () => {
  return (
    <> 
    <Navbar2/>
    <Outlet/>
    </>
  )
}

export default LayoutTwo