import React from 'react'
import Jira from '../assets/Jira.png';
import Kanbanize from '../assets/Kanbanize.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row justify-between sticky top-0 z-50 w-full items-center shadow-lg bg-[color:var(--header-bg--color)]'>
        {/* Logo */}
        <Link className='flex flex-row gap-x-5 p-4 ml-[2%] text-2xl items-center font-bold text-[color:var(--primary-text--color)]' to='/'>
            <img src={Kanbanize} className='h-10 w-10'></img>
            <p>Kanbanize</p>
        </Link>
        {/* Navbar Items */}
        <div className='p-4 mr-[7%]'>
            <ul className='flex flex-row gap-x-16 font-semibold text-xl text-[color:var(--secondary-text--color)]'>
                <Link className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer' to='/'>Home</Link>
                <Link className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer' to='/card' >Features</Link>
                <Link className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer' to='/login' >Login</Link>
                <Link className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer' to='/register' >Register</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header;