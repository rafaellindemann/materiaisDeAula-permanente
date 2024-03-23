
function Produtos(props) {
  return (
    <div>
      <h1>Produtos</h1>
      {
        props.produtos.map((p) => (
          <div key={p.id}>
            <h2>{p.nome}</h2>
            <p>{p.valor}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Produtos;
