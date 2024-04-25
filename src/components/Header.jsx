import React from 'react'
import Jira from '../assets/Jira.png';

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
                <li className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Home</li>
                <li className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Features</li>
                <li className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Login</li>
                <li className='hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer'>Register</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;