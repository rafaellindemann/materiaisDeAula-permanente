import { useEffect, useState } from 'react'
import ClienteCard from './components/ClienteCard'
import './App.css'

const API_URL = 'http://localhost:3001/clientes'

function App() {
  const [clientes, setClientes] = useState([])
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setClientes)
  }, [])

  const adicionarCliente = (e) => {
    e.preventDefault()
    const novoCliente = { nome, email }
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoCliente)
    })
      .then(res => res.json())
      .then(cliente => setClientes([...clientes, cliente]))

    setNome('')
    setEmail('')
  }

  const removerCliente = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setClientes(clientes.filter(c => c.id !== id)))
  }

  return (
    <div className="container">
      <h1>Clientes</h1>

      <form onSubmit={adicionarCliente} className="form">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="lista-clientes">
        {clientes.map(cliente => (
          <ClienteCard
            key={cliente.id}
            cliente={cliente}
            onDelete={() => removerCliente(cliente.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
