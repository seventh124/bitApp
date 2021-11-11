import { Auth0Provider } from '@auth0/auth0-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Routes  from './Routes/Routes';


function App() {
  return (
    <Auth0Provider
    domain="bitapp.us.auth0.com"
    clientId="HKxcQfvBFHr2oeuWQH9SYqMv31qPHCZy"
    redirectUri={window.location.origin}
  >
    <Routes/>
  </Auth0Provider>
  );
}

export default App;
