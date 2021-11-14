import './App.css'
/*COMPONENTS*/
import Header from './components/Header';
import Footer from './components/Footer';
import Ventas from './components/Ventas';



function App() {
  return (
    <div className = "App">
      <header>
        <Header />
      </header>

      <main>
        <div><Ventas/></div>
        
      </main>

      <footer>
        <div><Footer /></div>     
      </footer>
    </div>

  );
}

export default App;
