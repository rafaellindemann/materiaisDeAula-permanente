import './App.css'

function App() {
  return (
    <>
      <Input id="Número" placeholder="11..25" required type="number" max="25" min="11" step="2"/>
    </>
  )
}

export default App


// Coloquei o componente Input neste arquivo para que você possa ver o código completo. O componente Input é um componente funcional que recebe um id e um objeto com props. O id é desestruturado e as props são agrupadas em um objeto chamado 'props'. Este objeto é passado para o input como '...props'. O input recebe todas as propriedades que estão dentro do objeto 'props' e as coloca dentro dele. Isso torna o componente Input mais dinâmico e flexível, pois ele pode receber um número indeterminado de props.
function Input ({ id, ...props }){
  return (
    <div style={{ margin: '1rem 0', border: '1px solid #ccc', padding: '1rem' }}> 
      <p>O "...props" nas props deste componente é uma operação rest, que junta todas as propriedades que foram passadas (e não foram desestruturadas como a 'id') no objeto 'props'</p>
      {console.log(props)}
      <p>Verifique este objeto no console, perceba que as props enviadas no App foram agrupadas dentro dele...</p>
      <label htmlFor={id} style={{ color: 'red' }}>
        {id}
      </label>
      <input id={id} type="text" {...props} />
      <p>O '...props' no elemento input é a operação spread, que espalha as propriedades que estão no objeto (que foi montado) lá em cima e coloca elas dentro do input.</p>
      <p>Inspecione o elemento input para perceber que todas as propriedade do objeto que apareceu no console estão presentes no input da página.</p>
      <p>Este processo deixa o componente mais dinâmico e flexível porque ele se torna capaz de receber um número indeterminado de props.</p>
      <a href="https://rafaellindemann.notion.site/Rest-e-spread-193d393ff68e80b4bc75e75d6701a89c?pvs=74">Tem mais explicações sobre este tema neste modesto link.</a>
    </div>);
};

