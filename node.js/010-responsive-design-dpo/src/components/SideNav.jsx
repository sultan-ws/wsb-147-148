import React from 'react'

const SideNav = ({isSideNav}) => {

  return (
    <div className={`fixed top-0 z-[9999]  ${isSideNav ? 'left-0' : 'left-[-100%]'} duration-300 h-full min-w-[60vw] bg-red-200 lg:hidden`}>    
    </div>
  )
}

export default SideNav
