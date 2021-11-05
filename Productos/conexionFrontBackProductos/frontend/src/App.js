import './App.css';
import Header from './components/Header';
import RegistroProductos from './components/RegistroProductos';

import Footer from './components/Footer';

function App() {
  return (
    <div className = "App">
    <header>
    <Header />
    </header>

    <main>
      <div><RegistroProductos /></div>
    </main>

    <footer>
      <div><Footer /></div>
    </footer>
    </div>
  )
}
export default App;
