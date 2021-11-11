import React from 'react'
import AnadirCarrito from './../../Components/assets/img/AnadirCarrito.png';
import Comprobado from './../../Components/assets/img/Comprobado.png';
import eliminar from './../../Components/assets/img/eliminar.png';

const SisVentas = () => {
    return (
        <div className="centro"><br></br>

        <h2 className = "subtitulo"> Registro De Venta </h2><br></br>
        
        <header class="App-header"></header>
        <div class="col-md-6">
        <h5>Datos Del Cliente</h5>
        <input type="text" size="30" placeholder = "Digite el Cod del Cliente" required/>
        <input type="text" size="30" placeholder = "Digite el Nombre del cliente" required/>
        <input type="text" size="30" placeholder = "Digite el Teléfono del Cliente" required/>
        <input type="text" size="30" placeholder = "Digite la Dirección del Cliente" required/>
        </div> <br/>

        <div class="row"/>
    <div class="col-md-6">
    <h5>Datos Del Producto</h5>
           
    <h6>Seleccione la categoria del producto</h6>
    <select>
    <option>Categoría 1</option>
    <option>Categoría 2</option>
    <option>Categoría 3</option>
    </select><br/><br/>

    <input type="text" size="30" placeholder = "Digite el codigo del producto" required/>
    <input type="text" size="30" placeholder = "Se llena al digitar El codigo" required/><br/><br/>
    <input type="text" size="30" placeholder = "Digite la cantidad de productos" required/>
    <input type="text" size="30" placeholder = "valor llena cuando se digita la cantidad" required/> <br/><br/>
    </div>
    
    <button class="boton2"> <img src={AnadirCarrito} alt= "Carrito" width="17" height="17" /> <p> Agregar otro producto</p> </button> <br/><br/>
    
    < div class="verticalline"/>
    
    <div class="row"/>
    <div class="col-md-12"></div>

    <div id="contenedor">
    <h3>Resumen del pedido</h3>
     <div id="tabla1">
        <table border="1" align="center" height='10px'>
            <tr>
                <td><b/>Nro</td>
                <td><b/>Producto</td>
                <td><b/>Cod</td>
                
                
            </tr>
            <tr>
            <td> <input></input></td>
            <td><input></input></td>
            <td><input></input></td>
            
            </tr>
            <tr>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
                
                </tr>
    </table>
    </div>
    <div id="tabla2"/>
    <table border="1">
    <tr>
    <td><b/>Cantidad</td>
    <td><b/>Total</td>
    <td><b/>Seleccionar</td>
    <td><b/>Eliminar</td>
    </tr>
    <tr>
    <td><input></input></td>
    <td><input></input></td>
    <td><button class="boton5"><img src={Comprobado} width="17" height="17" alt="aceptar compra"/></button></td>
    <td><button class="boton6"><img src={eliminar} width="17" height="17" alt="Eliminar compra"/></button></td>
    </tr>
    <tr>
        <td><input></input></td>
        <td><input></input></td>
        <td><button class="boton5"><img src={Comprobado} width="17" height="17" alt="aceptar compra"/></button></td>
        <td><button class="boton6"><img src={eliminar} width="17" height="17" alt="Eliminar compra"/></button></td>
        </tr>
        </table>
    </div>
    
    <div>
    <div> <button type="button" id="btnCancel" className="btn btn-primary btn-sm">Cancelar venta</button> <button type="button" id="btnCancel" className="btn btn-primary btn-sm">Modificar ventas</button> </div> <br/>

            
    </div>

    
    
        </div>





    )
}

export default SisVentas
