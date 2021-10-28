import React from 'react';

function HistorialVentas() {
    return (
        /* Inicio SubTitulo Historial de Ventas Realizadas */
        <div className = "centro">
            <div className="interfazHistorialVentas">
                <center>
                    <h2 className="subtitulo">Historial de Ventas Realizadas</h2>
                    <br></br>
                    <label>
                        Buscar por:{' '}
                            <input type="number" name="nombre" size="25" placeholder="Ingrese el ID de la venta" controId="formBasicBarcode"></input>{' '}
                            <input type="number" name="nombre" size="25" placeholder="Ingrese el ID del cliente" controId="formBasicDescription"></input>{' '}
                            <input type="text" name="nombre" size="25" placeholder="Ingrese el Nombre del cliente" controId="formBasicDescription"></input>{' '}
                            <button type="submit" className="btn btn-success">Buscar</button>      
                    </label>

                    <br></br>
                    <br></br>
                
                <div className="tabla1">
                        <table>
                            <tr>               
                                <th>ID VENTA         </th>
                                <th>ID CLIENTE       </th>
                                <th>NOMBRE CLIENTE   </th>
                                <th>VENDEDOR         </th>
                                <th>VALOR TOTAL      </th>
                                <th>                 </th>
                               
                            </tr>
                                    <tr>
                                        <td>0001            </td>
                                        <td>1096244597      </td>
                                        <td>Adriana Pico    </td>
                                        <td>VENDEDOR1       </td>
                                        <td>1111            </td>
                                        <td>
                                            <button type="submit" className="btn btn-success">Editar Venta</button>
                                        </td>
                                       
                                        </tr>
                                    <tr>
                                        <td>0002            </td>
                                        <td>1094885424      </td>
                                        <td>Julian Pinto    </td>
                                        <td>VENDEDOR2       </td>
                                        <td>2222            </td>
                                        <td>
                                            <button type="submit" className="btn btn-success">Editar Venta</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0003            </td>
                                        <td>1073168165      </td>
                                        <td>Ingrid Bernal   </td>
                                        <td>VENDEDOR3       </td>
                                        <td>3333            </td>
                                        <td>
                                            <button type="submit" className="btn btn-success">Editar Venta</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0004            </td>
                                        <td>1032367158      </td>
                                        <td>Jose Medina     </td>
                                        <td>VENDEDOR4       </td>
                                        <td>4444            </td>
                                        <td>
                                            <button type="submit" className="btn btn-success">Editar Venta</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0005           </td>
                                        <td>1075301352      </td>
                                        <td>Nicolas Ramirez </td>
                                        <td>VENDEDOR5       </td>
                                        <td>5555            </td>
                                        <td>
                                            <button type="submit" className="btn btn-success">Editar Venta</button>
                                        </td>
                                    </tr>
                                                         
                        </table>
                        <br></br>
                        <br></br>
                        
                </div>          


                </center>
                
            </div>  

        </div>        
    )
    
}

export default HistorialVentas;