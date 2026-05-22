import './App.css'

const produtos = [
  {
    id: 1,
    nome: 'Foto horizontal',
    imagem: '/horizontal.png'
  },
  {
    id: 2,
    nome: 'Foto quadrada',
    imagem: '/quadrada.png'
  },
  {
    id: 3,
    nome: 'Foto vertical',
    imagem: '/vertical.png'
  }
]

function App() {
  return (
    <main className="app">
      <h1>Demo de imagens em cards</h1>

      <section className="demo">
        <h2>1. object-fit: cover</h2>

        <div className="cards">
          {produtos.map((produto) => (
            <article className="card" key={produto.id}>
              <div className="imageBox cover">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <h3>{produto.nome}</h3>
            </article>
          ))}
        </div>

        <p>
          Aqui a imagem sempre preenche todo o espaço do card. O visual fica
          uniforme, mas partes da imagem podem ser cortadas.
        </p>
      </section>

      <section className="demo">
        <h2>2. object-fit: contain</h2>

        <div className="cards">
          {produtos.map((produto) => (
            <article className="card" key={produto.id}>
              <div className="imageBox contain">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <h3>{produto.nome}</h3>
            </article>
          ))}
        </div>

        <p>
          Aqui a imagem aparece inteira, sem cortes. É melhor quando a
          informação da imagem é importante, mas podem sobrar espaços vazios.
        </p>
      </section>

      <section className="demo">
        <h2>3. Imagem natural com limite de altura</h2>

        <div className="cards">
          {produtos.map((produto) => (
            <article className="card" key={produto.id}>
              <div className="imageBox natural">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <h3>{produto.nome}</h3>
            </article>
          ))}
        </div>

        <p>
          Aqui a imagem mantém sua proporção natural, mas recebe um limite de
          altura. É mais fiel à imagem, porém os cards ficam visualmente menos
          padronizados.
        </p>
      </section>
    </main>
  )
}

export default App