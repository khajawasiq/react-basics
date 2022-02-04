
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aboute from "./components/Aboute.js";
import {useState} from 'react'
import Textbox from './components/Textbox'
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
// import Textbox from './components/Textbox';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState('null')
  const showAlert=(message ,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert('null')
    },2000);

  }
   const togleMode=()=>{
     if(mode=='light'){
       setMode('dark')
       document.body.style.backgroundColor='black'
       showAlert('dark mode enable','success')
     } 
     else {
     setMode('light')
     document.body.style.backgroundColor='white'
     showAlert('light mode enable','danger')
     }
   }
  return (
    <>
    <Navbar   title="TEX ANALYZER" about="ABOUT" mode={mode} togleMode={togleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">

    <Textbox text=' Text Box :' mode={mode}/>,
   {/* <Aboute/> */}
    </div>
</>
  )
};

export default App;
