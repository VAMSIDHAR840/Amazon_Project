import React, { useState } from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Child from './Components/Child'
import Cart from './Components/Cart'
import Render from './Components/Render'
import Price from './Components/Price'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Child/>
      <Routes>
        <Route element={<Render/>} path='/a'/>
        <Route element={<Cart/>} path='/b'/>
        {/* <Route path='/a/:id'/> */}
        <Route element={<Price/>} path='/price' />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
