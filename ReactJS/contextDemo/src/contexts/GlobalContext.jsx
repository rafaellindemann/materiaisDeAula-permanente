/* eslint-disable react/prop-types */
/**
 * PASSO A PASSO PARA CRIAR UM CONTEXTO
 * 
 * 1 - [X] - CRIE O ARQUIVO DO CONTEXTO NA PASTA CONTEXT
 * 2 - [x] - IMPORTAR O createContext DO REACT (ele serve para criar o contexto)
 * 3 - [x] - CRIAR O CONTEXTO USANDO A FUNÇÃO createContext
 * 4 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
 * 
 * 5 - [x] - CRIE O PROVIDER
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O RETURN DO PROVIDER PASSANDO OS DADOS GLOBAIS DENTRO
 * DA PROPS 'VALUE'
 * 8 - [x] - EXPORTE O PROVIDER
 */

import {createContext, useState} from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// DADOS GLOBAIS
  const usuarioLogado = 'Gill Bates'
  const [usuarios, setUsuarios] = useState([
      {
        id: Date.now(),
        nome: "ET Bilu",
        email: "busquem@conhecimento.com"
      },
      {
        id: Date.now()+1,
        nome: "Mano Juca",
        email: "mj-vidaloka@email.com"
      },
      {
        id: Date.now()+2,
        nome: "Gill Bates",
        email: "gill@sicromoft.com"
      },
      {
        id: Date.now()+3,
        nome: "Lucio Fernando",
        email: "luciofer@fallenangel.com"
      },
    ])
// /DADOS GLOBAIS

  return (
    // aqui é o nome do contexto
    <GlobalContext.Provider value={{usuarios, setUsuarios, usuarioLogado}}>
      {/* // aqui dentro */}
      {children}
    </GlobalContext.Provider>
  )
}
 