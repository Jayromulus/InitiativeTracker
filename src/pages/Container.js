import update from 'immutability-helper'
import { useCallback, useState, useEffect } from 'react'
import Card from './Card.js'

const Container = ({ cards, setCards, setUpdateList }) => {
  {
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
          initiative={card.initiative}
          id={card.id}
          text={card.name}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        {
          cards?.length > 0 ?
            <div className="w-11/12 md:w-full md:w-3/4 lg:w-1/2 mr-auto mt-2">{cards?.map((card, i) => renderCard(card, i))}</div>
            : null
        }
      </>
    )
  }
}

export default Container;