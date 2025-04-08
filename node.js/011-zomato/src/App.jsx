import React from 'react'

const App = () => {
  return (
    <>
      <div className='h-[100vh] w-full relative'>
        <div className='h-full'>
          <video
            className='w-full h-full object-cover'
            src='https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4' autoPlay loop playsInline muted></video>
        </div>
        <div className='px-3 py-3 absolute w-full h-full bg-[linear-gradient(to_top,#0d0606ab,#b6afaf29)] top-0 left-0 text-white flex items-center lg:justify-center justify-end flex-col'>
          <div className='max-w-[250px]'>
            <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' className='w-full' />
          </div>
          <h2 className='lg:text-[64px] sm:text-[30px] text-[22px] font-[400] text-center leading-[72px] mt-[30px]'>India’s #1 <br /> food delivery app</h2>
          <p className='lg:text-[24px] sm:text-[20px] text-[17px] text-center'>
            Experience fast & easy online ordering <br />
            on the Zomato app
          </p>
          <div className='max-w-[700px] grid grid-cols-2 gap-6 mt-[70px]'>
            <img src='https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png' />
            <img src='https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png' />
          </div>
        </div>
      </div>
      <div className="lg:min-h-[100vh] w-full relative overflow-hidden px-2">
        <div>
          <img src='https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png' className='absolute z-[-1] h-full top-[50px] w left-0 translate-x-[-70%]' />
          <img src='https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png' className='absolute z-[-1] h-full top-[50px] right-0 translate-x-[70%]' />
          <img src='https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png'
            className='absolute z-[-1] top-[10%] left-[30%] w-[50px]' />
          <img src='https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png'
            className='absolute z-[-1] top-[70%] left-[10%] w-[50px]' />
          <img src='https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png'
            className='absolute z-[-1] top-[30%] right-[10%] w-[50px] rotate-[45deg]' />
        </div>
        <div className='max-w-[1170px] m-auto grid lg:grid-cols-[1fr_2fr_1fr] items-center lg:pt-10 sm:pt-8 pt-3'>
          <div className='lg:px-6 px-40'>
            <img src='https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png' className='w-full' />
          </div>
          <div>
            <h2 className='lg:text-[64px] sm:text-[32px] text-[22px] text-[rgb(239,79,95)] font-[600] lg:leading-[72px] sm:leading-[30px] leading-[18px] text-center'>
              Better food for
              more people
            </h2>
            <p className='lg:text-[24px] text-[18px] text-[rgb(89,99,120)] font-[400] lg:leading-[32px] leading-[16px] text-center lg:px-8'>
              For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep
            </p>
          </div>
          <div className='lg:px-6 px-10 grid lg:grid-cols-1 grid-cols-2'>
            <img src='https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png' className='w-full' />
            <img src='https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png' className='w-full lg:mt-40' />
          </div>
        </div>
        <div className='max-w-[992px] m-auto grid lg:grid-cols-3 items-center shadow-[0_1px_5px_0.6px_#00000029] rounded-4xl py-3 bg-white' >
          <div className='grid grid-cols-[3fr_1fr] px-10 lg:border-r-1 border-r-0 lg:border-b-0 border-b-1 border-[grey]'>
            <div>
              <h5 className='lg:text-[36px] text-[28px] font-[700] text-[rgb(89,99,120)]'>3,00,000+</h5>
              <p className='text-[18px] text-[rgb(118,124,143)] font-[400]'>restaurants</p>
            </div>
            <div className='pe-2 grid items-center'>
              <img src='https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png' className='w-full' />
            </div>
          </div>
          <div className='grid grid-cols-[3fr_1fr] px-10 lg:border-r-1 border-r-0 lg:border-b-0 border-b-1 border-[grey]'>
            <div>
              <h5 className='lg:text-[36px] text-[28px] font-[700] text-[rgb(89,99,120)]'>3,00,000+</h5>
              <p className='text-[18px] text-[rgb(118,124,143)] font-[400]'>restaurants</p>
            </div>
            <div className='pe-2 grid items-center'>
              <img src='https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png' className='w-full' />
            </div>
          </div>
          <div className='grid grid-cols-[3fr_1fr] px-10'>
            <div>
              <h5 className='lg:text-[36px] text-[28px] font-[700] text-[rgb(89,99,120)]'>3,00,000+</h5>
              <p className='text-[18px] text-[rgb(118,124,143)] font-[400]'>restaurants</p>
            </div>
            <div className='pe-2 grid items-center'>
              <img src='https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png' className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App