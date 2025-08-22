import Main from "./components/Main.jsx"
import {useState} from "React"

export default function App() {
  const [age, setAge] = useState(1)
  return (
    <Main />
  )
}
