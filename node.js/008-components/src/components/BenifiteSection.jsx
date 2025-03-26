import React from 'react'
import BenifitImg from './BenifitImg'
import BenifitContent from './BenifitContent'

const BenifiteSection = ({ item, index }) => {
    return (
        <div className='bg-[url(https://www.dsigndpo.com/images/box-dots.svg)] bg-no-repeat bg-right-bottom pb-[100px]'>
            <div className='container p-[100px]'>
                <div className='grid grid-cols-2 gap-[50px] items-center'>
                    <BenifitImg src={item.image} />

                    <div className={`${(index % 2 === 0) ? 'text-start' : 'order-first text-end'}`}>
                        <BenifitContent icon={item.icon} title={item.title} buttonContent={item.buttonContent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenifiteSection
