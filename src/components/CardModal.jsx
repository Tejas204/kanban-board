import React from 'react'

const CardModal = () => {

  const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>


  return (
    // Parent
    <div className='h-screen w-screen flex justify-center mx-auto rounded'>
        {/* Modal */}
        <div className='flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm  bg-white/25'>

            {/* Title */}
            <div className='flex flex-row justify-between'>
                <p className='text-2xl font-semibold'>
                    Create a card
                </p>
                <button>
                    {closeIcon}
                </button>
            </div>

            {/* Form */}
            <div className='flex flex-col'>
                <form className='flex flex-col justify-center gap-y-10'>
                    <table>
                        <tbody>
                            <tr>
                                <td className='text-xl'>Enter a title</td>
                                <td><input type='text' className='p-4 w-full border-[0.1rem] text-lg rounded-md mb-2'></input></td>
                            </tr>
                            <tr>
                                <td className='text-xl'>Short Description</td>
                                <td><input type='text' className='p-4 w-full border-[0.1rem] text-lg rounded-md mb-2'></input></td>
                            </tr>
                            <tr>
                                <td className='text-xl'>Assigned to</td>
                                <td>
                                    <select name='newCardPriority' id='newCardPriority' className='p-4 w-full border-[0.1rem] text-lg rounded-md mb-2'>
                                        <option value='priority'>Tejas</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-xl'>Priority</td>
                                <td>
                                    <select name='newCardPriority' id='newCardPriority' className='p-4 w-full border-[0.1rem] text-lg rounded-md mb-2'>
                                        <option value='priority'>Priority</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-xl'>Short Description</td>
                                <td><input  type="date" id="dueDate" name="dueDate" className='p-4 w-full border-[0.1rem] text-lg rounded-md mb-2'></input></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='flex flex-row justify-start gap-x-10'>
                        <button type='submit' className='p-4 w-1/4 bg-[color:var(--board-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md border-4 hover:ring-2 ring-[color:var(--background-white)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out'>Cancel</button>
                        <button type='submit' className='p-4 w-1/4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md hover:ring-2 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out'>Submit</button>
                    </div>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default CardModal