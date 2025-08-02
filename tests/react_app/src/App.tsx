import ListGroup from './components/ListGroup'
import Message from './components/Message'

function App() {
  const items = ["Apple", "Banana", "Cherry"]
  const messageItem = (item: string) => {
    console.log("You selected ", item)
  }
  return (
    <ListGroup items={items} heading="Fruits" onSelect={messageItem} />
  )
}

export default App;