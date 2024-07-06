import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes,Route, RouterProvider} from 'react-router-dom'
import router from './assets/routes'

function App(){
  return(
    <RouterProvider router = {router}/>
  )
}




export default App
// inline internal