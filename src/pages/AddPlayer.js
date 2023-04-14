import { useState, useEffect } from "react";
import Image from 'next/image';
import Fade from "./Fade";
import close from '../assets/close.png';
import sort from '../assets/sort.png';
import addUser from '../assets/add-user.png';
import check from '../assets/check.png';
import change from '../assets/edit.png';

export default function AddPlayer({ users, updateCardList, showAddPlayer, setShowAddPlayer }) {
  const removeUser = (index) => {
    
  }

  return (
    <>
      <Fade show={showAddPlayer}>
        <div
          className="bg-violet-700 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-70 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="bg-violet-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 pt-5 flex-auto">
                <div className="text-white overflow-y-scroll text-lg leading-relaxed" style={{ height: "70vh", width: '90vw', maxWidth: '42rem' }}>
                  this is where you add a new user
                </div>
              </div>
              {/*footer*/}
              <div className="grid grid-cols-2 items-center justify-end p-6 pt-1">
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold mr-2 ml-2 uppercase px-4 py-7 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowAddPlayer(false)}
                >
                  <Image src={close} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                </button>
                {/* <button
                  className="bg-amber-500 text-white active:bg-amber-600 font-bold mr-2 ml-2 uppercase text-sm px-4 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => organizeByInitiative()}
                >
                  <Image src={sort} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                </button> */}
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold mr-2 ml-2 uppercase text-sm px-4 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowAddPlayer(false)}
                >
                  <Image src={check} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        {/* </> */}

      </Fade>
    </>
  );
}