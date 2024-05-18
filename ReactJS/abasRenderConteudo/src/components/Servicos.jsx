
function Servicos(props) {
  return (
    <div>
      <h1>Serviços</h1>
      {
        props.servicos.map((s) => (
          <div key={s.id}>
            <h2>{s.nome}</h2>
            <p>{s.descricao}</p>
            <p>{s.valor}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Servicos;
