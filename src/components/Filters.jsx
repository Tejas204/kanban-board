import React from 'react'

const Filters = () => {
  return (
    <div className='flex flex-col gap-y-9 w-[21%] bg-[color:var(--filter-bg--color)] h-screen px-14 py-5'>
      {/* Title */}
      <div className='flex flex-row gap-10 items-center'>
          <p className='text-2xl text-[color:var(--primary-text--color)]'>Filter tasks</p>
      </div>

      {/* Filters */}
      <div className='flex flex-col'>
        <form className='flex flex-col gap-y-6'>
          {/* State */}
          <select name='state' id='state' className='p-3 w-60 text-lg rounded-md bg-[color:var(--filter-bg--color)] border-[0.1rem] text-[color:var(--primary-text--color)]'>
            <option value='draft'>Draft</option>
            <option value='ready'>Ready</option>
            <option value='wip'>Work in progress</option>
            <option value='review'>Review</option>
            <option value='complete'>Complete</option>
          </select>

          {/* Assigned to */}
          <select name='assignment' id='assignment' className='p-3 w-60 text-lg rounded-md bg-[color:var(--filter-bg--color)] border-[0.1rem] text-[color:var(--primary-text--color)]'>
            <option value='Tejas'>Tejas</option>
            <option value='Abhinav'>Abhinav</option>
            <option value='Advait'>Advait</option>
            <option value='Omkar'>Omkar</option>
            <option value='Dhiren'>Dhiren</option>
          </select>

          {/* Priority */}
          <select name='priority' id='priority' className='p-3 w-60 text-lg rounded-md bg-[color:var(--filter-bg--color)] border-[0.1rem] text-[color:var(--primary-text--color)]'>
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
          </select>

          {/* Due Date */}
          <select name='priority' id='priority' className='p-3 w-60 text-lg rounded-md bg-[color:var(--filter-bg--color)] border-[0.1rem] text-[color:var(--primary-text--color)]'>
            <option value='Yesterday'>Yesterday</option>
            <option value='Today'>Today</option>
            <option value='Tomorrow'>Tomorrow</option>
          </select>

          {/* Buttons - Reset and Apply */}
          <div className='flex flex-row gap-x-7'>
            <button className='px-8 py-3 text-lg rounded-md hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--blue)] bg-[color:var(--user-icon--bg-color--blue)] transition ease-in-out delay-100'>
              Reset
            </button>
            <button className='px-8 py-3 text-lg rounded-md hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--lavender)] bg-[color:var(--user-icon--bg-color--lavender)] transition ease-in-out delay-100'>
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filters