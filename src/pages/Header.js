import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react'
import manageUser from '../assets/profile.png';
import removeUser from '../assets/remove-user.png';
import reset from '../assets/circular-arrows.png'
import arrow from '../assets/arrow.png';
import Modal from './Modal';

const Header = ({ cards, updateCardList, showModal, setShowModal }) => {
  return (
    <>
      <div className="grid grid-cols-3 align-center h-16 bg-violet-700">
        <div className=' grid justify-items-center'>
          {/* <a href="https://www.flaticon.com/free-icons/add" title="add icons"> */}
          {/* <img src={addUser} /> */}
          {/* <Image src={addUser} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image> */}
          <Modal updateCardList={updateCardList} users={cards} showModal={showModal} setShowModal={setShowModal} manageUser={manageUser}></Modal>
          {/* </a> */}
        </div>
        {/* <div className=' grid justify-items-center'>
          <Image src={removeUser} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
        </div> */}
        {
          !showModal ? (
            <>
              <div className=' grid justify-items-center'>
                <div className="flex items-center">
                  <Image className="invert object-contain" src={arrow} style={{ maxWidth: '2.5rem', paddingTop: '.25rem', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)' }} alt="add user"></Image>
                </div>
              </div>
              <div className=' grid justify-items-center'>
                <div className="flex items-center">
                  <Image className="invert object-contain" src={arrow} style={{ maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
                </div>
              </div>
            </>
          ) : null
        }
        {/* <div className=' grid justify-items-center'>
        <Image src={reset} style={{ objectFit: 'contain', width: '40%', maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
      </div> */}
      </div>
    </>
  )
}

export default Header;