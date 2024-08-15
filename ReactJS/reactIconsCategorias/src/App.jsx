import './App.css'
import { FcBiotech, FcCommandLine, FcElectronics, FcGlobe, FcHome, FcWiFiLogo } from "react-icons/fc";
import { DiAndroid, DiCodeBadge, DiCss3, DiGit, DiGithubBadge, DiHtml5, DiJava, DiJavascript, DiJsBadge, DiNodejsSmall, DiPostgresql, DiReact, DiStackoverflow, DiTrello, DiVisualstudio } from "react-icons/di";
import { Gi3dHammer, GiAchillesHeel, GiAfrica, GiAirplaneDeparture, GiAk47, GiAnarchy, GiAnglerFish, GiArchaeopteryxFossil, GiArcher, GiArcheryTarget, GiBalloonDog, GiBeerStein, GiDimetrodon, GiDinosaurBones, GiDinosaurEgg, GiDinosaurRex, GiDiplodocus, GiDisc, GiEarthAmerica, GiSouthAmerica, GiSwordInStone } from "react-icons/gi";
import { BsPersonAdd, BsSearch } from "react-icons/bs";
import { MdAddCircle, MdDeleteForever, MdEditDocument, MdOutlineSearch } from "react-icons/md";
import Demo from './components/Demo';

function App() {

  return (
    <>
      <h1>React Icons</h1>
      <a href="https://react-icons.github.io/react-icons/">https://react-icons.github.io/react-icons/</a>

      <div>
        <h2>Flat Color Icons</h2>
        <FcHome />
        <FcBiotech />
        <FcCommandLine />
        <FcElectronics />
        <FcGlobe />
        <FcWiFiLogo />
      </div>

      <div className='devIcons'>
        <h2>Devicons</h2>
        <DiAndroid />
        <DiCodeBadge />
        <DiHtml5 />
        <DiCss3 />
        <DiJavascript />
        <DiJsBadge />
        <DiGithubBadge />
        <DiReact />
        <DiNodejsSmall />
        <DiJava />
        <DiTrello />
        <DiStackoverflow />
        <DiPostgresql />
        <DiVisualstudio />
        <DiGit />
      </div>

      <div className="gameIcons">
        <h2>Game Icons</h2>
        <Gi3dHammer />
        <GiAchillesHeel />
        <GiAfrica />
        <GiAk47 />
        <GiAirplaneDeparture />
        <GiAnarchy />
        <GiAnglerFish />
        <GiArcher />
        <GiArcheryTarget />
        <GiArchaeopteryxFossil />
        <GiBalloonDog />
        <GiBeerStein />
        <GiDimetrodon />
        <GiDinosaurBones />
        <GiDinosaurEgg />
        <GiDinosaurRex />
        <GiDiplodocus />
        <GiDisc />
        <GiEarthAmerica />
        <GiSouthAmerica />
        <GiSwordInStone />
      </div>

      <div className="bootstrapIcons">
        <h2>Bootstrap Icons</h2>
        <BsSearch />
        <BsPersonAdd />
      </div>

      <div className="materialDesigIcons">
        <h2>Material Design icons</h2>
        <MdAddCircle />
        <MdDeleteForever />
        <MdEditDocument />
        <MdOutlineSearch />
      </div>

      <Demo />

      <a href="https://rafaellindemann.notion.site/React-Icons-80a70719d1c047f9a7b8fdffa0fd533e?pvs=74">Notion sobre o assunto</a>
    </>
  )
}

export default App
