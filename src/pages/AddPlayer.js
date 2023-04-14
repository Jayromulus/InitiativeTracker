import { useState, useEffect } from "react";
import Image from 'next/image';
import Fade from "./Fade";
import close from '../assets/close.png';
import sort from '../assets/sort.png';
import addUser from '../assets/add-user.png';
import check from '../assets/check.png';
import change from '../assets/edit.png';

export default function AddPlayer({ users, updateCardList, showAddPlayer, setShowAddPlayer }) {
  const [showModal, setShowModal] = useState(false);
  // const organizeByInitiative = () => {
  //   let tempList = [...users];
  //   tempList.sort((a, b) => a.initiative < b.initiative);
  //   // console.log(tempList);
  //   updateCardList(tempList);
  //   setShowModal(false);
  // }

  const removeUser = (index) => {
    
  }

  return (
    <>
      {/* <button
        className="text-white rounded hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center">
          <Image className="invert object-contain" src={manageUser} style={{ maxWidth: '2.5rem' }} alt="add user"></Image>
        </div>
      </button> */}
      <Fade show={showAddPlayer}>

        {/* <> */}
        <div
          // style={{opacity:  showModal ? "1" : "0" }}
          className="bg-violet-700 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-70 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="bg-violet-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 pt-5 flex-auto">
                {/* REPLACE BELOW:
                    list out each individual and have an option to delete them from the list or edit their "initiative value", bottom of the modal has a button to sort the list by "initiative value" and also a  button to add a new user with some inputs for name and "initiative value". only sort when the button to sort is pressed
                  */}
                <div className="text-white overflow-y-scroll text-lg leading-relaxed" style={{ height: "70vh", width: '90vw', maxWidth: '42rem' }}>
                  {
                    // list out each initiative as a row, with a name, initiative, and delete button. edit buttons next to name and initiative. 7 cols: 4 for name, 2 for initiative, 1 for delete
                    // users?.map((player, index) => {
                    //   return (
                    //     <div className="grid grid-cols-4 md:grid-cols-7 w-full bg-white text-black my-2 rounded p-1 pt-4 md:text-xl text-lg text-justify" key={index}>
                    //       <div className="col-span-2 md:col-span-4 grid grid-cols-4 pt-4 pl-3">
                    //         <div className="text-left col-span-3">
                    //           {player.name}
                    //         </div>
                    //         <div className="flex ml-auto">
                    //           <Image className="object-contain mb-8" src={change} style={{ maxWidth: '1.75rem' }} alt="add user"></Image>
                    //         </div>
                    //       </div>
                    //       <div className="md:col-span-2 grid grid-cols-2 pt-4 pl-5">
                    //         <div className="text-right">
                    //           {player.initiative}
                    //         </div>
                    //         <div className="flex ml-auto p-auto">
                    //           <Image className="object-contain mb-8" src={change} style={{ maxWidth: '1.75rem' }} alt="add user"></Image>
                    //         </div>
                    //       </div>
                    //       <div className="md:col-span-1">
                    //         <button
                    //           className="flex bg-red-500 text-white active:bg-red-600 font-bold uppercase p-4 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mb-2 ease-linear transition-all duration-150 ml-auto mr-3"
                    //           type="button"
                    //           onClick={() => removeUser(index)}
                    //         >
                    //           <Image src={remove} className="mx-auto invert object-contain" style={{ maxWidth: '2rem' }} alt="add user"></Image>
                    //         </button>
                    //       </div>
                    //     </div>
                    //   )
                    // })
                  }

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