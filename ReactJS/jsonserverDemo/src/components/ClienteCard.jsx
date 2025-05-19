import './ClienteCard.css'
function ClienteCard({ cliente, onDelete }) {
  return (
    <div className="card">
      <h2>{cliente.nome}</h2>
      <p>{cliente.email}</p>
      <button onClick={onDelete}>Remover</button>
    </div>
  )
}

export default ClienteCard
