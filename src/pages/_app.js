import '@/styles/globals.css'
import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline

export default function App({ Component, pageProps }) {
  return (
  <>
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Component {...pageProps} />
    </DndProvider>
  </>
  )
}

// https://react-dnd.github.io/react-dnd/examples/sortable/simple