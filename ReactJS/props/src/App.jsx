import './App.css'
import Card from './components/Card'
import Contato from './components/Contato'
import Servico from './components/Servico'

function App() {
  return (
    <>
      <h1>Demos de props</h1>
      <h2>Recebimento de props sem desestruturação</h2>
      <Contato nome={"Ulib"} telefone={123456}/>
      <Contato nome={"Mano Juca"} telefone={9999999999}/>

      <hr />

      <h2>Desestruturação de prop ao vivo</h2>
      <Card nome={"Sapato"} preco={22}/>
      <Card nome={"Kichute"} preco={55}/>


      <hr />
      <h2>Props via objeto</h2>
      <Servico data={{nome: "Capina de lote", preco: 300}} />
      <Servico data={{nome: "Pintura de parede", preco: 500}} />

    </>
  )
}

export default App
