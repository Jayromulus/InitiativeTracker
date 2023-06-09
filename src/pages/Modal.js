import { useState, useEffect } from "react";
import Image from 'next/image';
import AddPlayer from "./AddPlayer";
import Fade from "./Fade";
import close from '../assets/close.png';
import sort from '../assets/sort.png';
import clearList from '../assets/brush.png';
import addUser from '../assets/add-user.png';
import remove from '../assets/bin.png';
import change from '../assets/edit.png';

export default function Modal({ manageUser, users, updateCardList, showModal, setShowModal }) {
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  // const [editPlayerTarget, setEditPlayerTarget] = ustState(0);

  // const organizeByInitiative = () => {
  //   let tempList = [...users];
  //   tempList.sort((a, b) => a.initiative < b.initiative);
  //   updateCardList(tempList);
  //   setShowModal(false);
  // }

  const clearPlayerList = () => {
    updateCardList([]);
    // are you sure you want to close list????
    // setShowModal(false);
  };

  const removeUser = (index) => {
    const array = [...users];
    array.splice(index, 1);
    updateCardList(array);
  }

  return (
    <>
      {
        !showModal ? (
          <button
            className="text-white rounded hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <div className="flex items-center">
              <Image className="invert object-contain" src={manageUser} style={{ maxWidth: '2.5rem' }} alt="add user"></Image>
            </div>
          </button>
        ) : null
      }
      {
        !showAddPlayer ? (
          <Fade show={showModal}>
            <div className="bg-violet-700 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="bg-violet-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                  {/*body*/}
                  <div className="relative p-6 pt-5 flex-auto">
                    <div className="text-white overflow-y-scroll text-lg leading-relaxed" style={{ height: "64vh", width: '90vw', maxWidth: '42rem' }}>
                      {
                        users?.map((player, index) => {
                          return (
                            <div className="grid grid-cols-4 md:grid-cols-7 w-full bg-white text-black my-2 rounded p-1 pt-4 md:text-xl text-lg text-justify" key={index}>
                              <div className="col-span-2 md:col-span-4 grid grid-cols-4 pt-4 pl-3">
                                <div className="text-left col-span-3">
                                  {player.name}
                                </div>
                                <div className="flex ml-auto">
                                  <Image className="object-contain mb-8" src={change} style={{ maxWidth: '1.75rem' }} alt="add user"></Image>
                                </div>
                              </div>
                              <div className="md:col-span-2 grid grid-cols-2 pt-4 pl-5">
                                <div className="text-right">
                                  {player.initiative}
                                </div>
                                <div className="flex ml-auto p-auto">
                                  <Image className="object-contain mb-8" src={change} style={{ maxWidth: '1.75rem' }} alt="add user"></Image>
                                </div>
                              </div>
                              <div className="md:col-span-1">
                                <button
                                  className="flex bg-red-500 text-white active:bg-red-600 font-bold uppercase p-4 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mb-2 ease-linear transition-all duration-150 ml-auto mr-3"
                                  type="button"
                                  onClick={() => removeUser(index)}
                                >
                                  <Image src={remove} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                                </button>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="grid grid-cols-3 items-center justify-end p-6 pt-1">
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold mr-2 ml-2 uppercase px-4 py-7 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <Image src={close} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                    </button>
                    <button
                      className="bg-amber-500 text-white active:bg-amber-600 font-bold mr-2 ml-2 uppercase text-sm px-4 py-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => clearPlayerList()}
                    >
                      <Image src={clearList} className="mx-auto invert object-contain" style={{ maxWidth: '2.5rem' }} alt="add user"></Image>
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold mr-2 ml-2 uppercase text-sm px-4 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowAddPlayer(true)}
                    >
                      <Image src={addUser} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ) :
          <AddPlayer users={users} updateCardList={updateCardList} showAddPlayer={showAddPlayer} setShowAddPlayer={setShowAddPlayer}></AddPlayer>
      }
    </>
  );
}