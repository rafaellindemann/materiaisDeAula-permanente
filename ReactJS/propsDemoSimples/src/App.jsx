import './App.css'
import Nome from './components/Nome'
import Produto from './components/Produto'

function App() {

  let produto = {
    id: Date.now(),
    nome: "Chuteira",
    preco: 150
  }

  return (
    <>
      <Nome texto={"João"} />
      <Produto produto={produto} />
    </>
  )
}

export default App
