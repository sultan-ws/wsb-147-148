import React from 'react'
import BenifitImg from './BenifitImg'
import BenifitContent from './BenifitContent'

const BenifiteSection = () => {
    return (
        <div className='bg-[url(https://www.dsigndpo.com/images/box-dots.svg)] bg-no-repeat bg-right-bottom pb-[100px]'>
            <div className='container p-[100px]'>
                <div className='grid grid-cols-2 gap-[50px] items-center'>
                    <BenifitImg
                        src='https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg' />

                    <div className='text-start'>
                        <BenifitContent
                            icon='https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg'
                            title=' Many options in all designs'
                            buttonContent='Explore Designs'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenifiteSection
