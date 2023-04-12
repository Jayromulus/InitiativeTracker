import update from 'immutability-helper';
import { useCallback, useState, useEffect } from 'react';
import Container from './Container.js';
import Header from './Header.js';

const baseCards = [
  {
    id: 1,
    name: 'Jerry',
    initiative: 1
  },
  {
    id: 2,
    name: 'Tom',
    initiative: 15
  },
  {
    id: 3,
    name: 'James',
    initiative: 18
  },
  {
    id: 4,
    name: 'Marcus',
    initiative: 23
  },
  {
    id: 5,
    name: 'Leland',
    initiative: 8
  },
  {
    id: 6,
    name: 'Jon',
    initiative: 26
  },
  {
    id: 7,
    name: 'Adam',
    initiative: 19
  },
  {
    id: 8,
    name: 'Brian (DM)',
    initiative: 14
  },
];

const Index = () => {
  const [cards, setCards] = useState()
  const [updateList, setUpdateList] = useState(false);
  const [readSession, setReadSession] = useState(true);

  const readSessionData = () => {
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
    console.log('index', newList);
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
    <div className="bg-violet-400 h-screen">
      <Header updateCardList={updateCardList} cards={cards}></Header>
      <Container cards={cards} setCards={setCards} setUpdateList={setUpdateList}></Container>
      {/* <footer className="absolute bottom-px">
      <a style={{color: 'gray'}} target="_blank" href="https://www.flaticon.com/free-icons/add" title="add icons">icons used from- Flaticon</a>
      </footer> */}
    </div>
    </>
  )
};

export default Index