
import React, {useState, useEffect} from 'react'
import logo from './assets/img/logo.png';
import  GoogleLogin, { useGoogleLogin } from  'react-google-login' ;
import { Redirect } from 'react-router';



const respuestaGoogle=(respuesta)=>{
 /*    const{logingWithRedirect, isAuthenticated, user, logout} = useGoogleLogin();
    const [textButton, setTextButton] = useGoogleLogin('Loging')

    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Logout')
        }else{
            setTextButton('Login')
        }
        
    }, [isAuthenticated]) */
  
    console.log(respuesta);
    console.log(respuesta.profileObj);
} 



const BotonLoging = () => {


    return (
        <div>
            
    <div className="centro"><br></br>
        <h2 className = "subtitulo"> Ingresar a BitApp</h2> <br></br>
        <br></br>
        </div>
        
        

        
    
        < GoogleLogin 
    
    

   

                
    clientId = "222731134733-jopa4tpa97hjbv5vb4vlsl1suiogaged.apps.googleusercontent.com" 
    //buttonText = "Login" 
    render = { renderProps  =>  ( 
        
      <center>< button className = 'botom6'   onClick = { renderProps.onClick }  disabled = { renderProps . disabled } > <img src={logo} alt="Logo Google"/> <p> Ingresar Con Google</p> </button> </center>

     



    ) } 
    
    onSuccess = { respuestaGoogle} 
    onFailure = { respuestaGoogle } 
    CookiePolicy = { 'single_host_origin' } 
    
  />
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

{/* {
    isAuthenticated ?
    <button
    onClick={()=>logout({returnto: window.location.origin})}
    className="btn btn-primary">{textButton}</button>:

    <button
    onClick={()=> logingWithRedirect()}
    className="btn btn-primary">{textButton}</button>
} */}

        </div>
    )
}

export default BotonLoging
