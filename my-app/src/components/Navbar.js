import { UserAuth } from '@/context/AuthContext'
import React from 'react'

const Navbar = () => {
  const { currentUser, logout } = UserAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full py-5 bg-blue-400 flex justify-end px-5'>
      <button onClick={handleLogout} className='bg-white rounded-lg px-5 py-2 hover:bg-gray-200 hover:text-white duration-200 ease-in-out cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar