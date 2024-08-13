import './App.css'
import { ReactDark } from './components/icons/ReactDark'

function App() {

  const iconBig = {
    width: '148px',
    height: '148px'
  };
  const iconMid = {
    width: '92px',
    height: '92px'
  };

  return (
    <>
      <ReactDark />
      <ReactDark style={iconMid}/>
      <ReactDark style={iconBig}/>
    </>
  )
}

export default App
