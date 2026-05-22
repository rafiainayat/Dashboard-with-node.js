import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from '../Pages/Signup'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'

import DashboardLayout from '../components/DashboardLayout'

const AppRouter = () => {
  return (
        <BrowserRouter>
    <Routes>
  <Route path='/'  element={<Home/>}/>
  <Route path='/about' element={<DashboardLayout><About/></DashboardLayout>}/>
  <Route path='/dashboard' element={<DashboardLayout><Dashboard/></DashboardLayout>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter