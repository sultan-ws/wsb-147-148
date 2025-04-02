import React from 'react'

const SideNav = ({left}) => {
    console.log(left)
  return (
    <div className={`fixed top-0 left-[${left}%] duration-300 h-full min-w-[300px] bg-red-200 lg:hidden`}>
      
    </div>
  )
}

export default SideNav
