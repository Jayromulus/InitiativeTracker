import update from 'immutability-helper';
import { useCallback, useState, useEffect } from 'react';
import Container from './Container.js';
import Header from './Header.js';

const baseCards = [
  {
    id: 1,
    name: 'Mortimer',
    initiative: 5
  },
  {
    id: 2,
    name: 'Mara',
    initiative: 20
  },
  {
    id: 3,
    name: 'Hamish',
    initiative: 8
  },
  {
    id: 4,
    name: 'Merlin',
    initiative: 17
  },
  {
    id: 5,
    name: 'Draven',
    initiative: 22
  },
  {
    id: 6,
    name: 'S\'kokado',
    initiative: 19
  },
  {
    id: 7,
    name: 'Wyatt',
    initiative: 19
  },
  {
    id: 8,
    name: 'Brian (DM)',
    initiative: 13
  }
];

const Index = () => {
  const [cards, setCards] = useState();
  const [updateList, setUpdateList] = useState(false);
  const [readSession, setReadSession] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const readSessionData = () => {
    localStorage.setItem('CardList', []);
    if (readSession) {
      let cookie = localStorage.getItem('CardList');
      // console.log('cookie', cookie !== 'undefined');
      if (cookie !== 'undefined' && cookie !== 'null' && cookie) {
        // console.log('parse session');
        setCards(JSON.parse(cookie));
      } else {
        setCards(baseCards);
        // console.log('using base session');
      }
      setReadSession(false);
    } else {
      return;
    }
  };

  const updateCardList = (newList) => {
    // console.log('index', newList);
    setCards(newList);
  };

  // read the cookie from browser
  useEffect(() => {
    readSessionData()
  }, []);

  useEffect(() => {
    if (!readSession) {
      localStorage.setItem('CardList', JSON.stringify(cards));
    }
  }, [cards]);

  return (
    <>
    <div className={`${showModal ? "bg-violet-700" : "bg-violet-400"} h-screen`}>
      <Header users={cards} updateCardList={updateCardList} cards={cards} showModal={showModal} setShowModal={setShowModal} className="sticky top-0"></Header>
      {
        !showModal ? <Container cards={cards} setCards={setCards} setUpdateList={setUpdateList}></Container> : null
      }
      {/* <footer className="absolute bottom-px">
      <a style={{color: 'gray'}} target="_blank" href="https://www.flaticon.com/free-icons/add" title="add icons">icons used from- Flaticon</a>
      </footer> */}
    </div>
    </>
  )
};

export default Index