import React, { useState } from 'react'
import ToTask from '../components/ToTask';

const ToDoList = () => {
    const [toDos, setToDos] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = {
            title: e.target.toDoInp.value,
            completed: false
        };

        const newArr = [...toDos, newTask];
        setToDos(newArr);
        e.target.reset();
    }

    const handleTaskStatus = (data)=>{
        console.log(data)
    }

    return (
        <div>
            <div className='p-10'>
                <div className='text-center'>
                    <h1 className='inline-block bg-amber-200 text-[25px] font-[600] px-[200px] py-2 rounded-2xl'> To-DO List</h1>
                </div>
                <div className='max-w-[500px] m-auto'>
                    <div >
                        <form onSubmit={handleAddTask} method='post'
                            className='grid grid-cols-[7fr_3fr] gap-3 items-center py-3'>
                            <input
                                name='toDoInp'
                                type="text" className="rounded border-[1px] border-gray-400 p-2"
                                placeholder="Enter your task" />
                            <button className='bg-[olive] p-2 cursor-pointer'>Add Task</button>
                        </form>
                    </div>
                    <div>
                        {
                            toDos.length === 0 ? (
                                <p className='text-center text-[20px] font-[600] py-3'>No Task Available</p>
                            ) : (
                                toDos.map((task, index) => (
                                    <ToTask key={index} index={index} task={task} handleCheck={handleTaskStatus} />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ToDoList
