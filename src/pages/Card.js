import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
let ItemTypes = {
  CARD: 'card',
}
const style = {
  // border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  color: 'black',
  cursor: 'move',
}

const Card = ({ id, text, index, moveCard }) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      // console.log(id, index)
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div className="grid grid-flow-dense grid-cols-6" ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      <div className="col-span-5">
        {text}
      </div>
      <div className="flex  col-span-1 pt-0.5">
        <div className="space-y-2 ml-auto">
          <span className="block w-8 h-0.5 rounded bg-gray-600 opacity-80"></span>
          <span className="block w-8 h-0.5 rounded bg-gray-600 opacity-80"></span>
          <span className="block w-8 h-0.5 rounded bg-gray-600 opacity-80"></span>
        </div>
      </div>
    </div>
  )
}

export default Card;