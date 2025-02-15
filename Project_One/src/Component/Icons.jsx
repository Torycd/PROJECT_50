// import React from 'react'
import Logo from "../assets/images/logo.svg"
import Facebook from "../assets/images/logo.svg"
import Twitter from "../assets/images/logo.svg"
import Instagram from "../assets/images/logo.svg"
import Pinterest from "../assets/images/logo.svg"

const Icons = () => {
  return (
    <div className="flex justify-between">
        <img src={Logo} alt="logo"  className="" />
        <div className="flex justify-between">
            <img src={Facebook} alt="icons"  />
            <img src={Twitter} alt="icons"  />
            <img src={Instagram} alt="icons"  />
            <img src={Pinterest} alt="icons"  />
            
        </div>
    </div>
  )
}

export default Icons