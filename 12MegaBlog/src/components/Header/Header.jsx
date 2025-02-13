import React from 'react'
import authService from '../../appwrite/auth'

function Header() {
  return (
    <div>
      hello 
    <button className='bg-blue-500 hover:bg-blue-700 text-black
 font-bold py-2 px-4 rounded'
 onClick={authService.logout}>Logout
      </button>
    </div>
  )
}

export default Header
