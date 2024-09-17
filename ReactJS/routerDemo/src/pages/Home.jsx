import Navbar from "../components/Navbar"
import './Home.css';
function Home() {
  return (
    <div className="containerHome">
      <Navbar />
      <h1>Página Home</h1>
      <p>Aqui temos uma demonsstração simples da utilização do React Router DOM controlando a navegação entre as páginas.</p>
    </div>
  )
}

export default Home
