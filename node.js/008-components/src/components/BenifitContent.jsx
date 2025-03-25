import React from 'react'

const BenifitContent = ({ icon, title, buttonContent }) => {
    return (
        <div className=''>
            <div className='inline-block'>
                <img src={icon} />
            </div>
            <div>
                <p className='capitalize text-[45px] font-[700] my-[25px] inline-block max-w-[500px]'>
                    {title}
                </p>
            </div>
            <div className=''>
                <button
                    className='bg-[#315399] text-white font-[700] p-[18px_40px] hover:bg-white hover:text-[rgb(49,83,153)] 
                            cursor-pointer rounded duration-300 border border-[rgb(49,83,153)]'
                >{buttonContent}</button>
            </div>
        </div>
    )
}

export default BenifitContent
