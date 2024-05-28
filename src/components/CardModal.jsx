import React from 'react'

const CardModal = () => {
  return (
    // Parent
    <div className='h-screen w-screen flex justify-center mt-40 mx-auto'>
        {/* Modal */}
        <div className='flex flex-col border-2 w-1/2 h-1/2'>

            {/* Title */}
            <div className='flex flex-row justify-between'>
                <p>
                    Create a card
                </p>
                <button>
                    Close
                </button>
            </div>

            {/* Form */}
            <div className='flex flex-col'>
                <form className='flex flex-col justify-center'>
                    <input type='text' placeholder='Enter title'></input>
                    <input type='text' placeholder='Enter short description'></input>
                    <select name='newCardPriority' id='newCardPriority'>
                        <option value='priority'>Priority</option>
                    </select>
                    <input  type="date" id="dueDate" name="dueDate" placeholder='Enter due date'></input>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default CardModal