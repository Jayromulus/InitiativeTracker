import '@/styles/globals.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function App({ Component, pageProps }) {
  return (
  <>
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  </>
  )
}

// https://react-dnd.github.io/react-dnd/examples/sortable/simple