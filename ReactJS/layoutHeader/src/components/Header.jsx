import './Header.css'

function Header() {
  return (
      <header className="header">
        <nav>
          <ul className='lista'>
            <li className='itens-nav'><a className='itens-nav-link' href="#home">Home</a></li>
            <li className='itens-nav'><a className='itens-nav-link' href="#about">Sobre</a></li>
            <li className='itens-nav'><a className='itens-nav-link' href="#services">Serviços</a></li>
            <li className='itens-nav'><a className='itens-nav-link' href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>      
  )
}

export default Header
