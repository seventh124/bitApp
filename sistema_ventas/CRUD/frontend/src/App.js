import './App.css'
/*COMPONENTS*/
import Header from './components/Header';
import Footer from './components/Footer';
import EditarVenta from './components/EditarVenta';
import HistorialVentas from './components/HistorialVentas';
import Encabezado from './components/Encabezado';



function App() {
  return (
    <div className = "App">
      <header>
        <Header />
      </header>

      <main>
        <div><br></br><Encabezado /></div>
        <div><HistorialVentas /></div>
        <div><EditarVenta /></div>
        
      </main>

      <footer>
        <div><Footer /></div>     
      </footer>
    </div>

  );
}

export default App;
