import React from 'react'

const ToTask = ({task, handleCheck, index}) => {
    return (
        <div className='grid grid-cols-[1fr_7fr_1fr] my-2'>
            <span>
                <input onClick={(e)=>{handleCheck({index, status: e.target.checked})}}
                type='checkbox' checked={task.completed} />
            </span>
            <p
                className={`capitalize ${!task.completed ? 'text-black' : 'text-[gray] line-through'}`}
            >{task.title}</p>
            <button className='bg-red-400 text-[12px] rounded text-white cursor-pointer py-1 px-2'>Delete</button>
        </div>
    )
}

export default ToTask
