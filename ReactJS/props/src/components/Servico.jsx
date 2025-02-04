import React from 'react'

function Servico(props) {
    let servico = props.data
  return (
    <div>
      <h2>{servico.nome}</h2>
        <p>Preço: R${servico.preco}</p>
    </div>
  )
}

export default Servico
