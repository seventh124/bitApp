
import './App.css';
import Encabezado from './components/Encabezado';
import Footer from './components/Footer';
import Header from './components/Header';
import Ingreso from './components/Ingreso';
import  GoogleLogin from 'react-google-login' ; 
import logo from './components/assets/img/logo.png';


function App() {

 const respuestaGoogle=(respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.profileObj);
} 

  return (


    <div className="App">
      <header>
        <Header/>
        <loging/>

    
 

      </header>

      <main>
        <Encabezado/>
        <Ingreso/> 
        < GoogleLogin 
    clientId = "222731134733-jopa4tpa97hjbv5vb4vlsl1suiogaged.apps.googleusercontent.com" 
    //buttonText = "Login" 
    render = { renderProps  =>  ( 
      <center>< button className = 'botom6'   onClick = { renderProps . onClick }  disabled = { renderProps . disabled } > <img src={logo} alt="Logo Google"/><p> Ingresar Con Google</p> </button> </center>
    ) } 
    onSuccess = { respuestaGoogle } 
    onFailure = { respuestaGoogle } 
    CookiePolicy = { 'single_host_origin' } 
  />
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

         
 
      <footer>
      
      </footer>
      <Footer/>
    </div>
  );
}

export default App;
