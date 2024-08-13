import { useState } from 'react'
import { Pulse3 } from './components/icons/Pulse-3'
import './App.css'
import { PulseMultiple } from './components/icons/Pulse-multiple'
import { BlocksShuffle2 } from './components/icons/Blocks-shuffle-2'
import { BlocksWave } from './components/icons/Blocks-wave'
import { WindToy } from './components/icons/Wind-toy'
import { WifiFade } from './components/icons/Wifi-fade'
import { ThreeDotsRotate } from './components/icons/Three-dots-rotate'
import { Random1dice } from './components/icons/Random-1dice'
import { AntCircleFill } from './components/icons/Ant-circle-fill'
import { Cat } from './components/icons/Cat'
import { LogoGithub } from './components/icons/Logo-github'
import { LogoAndroid } from './components/icons/Logo-android'
import { LogoStackoverflow } from './components/icons/Logo-stackoverflow'
import { Paw } from './components/icons/Paw'
import { Dpad } from './components/icons/Dpad'
import { DinosaurBones } from './components/icons/Dinosaur-bones'
import { DinosaurRex } from './components/icons/Dinosaur-rex'


function App() {
  const [count, setCount] = useState(0)

  const iconBig = {
    width: '148px',
    height: '148px'
  };

  return (
    <>
      <h1>Iconbuddy</h1>
      <a href="https://iconbuddy.com/">https://iconbuddy.com/</a>
      <div className='icons'><Pulse3 style={iconBig} /> Pulse3</div>
      <div className='icons'><PulseMultiple /> PulseMultiple</div>
      <div className='icons'><BlocksShuffle2 /> BlocksShuffle2</div>
      <div className='icons'><BlocksWave /> BlocksWave</div>
      <div className='icons'><WindToy /> WindToy</div>
      <div className='icons'><WifiFade /> WifiFade</div>
      <div className='icons'><ThreeDotsRotate /> 3DotsRotate</div>
      <div className='icons'><Random1dice /> Random1dice</div>
      <div className='icons'><AntCircleFill /> AntCircleFill</div>
      <div className='icons'><Cat /> Cat</div>
      <div className='icons'><LogoGithub style={iconBig}/> LogoGithub</div>
      <div className='icons'><LogoAndroid /> LogoAndroid</div>
      <div className='icons'><LogoStackoverflow /> LogoStackoverflow</div>
      <div className='icons'><Paw /> Paw</div>
      <div className='icons'><Dpad /> Dpad</div>
      <div className='icons'><DinosaurBones /> DinosaurBones</div>
      <div className='icons'><DinosaurRex size={200} /> DinosaurRex</div>

      
      
      
    </>
  )
}

export default App
