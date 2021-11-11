import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbars = () => {
  const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently}= useAuth0();
  const[textButton, setTextButton]= useState('Loging')
  const [Name, setName] = useState('')

useEffect(() => {
  if(isAuthenticated){
    setTextButton('Logout')
     setName( user.name)
  }else{
    setTextButton('Login')
    setName('')


  }
 
}, [isAuthenticated])

useEffect(()=>{
  const getToken= async ()=>{
    const accessToken = await getAccessTokenSilently();
    localStorage.setItem('token', accessToken)
  }
  if(isAuthenticated){
    getToken();
  }
}, [isAuthenticated, getAccessTokenSilently])

    return (
      <Navbar className='mynabvar' variant="dark">
      <Container>

      <Navbar.Brand >BitApp</Navbar.Brand>
      <Nav className="me-auto" >
        <Nav.Link><Link to= '/'>Home</Link></Nav.Link> 
       
        {
          isAuthenticated ?
          <NavDropdown title={Name} id="navbarScrollingDropdown">
          
          <NavDropdown.Item ><Link to='/Ingresar_Venta'>Ingresar venta</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Mis_Ventas'>Mis Ventas</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Perfil'>Perfil</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Catalogo'>Catalogo</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Vendedores'>Vendedores</Link></NavDropdown.Item>
          
          <NavDropdown.Divider />

          <NavDropdown.Item >
          {/* <Link to='/roles'>Roles</Link> */}
          </NavDropdown.Item>
        </NavDropdown>:
        null
        }
      
      </Nav>
      </Container>
      {
        isAuthenticated ?
        <button
        onClick={()=>logout({returnTo: window.location.origin})}
        className="btn btn-primary">{textButton}</button>:

        <button
        onClick={() => loginWithRedirect()}
        className="btn btn-primary">{textButton}</button>


      }


      
    </Navbar>
    
    )
}

export default Navbars
