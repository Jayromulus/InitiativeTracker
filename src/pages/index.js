import update from 'immutability-helper';
import { useCallback, useState, useEffect } from 'react';
import Container from './Container.js';
import Header from './Header.js';

const baseCards = [
  {
    id: 1,
    name: 'Jerry',
  },
  {
    id: 2,
    name: 'Tom',
  },
  {
    id: 3,
    name: 'James',
  },
  {
    id: 4,
    name: 'Marcus',
  },
  {
    id: 5,
    name: 'Leland',
  },
  {
    id: 6,
    name: 'John'
  },
  {
    id: 7,
    name: 'Adam'
  },
  {
    id: 8,
    name: 'Brian (DM)',
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
      if (cookie !== 'undefined' && cookie !== 'null') {
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
  }

  // useEffect(() => {console.log(cards)}, [cards]);

  // read the cookie from browser
  useEffect(() => {
    // console.log('reading session data')
    readSessionData()
  }, []);

  // useEffect(() => { console.log(cards) }, [cards]);

  useEffect(() => {
    // localStorage.setItem('Cards', JSON.stringify(cards));
    // let expireDate = new Date();
    // expireDate.setTime(expireDate.getTime() + 8 * 24 * 60 * 60 * 1000);
    if (!readSession) {
      localStorage.setItem('CardList', JSON.stringify(cards));
      // console.log('session update(?)')
    }
  }, [cards]);

  return (
    <>
    {/* <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style> */}
    <div>
      <Header></Header>
      <Container cards={cards} setCards={setCards} setUpdateList={setUpdateList}></Container>
      {/* <footer className="absolute bottom-px">
      <a style={{color: 'gray'}} target="_blank" href="https://www.flaticon.com/free-icons/add" title="add icons">icons used from- Flaticon</a>
      </footer> */}
    </div>
    </>
  )
};

export default Index