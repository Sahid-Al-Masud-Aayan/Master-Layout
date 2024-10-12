
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Homepage from './Pages/Homepage'
import Story from './Pages/Story'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Help from './Pages/Help'
import LayoutTwo from './Layout/LayoutTwo'
import Establishment from './Pages/Establishment'
import Goals from './Pages/Goal'
import About from './Pages/About'
import Contact from './Pages/Contact'
import LayutThree from './Layout/LayutThree'

function App() {
const mainRouter =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
   </Route>
   <Route path='/menusecond' element={<LayoutTwo/>}>
      <Route index element={<Story/>}/>
      <Route path='/menusecond/establish' element={<Establishment/>}/>
      <Route path='/menusecond/goal' element={<Goals/>}/>
    </Route>
    <Route path='/third' element={<LayutThree/>}>
      <Route index element={<Help/>}/>
      <Route path='/third/about' element={<About/>}/>
      <Route path='/third/conatct' element={<Contact/>}/>
    </Route>
    </Route>
  )
)

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
