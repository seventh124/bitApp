import React,{useState} from 'react';
import './App.css';
import Encabezado from './components/Encabezado';
import Footer from './components/Footer';
import Header from './components/Header';
import RegVenta from './components/RegVenta';
import Modal from './Modal';

function App() {
  const [active, setActive] = useState(false);
  const toggle= () => {
    setActive(!active);
  }
  return (
    <div className="App">
      <center><button style={{ 
        position: 'absolute',
        top:'90%',
        padding:8,
        
      }} onClick={toggle}>Confirmar Venta</button> </center>
      
      <Modal active={active} toggle={toggle}>
      <h5>Venta Registrada</h5>
      </Modal>
      <header>
      <Header/>
      </header>

    <main>
      <Encabezado/>
      <RegVenta/>
      
     </main>

    <footer>

    </footer>
    <Footer/>
    </div>
  );
}

export default App;
