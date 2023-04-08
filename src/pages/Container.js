import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'
const style = {
  width: 400,
}
export const Container = () => {
  {
    const [cards, setCards] = useState([
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
        text: 'DM',
      },
    ])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
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
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}

export default Container;