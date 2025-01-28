import { useState } from "react";

function App() {
  const [genero, setGenero] = useState("");

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Gênero selecionado: ${genero}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          value="Masculino"
          checked={genero === "Masculino"}
          onChange={handleChange}
        />
        Masculino
      </label>

      <label>
        <input
          type="radio"
          value="Feminino"
          checked={genero === "Feminino"}
          onChange={handleChange}
        />
        Feminino
      </label>

      <label>
        <input
          type="radio"
          value="Outro"
          checked={genero === "Outro"}
          onChange={handleChange}
        />
        Outro
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
