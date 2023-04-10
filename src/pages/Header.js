import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react'
import manageUser from '../assets/user.png';
import removeUser from '../assets/remove-user.png';
import reset from '../assets/circular-arrows.png'
import arrow from '../assets/arrow.png';
import Modal from './Modal';

const Header = (props) => {
  return (
    <>
      <div className="grid grid-cols-4 align-center h-12 bg-white">
        <div className=' grid justify-items-center'>
          {/* <a href="https://www.flaticon.com/free-icons/add" title="add icons"> */}
          {/* <img src={addUser} /> */}
          {/* <Image src={addUser} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image> */}
          <Modal users={props.cards} manageUser={manageUser}></Modal>
          {/* </a> */}
        </div>
        {/* <div className=' grid justify-items-center'>
          <Image src={removeUser} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
        </div> */}
        <div className=' grid justify-items-center'>
          <Image src={arrow} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)' }} alt="add user"></Image>
        </div>
        <div className=' grid justify-items-center'>
          <Image src={arrow} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
        </div>
        <div className=' grid justify-items-center'>
          <Image src={reset} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
        </div>
      </div>
    </>
  )
}

export default Header;