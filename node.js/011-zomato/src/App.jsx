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
      <div className="min-h-[100vh] w-full relative">
        <img src='https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png' className='absolute h-full top-[50px] w left-0 translate-x-[-70%]' />
        <img src='https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png'  className='absolute h-full top-[50px] right-0 translate-x-[70%]' />

      </div>
    </>
  )
}

export default App
