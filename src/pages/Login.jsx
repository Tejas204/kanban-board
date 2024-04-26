import React from 'react'

const Login = () => {
  return (
    <div className='flex h-[100%] w-[100%] justify-center items-center'>
      {/* Login Form */}
        <div className='flex flex-col rounded-md mt-[3%] py-10 px-16 gap-y-14 shadow-xl bg-[color:var(--card-bg--color)]'>
          <div className='flex flex-col items-center gap-y-2'>
            <p className='text-4xl'>Get Started</p>
            <p className='text-xl'>Free for users, no credit card needed</p>
          </div>
          
          <form className='flex flex-col gap-y-5'>
            <input className='p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg' type='text' placeholder='Email' ></input>
            <input className='p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg' type='password' placeholder='Password' ></input>
            <button className='p-4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md' type='button' >Log In</button>
          </form>
          
          <div className='flex flex-row justify-center items-center gap-x-2'>
            <hr className='w-24 bg-[color:var(--secondary-text--color)]'></hr>
            <p className='text-lg font-semibold'>Or sign in with</p>
            <hr className='w-24'></hr>
          </div>
          
          <div className='grid grid-cols-2 gap-x-3 gap-y-2 '>
            <div className='p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-2xl hover:bg-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer'>Google</div>
            <div className='p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-2xl hover:bg-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer'>Microsoft</div>
            <div className='p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-2xl hover:bg-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer'>Apple</div>
            <div className='p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-2xl hover:bg-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer'>Slack</div>
          </div>
        </div>
    </div>
  )
}

export default Login