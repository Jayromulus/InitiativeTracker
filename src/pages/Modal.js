import { useState, useEffect } from "react";
import Image from 'next/image';
import close from '../assets/close.png';
import sort from '../assets/sort.png';
import addUser from '../assets/add-user.png';
import Fade from "./Fade";

export default function Modal({ manageUser, users, updateCardList }) {
  const [showModal, setShowModal] = useState(false);

  const organizeByInitiative = () => {
    let tempList = [...users];
    tempList.sort((a, b) => a.initiative < b.initiative);
    // console.log(tempList);
    updateCardList(tempList);
    setShowModal(false);
  }

  return (
    <>
      <button
        className="text-white rounded hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center">
          <Image className="invert object-contain" src={manageUser} style={{ maxWidth: '2.5rem' }} alt="add user"></Image>
        </div>
      </button>
      <Fade show={showModal}>
        (
        <>
          <div
            style={{opacity:  showModal ? "1" : "0" }}
            className="bg-violet-700 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-violet-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* REPLACE BELOW:
                    list out each individual and have an option to delete them from the list or edit their "initiative value", bottom of the modal has a button to sort the list by "initiative value" and also a  button to add a new user with some inputs for name and "initiative value". only sort when the button to sort is pressed
                  */}
                  <p className="text-white my-4 overflow-y-scroll text-lg leading-relaxed" style={{ height: "36rem" }}>
                    list out each individual and have an option to delete them from the list or edit their initiative value, bottom of the modal has a button to sort the list by initiative value and also a  button to add a new user with some inputs for name and initiative value. only sort when the button to sort is pressed
                    list out each individual and have an option to delete them from the list or edit their initiative value, bottom of the modal has a button to sort the list by initiative value and also a  button to add a new user with some inputs for name and initiative value. only sort when the button to sort is pressed
                    list out each individual and have an option to delete them from the list or edit their initiative value, bottom of the modal has a button to sort the list by initiative value and also a  button to add a new user with some inputs for name and initiative value. only sort when the button to sort is pressed
                    list out each individual and have an option to delete them from the list or edit their initiative value, bottom of the modal has a button to sort the list by initiative value and also a  button to add a new user with some inputs for name and initiative value. only sort when the button to sort is pressed
                    list out each individual and have an option to delete them from the list or edit their initiative value, bottom of the modal has a button to sort the list by initiative value and also a  button to add a new user with some inputs for name and initiative value. only sort when the button to sort is pressed
                  </p>
                </div>
                {/*footer*/}
                <div className="grid grid-cols-3 items-center justify-end p-6 pt-1 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase px-6 py-7 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Image src={close} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                  </button>
                  <button
                    className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => organizeByInitiative()}
                  >
                    <Image src={sort} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Image src={addUser} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )
      </Fade>
    </>
  );
}