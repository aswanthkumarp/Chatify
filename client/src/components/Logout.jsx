import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BiPowerOff} from 'react-icons/bi'
function Logout() {
    const navigate = useNavigate();
    const handleCLick =async () =>{
localStorage.clear()
navigate('/login')

    }
  return (
    <button onClick={handleCLick} className='flex justify-center items-center p-2 border-r-4 border-none bg-green-400 cursor-pointer text-2xl'><BiPowerOff/></button>
  )
}

export default Logout