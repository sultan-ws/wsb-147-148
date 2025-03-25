import React from 'react'
import BenifiteSection from '../components/BenifiteSection'

const Home = () => {
    return (
        <div className='bg-[#FEF1F1] py-[40px] text-center'>
            <h1 className='bg-white inline-block p-[20px_40px] rounded-lg text-[35px] font-[700]'>Benifits you get when using</h1>
            <div>
                <BenifiteSection />
                <BenifiteSection />
                <BenifiteSection />
            </div>
        </div>
    )
}

export default Home
