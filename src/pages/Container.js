import update from 'immutability-helper'
import { useCallback, useState, useEffect } from 'react'
import Card from './Card.js'

const Container = ({ cards, setCards, setUpdateList }) => {
  {
    // const [cards, setCards] = useState()
    // const [updateList, setUpdateList] = useState(false);
    // const [readSession, setReadSession] = useState(true);

    // const readSessionData = () => {
    //   if (readSession) {
    //     let cookie = localStorage.getItem('CardList');
    //     // console.log('cookie', cookie !== 'undefined');
    //     if (cookie !== 'undefined') {
    //       // console.log('parse session');
    //       setCards(JSON.parse(cookie));
    //     } else {
    //       setCards(baseCards);
    //       // console.log('using base session');
    //     }
    //     setReadSession(false);
    //   } else {
    //     return;
    //   }
    // }

    // // read the cookie from browser
    // useEffect(() => {
    //   readSessionData()
    // }, []);

    // // useEffect(() => { console.log(cards) }, [cards]);

    // useEffect(() => {
    //   // localStorage.setItem('Cards', JSON.stringify(cards));
    //   // let expireDate = new Date();
    //   // expireDate.setTime(expireDate.getTime() + 8 * 24 * 60 * 60 * 1000);
    //   if(!readSession){
    //     localStorage.setItem('CardList', JSON.stringify(cards));
    //     // console.log('session update(?)')
    //   }
    // }, [cards])

    const moveCard = (dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
      setUpdateList(true);
    }

    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.name}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        <div className="w-full md:w-3/4 lg:w-1/2 m-auto mt-2">{cards?.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}

export default Container;