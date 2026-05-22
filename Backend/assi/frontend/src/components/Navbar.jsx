import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import api from '../config/service'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()

  const handleLogout = async () => {
    try {
      await api.get('api/v1/auth/logout')
    } catch (err) {
      console.error(err)
    }
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="text-lg font-semibold text-slate-800">My Dashboard</div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="text-sm text-slate-700">Hello, {user.name}</div>
            <button onClick={handleLogout} className="text-sm bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm text-slate-700">Login</Link>
            <Link to="/register" className="text-sm text-brand font-medium">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar