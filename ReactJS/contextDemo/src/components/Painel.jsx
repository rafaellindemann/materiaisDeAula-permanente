import React from 'react'
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Painel() {
    const {usuarioLogado} = useContext(GlobalContext)
  return (
    <div>
        <h1>Olá, {usuarioLogado}</h1>
    </div>
  )
}

export default Painel
