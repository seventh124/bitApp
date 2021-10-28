import React from 'react';

function EditarVenta() {
    return (
        /* Inicio SubTitulo Editar Venta */
        <div className = "centro">
            <div className="interfazEditarVenta">
                <center>
                    <h2 className="subtitulo">Editar Venta </h2><br></br>
                    
                    ID Venta {' '}<br></br>
                    <div className>
                        <input type="number" size="10" ></input><br></br>
                        <br></br>

                    </div>
                   

                    <h3 className="tituloEncabezado">Datos del cliente  </h3><br></br>
                    ID cliente:{' '}
                    <input type="text" name="nombre" size="25" placeholder="1096244597"></input><br></br><br></br>
                    Nombres del cliente:{' '}
                    <input type="text" name="nombre" size="25" placeholder="Adriana"></input>
                    {' '}Apellidos del cliente:{' '}
                    <input type="text" name="nombre" size="25" placeholder="Pico"></input><br></br><br></br>
                    Teléfono del cliente:{' '}
                    <input type="text" name="nombre" size="25" placeholder="3184797120"></input>
                    {' '}Direción del cliente:{' '}
                    <input type="text" name="nombre" size="25" placeholder="Calle 16#29-19"></input><br></br><br></br>

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
                                    <td><input type="text" name="nombre" size="6" placeholder="1111"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Gaseosa 400 ml"></input></td>
                                    <td><input type="text" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$4000"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$4000"></input></td>
                                    <td><button type="submit" className="btn btn-success">Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger">Eliminar</button></td>    
                                </tr>
                            
                                <tr>
                                    
                                    <td><input type="text" name="nombre" size="6" placeholder="2222"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Pan Bimbo Mediano"></input></td>
                                    <td><input type="text" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><button type="submit" className="btn btn-success">Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            
                                <tr>
                                   
                                    <td><input type="text" name="nombre" size="6" placeholder="3333"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Leche Entera 1100 ml"></input></td>
                                    <td><input type="text" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$ 3000"></input></td>
                                    <td><button type="submit" className="btn btn-success">Actualizar</button></td>
                                    <td><button type="submit" className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            
                                <tr>
                                 
                                    <td><input type="text" name="nombre" size="6" placeholder="4444"></input></td>
                                    <td><input type="text" name="nombre" size="50" placeholder="Jamón sánduche Zenú 450 gr"></input></td>
                                    <td><input type="text" name="nombre" size="5" placeholder="1"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$ 9000"></input></td>
                                    <td><input type="text" name="nombre" size="10" placeholder="$ 9000"></input></td>
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