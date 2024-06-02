import React from 'react'

const CardModal = () => {

  const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>


  return (
    // Parent
    <div className='h-screen w-screen flex justify-center mt-40 mx-auto rounded'>
        {/* Modal */}
        <div className='flex flex-col border-2 w-2/5 h-1/2 rounded-md px-10 py-4 gap-y-8 backdrop-blur-lg'>

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
                <form className='flex flex-col justify-center gap-y-6'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Enter a title</td>
                                <td><input type='text' className='p-4 w-full text-lg rounded-md '></input></td>
                            </tr>
                            <tr>
                                <td>Short Description</td>
                                <td><input type='text' className='p-4 w-full text-lg rounded-md'></input></td>
                            </tr>
                            <tr>
                                <td>Assigned to</td>
                                <td>
                                    <select name='newCardPriority' id='newCardPriority' className='p-4 w-full text-lg rounded-md'>
                                        <option value='priority'>Tejas</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Priority</td>
                                <td>
                                    <select name='newCardPriority' id='newCardPriority' className='p-4 w-full text-lg rounded-md'>
                                        <option value='priority'>Priority</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Short Description</td>
                                <td><input  type="date" id="dueDate" name="dueDate" className='p-4 w-full text-lg rounded-md'></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default CardModal