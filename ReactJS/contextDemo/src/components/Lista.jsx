import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Lista() {
    const {usuarios, setUsuarios} = useContext(GlobalContext)

    function adicionarUsuario() {
        const novoUsuario = {
            id: Date.now(),
            nome: "Capitão Ganso",
            email: "capitao@juliaroger.com",
        }
        setUsuarios([...usuarios, novoUsuario])
    }
  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <p>Nome: {usuario.nome}</p>
          <p>Email: {usuario.email}</p>
          <p>{usuario.id}</p>
        </div>
      ))}

      <button onClick={adicionarUsuario}>Adicionar usuário</button>
    </div>
  )
}

export default Lista
