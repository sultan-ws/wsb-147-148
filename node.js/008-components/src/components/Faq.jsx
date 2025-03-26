import React from 'react'

const Faq = ({item, isActive, active}) => {
  return (
    <div className='my-2 bg-sky-400 p-3 rounded-2xl'>
      <div className='cursor-pointer' onClick={active}>
        <h2>{item.question}</h2>
      </div>
      <div className={`text-[15px] mt-2 bg-sky-200 p-2 rounded-2xl ${isActive ? '' : 'hidden'}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

export default Faq
