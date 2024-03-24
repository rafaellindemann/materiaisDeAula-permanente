import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Produtos from './components/Produtos'
import Servicos from './components/Servicos'

const servicos = [
  { 
    id: 1,
    nome: 'Limpeza Residencial',
    descricao: 'Limpeza completa de residências, incluindo pisos, móveis, banheiros, etc.',
    valor: 'R$150,00'
  },
  { 
    id: 2,
    nome: 'Conserto de Encanamento',
    descricao: 'Conserto de vazamentos, troca de tubulações e reparos em geral em encanamentos.',
    valor: 'A partir de R$80,00'
  },
  { 
    id: 3,
    nome: 'Manutenção de Jardins',
    descricao: 'Corte de grama, poda de árvores, plantio de flores e manutenção geral de jardins.',
    valor: 'R$50,00 por hora'
  },
  { 
    id: 4,
    nome: 'Serviço de Delivery',
    descricao: 'Entrega rápida de alimentos, compras de supermercado, medicamentos, etc.',
    valor: 'Varia conforme o serviço'
  },
  { 
    id: 5,
    nome: 'Aulas Particulares',
    descricao: 'Aulas particulares de matemática, português, inglês e outras disciplinas.',
    valor: 'R$40,00 por hora'
  },
  { 
    id: 6,
    nome: 'Instalação de Ar Condicionado',
    descricao: 'Instalação profissional de ar condicionado em residências e escritórios.',
    valor: 'A partir de R$200,00'
  },
  { 
    id: 7,
    nome: 'Manutenção de Computadores',
    descricao: 'Reparos em computadores, remoção de vírus, instalação de software, etc.',
    valor: 'Varia conforme o serviço'
  },
  { 
    id: 8,
    nome: 'Assistência Técnica de Celulares',
    descricao: 'Conserto de smartphones, troca de telas, reparos em hardware, etc.',
    valor: 'A partir de R$100,00'
  },
  { 
    id: 9,
    nome: 'Serviços de Consultoria',
    descricao: 'Consultoria empresarial, financeira, jurídica, marketing, etc.',
    valor: 'Varia conforme o serviço'
  },
  { 
    id: 10,
    nome: 'Organização de Eventos',
    descricao: 'Organização de festas de aniversário, casamentos, eventos corporativos, etc.',
    valor: 'Varia conforme o evento'
  },
  { 
    id: 11,
    nome: 'Design Gráfico',
    descricao: 'Criação de logotipos, banners, materiais publicitários, etc.',
    valor: 'Varia conforme o projeto'
  },
  { 
    id: 12,
    nome: 'Serviços de Encanador',
    descricao: 'Conserto de vazamentos, instalação de torneiras, reparos em tubulações, etc.',
    valor: 'A partir de R$60,00'
  },
  { 
    id: 13,
    nome: 'Serviços de Eletricista',
    descricao: 'Instalação de luminárias, troca de fiação, reparos em quadros elétricos, etc.',
    valor: 'A partir de R$80,00'
  },
  { 
    id: 14,
    nome: 'Consultoria em Nutrição',
    descricao: 'Planejamento de dietas, orientações nutricionais, acompanhamento individualizado, etc.',
    valor: 'Varia conforme o serviço'
  },
  { 
    id: 15,
    nome: 'Serviço de Táxi',
    descricao: 'Transporte seguro e confortável para diversos destinos na cidade.',
    valor: 'Varia conforme a distância'
  },
  { 
    id: 16,
    nome: 'Serviço de Lavanderia',
    descricao: 'Lavagem de roupas, passadoria, limpeza de peças delicadas, etc.',
    valor: 'A partir de R$20,00'
  },
  { 
    id: 17,
    nome: 'Aulas de Música',
    descricao: 'Aulas de piano, violão, bateria, canto, etc.',
    valor: 'R$50,00 por hora'
  },
  { 
    id: 18,
    nome: 'Serviço de Pintura',
    descricao: 'Pintura de paredes, portas, móveis, etc.',
    valor: 'Varia conforme o serviço'
  },
  { 
    id: 19,
    nome: 'Assistência Técnica de TV',
    descricao: 'Conserto de televisores, instalação de antenas, reparos em aparelhos eletrônicos, etc.',
    valor: 'A partir de R$80,00'
  },
  { 
    id: 20,
    nome: 'Serviços de Limpeza de Piscinas',
    descricao: 'Limpeza de piscinas residenciais e comerciais, tratamento da água, etc.',
    valor: 'A partir de R$100,00'
  },
];

const produtos = [
  { id:0, nome: 'Camiseta básica', valor: 29.99 },
  { id:1, nome: 'Calça jeans', valor: 79.90 },
  { id:2, nome: 'Tênis esportivo', valor: 129.99 },
  { id:3, nome: 'Blusa de moletom', valor: 59.90 },
  { id:4, nome: 'Jaqueta de couro', valor: 199.99 },
  { id:5, nome: 'Saia rodada', valor: 49.99 },
  { id:6, nome: 'Camisa social', valor: 69.90 },
  { id:7, nome: 'Bermuda cargo', valor: 39.90 },
  { id:8, nome: 'Vestido longo', valor: 89.99 },
  { id:9, nome: 'Sapato social', valor: 149.99 },
  { id:10, nome: 'Shorts jeans', valor: 34.90 },
  { id:11, nome: 'Blusa cropped', valor: 24.99 },
  { id:12, nome: 'Sapato de corrida', valor: 179.99 },
  { id:13, nome: 'Calça legging', valor: 44.90 },
  { id:14, nome: 'Moletom canguru', valor: 54.99 },
  { id:15, nome: 'Óculos de sol', valor: 79.90 },
  { id:16, nome: 'Mochila escolar', valor: 39.99 },
  { id:17, nome: 'Relógio de pulso', valor: 99.99 },
  { id:18, nome: 'Boné trucker', valor: 29.90 },
  { id:19, nome: 'Agasalho esportivo', valor: 69.99 },
];

function App() {
 const [conteudo, setConteudo] = useState()

 function mostrarHome(){
  setConteudo(<Home />)
 }
 function mostrarProdutos(){
  setConteudo(<Produtos produtos={produtos}/>)
 }
 function mostrarServicos(){
  setConteudo(<Servicos servicos={servicos}/>)
 }
  return (
    <>
      <header>
        <nav>
          <button onClick={mostrarHome}>Home</button>
          <button onClick={mostrarProdutos}>Produtos</button>
          <button onClick={mostrarServicos}>Servicos</button>
        </nav>
      </header>
      <main>
        { conteudo }
      </main>
    </>
  )
}

export default App
