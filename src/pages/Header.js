import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react'
import manageUser from '../assets/profile.png';
import removeUser from '../assets/remove-user.png';
import reset from '../assets/circular-arrows.png'
import arrow from '../assets/arrow.png';
import combat from '../assets/swords.png';
import sort from '../assets/sort.png';
import Modal from './Modal';

const Header = ({ cards, updateCardList, showModal, setShowModal }) => {
  const organizeByInitiative = () => {
    let tempList = [...cards];
    tempList.sort((a, b) =>  a.initiative > b.initiative ? -1 : a.initiative === b.initiative ? (a.name > b.name ? 1 : -1) : 1);
    updateCardList([]);
    updateCardList(tempList);
    setShowModal(false);
  };

  const startCombat = () => {
    console.log('begin combat');
  };
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
              <div className=' grid justify-items-center' type="button" onClick={() => organizeByInitiative()}>
                <div className="flex items-center">
                  <Image className="invert object-contain" src={sort} style={{ maxWidth: '2.5rem', paddingTop: '.25rem', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)' }} alt="add user"></Image>
                </div>
              </div>
              <div className=' grid justify-items-center' type="button" onClick={() => startCombat()}>
                <div className="flex items-center">
                  <Image className="invert object-contain" src={combat} style={{ maxWidth: '2.5rem', paddingTop: '.25rem', }} alt="add user"></Image>
                </div>
              </div>
            </>
            // <>
            //   <button
            //     className="bg-amber-500 text-white active:bg-amber-600 font-bold mr-2 ml-2 uppercase text-sm px-4 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            //     type="button"
            //     onClick={() => organizeByInitiative()}
            //   >
            //     <Image src={sort} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
            //   </button>
            //   <button
            //     className="bg-amber-500 text-white active:bg-amber-600 font-bold mr-2 ml-2 uppercase text-sm px-4 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            //     type="button"
            //     onClick={() => startCombat()}
            //   >
            //     <Image src={sort} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
            //   </button>
            // </>
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