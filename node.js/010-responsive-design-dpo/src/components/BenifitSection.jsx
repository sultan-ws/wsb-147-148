import React from 'react'
import BenifitImg from './BenifitImg'
import BenifitContent from './BenifitContent'

const BenifiteSection = ({ item, index }) => {
    return (
        <div className='lg:bg-[url(https://www.dsigndpo.com/images/box-dots.svg)] bg-no-repeat bg-right-bottom lg:pb-[100px]'>
            <div className='container lg:p-[100px] p-[20px] m-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-[50px] items-center'>
                    <BenifitImg src={item.image} />

                    <div className={`text-center ${(index % 2 === 0) ? 'lg:text-start' : 'lg:order-first lg:text-end'}`}>
                        <BenifitContent icon={item.icon} title={item.title} buttonContent={item.buttonContent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenifiteSection