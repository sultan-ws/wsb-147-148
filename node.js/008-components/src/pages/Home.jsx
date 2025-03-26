import React from 'react'
import BenifiteSection from '../components/BenifiteSection';

const Home = () => {
    const data = [
        {
            image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
            icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
            title: ' Many options in all designs',
            buttonContent: 'Explore Designs'
        },
        {
            image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
            icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
            title: ' Many options in all designs',
            buttonContent: 'Explore Designs'
        },
        {
            image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
            icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
            title: ' Many options in all designs',
            buttonContent: 'Explore Designs'
        },
        {
            image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
            icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
            title: ' Many options in all designs',
            buttonContent: 'Explore Designs'
        },
        {
            image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
            icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
            title: ' Many options in all designs',
            buttonContent: 'Explore Designs'
        }
    ];
    return (
        <div className='bg-[#FEF1F1] py-[40px]'>
            <div className='text-center'>
                <h1 className='bg-white inline-block p-[20px_40px] rounded-lg text-[35px] font-[700]'>Benifits you get when using</h1>
            </div>
            <div>
                {
                    data.map((item, index) => (
                        <BenifiteSection item={item} index={index} />
                    ))
                }

            </div>
        </div>
    )
}

export default Home
