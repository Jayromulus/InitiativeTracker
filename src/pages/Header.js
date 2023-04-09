import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react'
import addUser from '../assets/add-user.png';
import removeUser from '../assets/remove-user.png';
import reset from '../assets/circular-arrows.png'
import arrow from '../assets/arrow.png';

const Header = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 align-center h-12 bg-white">
        <div className=' grid justify-items-center'>
          {/* <a href="https://www.flaticon.com/free-icons/add" title="add icons"> */}
          {/* <img src={addUser} /> */}
          <Image src={addUser} style={{ objectFit: 'contain', width: '40%', padding: "4%", paddingTop: '10%' }} alt="add user"></Image>
          {/* </a> */}
        </div>
        <div className=' grid justify-items-center'>
          <Image src={removeUser} style={{ objectFit: 'contain', width: '40%', padding: "4%", paddingTop: '10%' }} alt="add user"></Image>
        </div>
        <div className=' grid justify-items-center'>
          <Image src={arrow} style={{ objectFit: 'contain', width: '40%', padding: "4%", paddingTop: '12%', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)' }} alt="add user"></Image>
        </div>
        <div className=' grid justify-items-center'>
          <Image src={arrow} style={{ objectFit: 'contain', width: '40%', padding: "4%", paddingTop: '12%' }} alt="add user"></Image>
        </div>
        <div className=' grid justify-items-center'>
          <Image src={reset} style={{ objectFit: 'contain', width: '40%', padding: "4%", paddingTop: '12%' }} alt="add user"></Image>
        </div>
      </div>
    </>
  )
}

export default Header;