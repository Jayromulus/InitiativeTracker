import update from 'immutability-helper'
import { useCallback, useState, useEffect } from 'react'
import { Card } from './Card.js'

const Container = () => {
  {
    const [cards, setCards] = useState()
    const [updateList, setUpdateList] = useState(false);

    useEffect(() => {
      console.log('lcalstorage',localStorage.getItem('Cards'));
      if (localStorage.getItem('Cards') !== 'undefined') {
        setCards(JSON.parse(localStorage.getItem('Cards')));
      } else {
        setCards([
          {
            id: 1,
            text: 'Jerry',
          },
          {
            id: 2,
            text: 'Tom',
          },
          {
            id: 3,
            text: 'James',
          },
          {
            id: 4,
            text: 'Marcus',
          },
          {
            id: 5,
            text: 'Leland',
          },
          {
            id: 6,
            text: 'John'
          },
          {
            id: 7,
            text: 'Brian (DM)',
          },
        ])
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('Cards', JSON.stringify(cards));
    }, [cards])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
      setUpdateList(true);
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <>
        <div className="w-full md:w-3/4 lg:w-1/2 m-auto mt-2">{cards?.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}

export default Container;