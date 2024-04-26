import React from 'react'
import Jira from '../assets/Jira.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center shadow-lg bg-[color:var(--header-bg--color)]'>
        {/* Logo */}
        <div className='flex flex-row gap-x-5 p-4 ml-[7%] text-2xl font-bold text-[color:var(--primary-text--color)]'>
            <img src={Jira} className='h-10 w-10'></img>
            <p>Kanbanize</p>
        </div>
        {/* Navbar Items */}
        <div className='p-4 mr-[7%]'>
            <ul className='flex flex-row gap-x-16 font-semibold text-xl text-[color:var(--secondary-text--color)]'>
                <Link to='/' className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Home</Link>
                <Link to='/' className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Features</Link>
                <Link to='/login' className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Login</Link>
                <Link to='/register' className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Register</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header;