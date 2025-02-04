import React from 'react'

function Contato(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>{props.telefone}</p>
    </div>
  )
}

export default Contato
