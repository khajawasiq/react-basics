
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
    <Navbar   title="TEX ANALYZER" about="ABOUT"/>
    <div className="container my-3">

    <Textbox text=' Text Box :'/>,
    </div>
</>
  )
};

export default App;
