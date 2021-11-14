import React from 'react';
import { useState } from 'react';

function EditarVenta() {

    const [IdVenta_add, set_IdVenta_add] = useState(0);
    const [IdCliente_add, set_IdCliente_add] = useState(0);
    const [NombreCliente_add, set_NombreCliente_add]= useState("");
    const [ApellidoCliente_add, set_ApellidoCliente_add] = useState("");
    const [TelefonoCliente_add, set_TelefonoCliente_add] = useState(0);
    const [DireccionCliente_add, set_DireccionCliente_add] = useState("");

    const add_to_db = () => {
        console.log(IdVenta_add + IdCliente_add + NombreCliente_add + ApellidoCliente_add + TelefonoCliente_add + DireccionCliente_add)
        Axios.add('localhost:3001/api/v1/venta/venta')

    }
    /* FALTA MIRAR QUE HACER CON EL DELETE */
    /*const delete_to_db*/

    return (
        /* Inicio SubTitulo Editar Venta */
        <div className = "centro">
            <div className="interfazEditarVenta">
                <center>
                    <h2 className="subtitulo">Editar Venta </h2><br></br>
                    
                    ID Venta {' '}<br></br>
                    <div className>
                        <input type="number" size="10" controId="IdVenta" onChange={(e) => {
                            set_IdVenta_add(e.target.value)
                        }
                        }  ></input><br></br>
                        <br></br>
                    </div>
                   

                    <h3 className="tituloEncabezado">Datos del cliente  </h3><br></br>
                    ID cliente:{' '}
                    <input type="number" name="nombre" size="25" controId="IdCliente" onChange={(e) => {
                            set_IdCliente_add(e.target.value)
                        }
                        } ></input><br></br><br></br>
                    Nombres del cliente:{' '}
                    <input type="text" name="nombre" size="25" controId="NombreCliente" onChange={(e) => {
                            set_NombreCliente_add(e.target.value)
                        }
                        } ></input>
                    {' '}Apellidos del cliente:{' '}
                    <input type="text" name="nombre" size="25" controId="ApellidoCliente" onChange={(e) => {
                            set_ApellidoCliente_add(e.target.value)
                        }
                        } ></input><br></br><br></br>
                    Teléfono del cliente:{' '}
                    <input type="number" name="nombre" size="25" controId="TelefonoCliente" onChange={(e) => {
                            set_TelefonoCliente_add(e.target.value)
                        }
                        } ></input>
                    {' '}Direción del cliente:{' '}
                    <input type="text" name="nombre" size="25" controId="DireccionCliente" onChange={(e) => {
                            set_DireccionCliente_add(e.target.value)
                        }
                        } ></input><br></br><br></br>

                    <h3 className="tituloEncabezado">Datos de la Venta</h3>

                    <div className="tabla1">
                        <table>
                                <tr> 
                                    <th>ID PRODUCTO        </th>
                                    <th>DESCRIPCIÓN        </th>
                                    <th>CANTIDAD           </th>
                                    <th>VALOR UNITARIO     </th>
                                    <th>VALOR TOTAL        </th>
                                </tr>
                                
                                
                                <tr>
                                    <td><input type="number" name="nombre" size="6" placeholder="1111"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Gaseosa 400 ml"></input></td>
                                    <td><input type="number" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$4000"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$4000"></input></td>
                                    <td><button type="submit" className="btn btn-success" onClick={add_to_db}>Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger" /*onClick={delete_to_db}*/>Eliminar</button></td>    
                                </tr>
                            
                                <tr>
                                    
                                    <td><input type="number" name="nombre" size="6" placeholder="2222"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Pan Bimbo Mediano"></input></td>
                                    <td><input type="number" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><button type="submit" className="btn btn-success">Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            
                                <tr>
                                   
                                    <td><input type="number" name="nombre" size="6" placeholder="3333"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Leche Entera 1100 ml"></input></td>
                                    <td><input type="number" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><button type="submit" className="btn btn-success">Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            
                                <tr>
                                 
                                    <td><input type="number" name="nombre" size="6" placeholder="4444"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Jamón sánduche Zenú 450 gr"></input></td>
                                    <td><input type="number" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$ 9000"></input></td>
                                    <td><input type="number" name="nombre" size="10" placeholder="$ 9000"></input></td>
                                    <td><button type="submit" className="btn btn-success">Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger">Eliminar</button></td>                              
                                    
                                </tr>
                            
                                <tr>
                                    
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>TOTAL</td>
                                    <td>$ 19000</td>
                                </tr>
                            
                        </table>
                        <br></br>

                        <button type="submit" className="btn btn-success">Actualizar todo</button>
                        <br></br>  <br></br>  <br></br>

                    </div>






                </center>
                
            </div>  

        </div>        
    )
    
}

export default EditarVenta;