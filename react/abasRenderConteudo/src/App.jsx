import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Produtos from './components/Produtos'

const produtos = [
  { id:0, nome: 'Camiseta básica', valor: 29.99 },
  { id:1, nome: 'Calça jeans', valor: 79.90 },
  { id:2, nome: 'Tênis esportivo', valor: 129.99 },
  { id:3, nome: 'Blusa de moletom', valor: 59.90 },
  { id:4, nome: 'Jaqueta de couro', valor: 199.99 },
  { id:5, nome: 'Saia rodada', valor: 49.99 },
  { id:6, nome: 'Camisa social', valor: 69.90 },
  { id:7, nome: 'Bermuda cargo', valor: 39.90 },
  { id:8, nome: 'Vestido longo', valor: 89.99 },
  { id:9, nome: 'Sapato social', valor: 149.99 },
  { id:10, nome: 'Shorts jeans', valor: 34.90 },
  { id:11, nome: 'Blusa cropped', valor: 24.99 },
  { id:12, nome: 'Sapato de corrida', valor: 179.99 },
  { id:13, nome: 'Calça legging', valor: 44.90 },
  { id:14, nome: 'Moletom canguru', valor: 54.99 },
  { id:15, nome: 'Óculos de sol', valor: 79.90 },
  { id:16, nome: 'Mochila escolar', valor: 39.99 },
  { id:17, nome: 'Relógio de pulso', valor: 99.99 },
  { id:18, nome: 'Boné trucker', valor: 29.90 },
  { id:19, nome: 'Agasalho esportivo', valor: 69.99 },
];

function App() {
 const [conteudo, setConteudo] = useState()

 function mostrarHome(){
  setConteudo(<Home />)
 }
 function mostrarProdutos(){
  setConteudo(<Produtos produtos={produtos}/>)
 }
  return (
    <>
      <header>
        <nav>
          <button onClick={mostrarHome}>Home</button>
          <button onClick={mostrarProdutos}>Produtos</button>
        </nav>
      </header>
      <main>
        { conteudo }
      </main>
    </>
  )
}

export default App
