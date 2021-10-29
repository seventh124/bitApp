import './App.css';
import Header from './components/Header';
import Encabezado from './components/Encabezado';
import RegistroProductos from './components/RegistroProductos';

import Footer from './components/Footer';

function App() {
  return (
    <div className = "App">
    <header>
    <Header />
    </header>

    <main>
      <div><Encabezado /></div>
      <div><RegistroProductos /></div>
    </main>

    <footer>
      <div><Footer /></div>
    </footer>
    </div>
  )
}
export default App;
