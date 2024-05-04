import React from 'react'
import Card from '../components/Card'

const TestCard = () => {

  const priority = 'low';
  return (
    <div className='flex flex-col space-y-10 mt-[10%] ml-[10%]'>
        <Card priority={priority}></Card>
        <Card priority={priority}></Card>
    </div>
  )
}

export default TestCard