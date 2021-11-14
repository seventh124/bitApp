import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import swal from 'sweetalert';

const Misventas = () => {
        //  PARA ADD LA VENTA Y PRODUCTO
        const[IdVenta_add, set_IdVenta_add] = useState(0);
        const [IdCliente_add, set_IdCliente_add] = useState(0);
        const [NombreCliente_add, set_NombreCliente_add] = useState("");
        const [ApellidoCliente_add, set_ApellidoCliente_add] = useState("");
        const [NumeroCliente_add, set_NumeroCliente_add] = useState(0);
        const [DireccionCliente_add, set_DireccionCliente_add] = useState("");
    
        const [barcode_add, set_barcode_add] = useState(0);
        const [description_add, set_description_add] = useState("");
        const [Cantidad_add, set_Cantidad_add] = useState(0);
        const [unit_cost_add, set_unit_cost_add] = useState(0);
        const [ValorTotal_add, set_ValorTotal_add] = useState(0);
    
        //  PARA update LA VENTA Y PRODUCTO
        const [id_update, set_id_update] = useState(0);
        const [IdVenta_update, set_IdVenta_update] = useState(0);
        const [IdCliente_update, set_IdCliente_update] = useState(0);
        const [NombreCliente_update, set_NombreCliente_update] = useState("");
        const [ApellidoCliente_update, set_ApellidoCliente_update] = useState("");
        const [NumeroCliente_update, set_NumeroCliente_update] = useState(0);
        const [DireccionCliente_update, set_DireccionCliente_update] = useState("");
    
        const [barcode_update, set_barcode_update] = useState(0);
        const [description_update, set_description_update] = useState("");
        const [Cantidad_update, set_Cantidad_update] = useState(0);
        const [unit_cost_update, set_unit_cost_update] = useState(0);
        const [ValorTotal_update, set_ValorTotal_update] = useState(0);
        
        
        //PARA EL BOTON DE ALERTA
        const mostrarAlerta = () => {
            swal("¡Venta añadida con exito!");
        }
    
        const alertaEliminarVenta = () => {
            swal("¡Venta eliminada!");
        }
    
        const alertaVentaActualizada = () => {
            swal("¡Venta Actualizada Correctamente!");
        }
    
      
        
        //AQUI SE GUARDAN LAS VENTAS
        const [ventas, set_ventas] = useState([]);
    
        //Esto serviria para listar el historial de las ventas
    
            useEffect(() => {
                Axios.get('http://localhost:3001/api/v1/venta/list').then((res) => {
                    console.log(res.data.ventas)
                    set_ventas(res.data.ventas)
                });
                
            }, [] )
        
    
            // ESTO ES PARA CREAR LA VENTA Y MANDARLO A LA DB
        
        const add_venta_db = () => {
            console.log(IdVenta_add + IdCliente_add + NombreCliente_add + ApellidoCliente_add + NumeroCliente_add + DireccionCliente_add + barcode_add + description_add + Cantidad_add + unit_cost_add + ValorTotal_add)
    
            Axios.post('http://localhost:3001/api/v1/venta/add', {
                IdVenta: IdVenta_add,
                IdCliente: IdCliente_add,
                NombreCliente: NombreCliente_add,
                ApellidoCliente: ApellidoCliente_add,
                NumeroCliente: NumeroCliente_add,
                DireccionCliente: DireccionCliente_add,
                barcode: barcode_add,
                description: description_add,
                Cantidad: Cantidad_add,
                unit_cost: unit_cost_add,
                ValorTotal: ValorTotal_add
    
            })
    
        }
    // PARA ELIMINAR UNA VENTA DEL HISTORIAL DE VENTA
        const delete_venta = (_id) => {
            Axios.delete('http://localhost:3001/api/v1/venta/delete/' + _id)
        }
    //para ACTUALIZAR LA VENTA EN LA DB
        const update_venta = (_id) => {
            Axios.put('http://localhost:3001/api/v1/venta/update', {
                _id: _id,
                IdVenta: IdVenta_update,
                IdCliente: IdCliente_update,
                NombreCliente: NombreCliente_update,
                ApellidoCliente: ApellidoCliente_update,
                NumeroCliente: NumeroCliente_update,
                DireccionCliente: DireccionCliente_update,
                barcode: barcode_update,
                description: description_update,
                Cantidad: Cantidad_update,
                unit_cost: unit_cost_update,
                ValorTotal: ValorTotal_update
    
            })
        }
    
        return (
    
            <div>
                <div className = "centro"><br></br><br></br>
                    <center>
                        <h2>¡Bienvenidos! </h2><br></br>
    
                        <h3 className="subtitulo">Registro de Ventas </h3><br></br>
                    </center> 
                </div>
    
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="IdVenta">
                            <Form.Label>Id Venta: </Form.Label>
                                <Form.Control type="number" placeholder="Ingrese el Id de la venta" onChange={(e) => {
                                    set_IdVenta_add(e.target.value);
                                }} />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="IdCliente">
                            <Form.Label>Id Cliente: </Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el numero de identificación del cliente" onChange={(e) => {
                                    set_IdCliente_add(e.target.value);
                                }} />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="NombreCliente">
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control type="string" placeholder="Ingrese el nombre del cliente" onChange={(e) => {
                                    set_NombreCliente_add(e.target.value);
                                }} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="ApellidoCliente">
                            <Form.Label>Apellido: </Form.Label>
                            <Form.Control type="string" placeholder="Ingrese el apellido del cliente" onChange={(e) => {
                                    set_ApellidoCliente_add(e.target.value);
                                }} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="NumeroCliente">
                            <Form.Label>Numero: </Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el numero de telefono o celular del cliente" onChange={(e) => {
                                    set_NumeroCliente_add(e.target.value);
                                }} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="DireccionCliente">
                            <Form.Label>Dirección: </Form.Label>
                            <Form.Control type="string" placeholder="Ingrese la dirección del cliente" onChange={(e) => {
                                    set_DireccionCliente_add(e.target.value);
                                }} />
                        </Form.Group>
                    </Form>
    
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo de barras</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Valor Unitario</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td>
                                    <Form.Group className="mb-3" controlId="barcode">
                                        <Form.Control type="number" placeholder="Ingrese el codigo de barras del producto" onChange={(e) => {
                                        set_barcode_add(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Control type="string" placeholder="Ingrese la descripción del producto" onChange={(e) => {
                                        set_description_add(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="Cantidad">
                                        <Form.Control type="number" placeholder="Ingrese la cantidad de productos" onChange={(e) => {
                                        set_Cantidad_add(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="unit_cost">
                                        <Form.Control type="number" placeholder="Ingrese el costo unitario del producto" onChange={(e) => {
                                        set_unit_cost_add(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="ValorTotal">
                                        <Form.Control type="number" placeholder="ValorTotal" onChange={(e) => {
                                        set_ValorTotal_add(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
    
                    <br></br>
                    <br></br>
    
                                
                    <Button variant="primary" onClick={()=>add_venta_db(mostrarAlerta())}>
                            Añadir Venta
                    </Button> {" "}
    
                 
                    <br></br>
                    <br></br>
    
                    <hr />
                    <div className = "centro"><br></br>
                        <center>
                            <h3 className="subtitulo">Historial Ventas </h3><br></br>
                        </center> 
                    </div>
    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id Venta</th>
                                <th>Id Cliente</th>
                                <th>Nombre Cliente </th>
                                <th>Apellido Cliente</th>
                                <th>Numero Cliente </th>
                                <th>Dirección Cliente</th>
                                <th>Código Producto </th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Valor Unitario</th>
                                <th>Valor Total</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {
                                ventas.map((value, key) =>
                                    <tr>
                                        <td> {key} </td>
                                        <td>{value.IdVenta}</td>
                                        <td>{value.IdCliente}</td>
                                        <td>{value.NombreCliente}</td>
                                        <td>{value.ApellidoCliente}</td>
                                        <td>{value.NumeroCliente}</td>
                                        <td>{value.DireccionCliente}</td>
                                        <td>{value.barcode}</td>
                                        <td>{value.description}</td>
                                        <td>{value.Cantidad}</td>
                                        <td>{value.unit_cost}</td>
                                        <td>{value.ValorTotal}</td>
                                        <td>
                                            <Button variant="warning" onClick={() => {
                                                set_id_update(value._id);
                                                set_IdVenta_update(value.IdVenta);
                                                set_IdCliente_update(value.IdCliente);
                                                set_NombreCliente_update(value.NombreCliente);
                                                set_ApellidoCliente_update(value.ApellidoCliente);
                                                set_NumeroCliente_update(value.NumeroCliente);
                                                set_DireccionCliente_update(value.DireccionCliente);
                                                set_barcode_update(value.barcode);
                                                set_description_update(value.description);
                                                set_Cantidad_update(value.Cantidad);
                                                set_unit_cost_update(value.unit_cost);
                                                set_ValorTotal_update(value.ValorTotal);
    
                                                document.getElementById('IdVenta_update').defaultValue = value.IdVenta;
                                                document.getElementById('IdCliente_update').defaultValue = value.IdCliente;
                                                document.getElementById('NombreCliente_update').defaultValue = value.NombreCliente;
                                                document.getElementById('ApellidoCliente_update').defaultValue = value.ApellidoCiente;
                                                document.getElementById('NumeroCliente_update').defaultValue = value.NumeroCliente;
                                                document.getElementById('DireccionCliente_update').defaultValue = value.DireccionCliente;
                                                document.getElementById('barcode_update').defaultValue = value.barcode;
                                                document.getElementById('description_update').defaultValue = value.description;
                                                document.getElementById('Cantidad_update').defaultValue =value.Cantidad;
                                                document.getElementById('unit_cost_update').defaultValue = value.unit_cost;
                                                document.getElementById('ValorTotal_update').defaultValue =value.ValorTotal;
                                                
                                            }}>
                                                Editar
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant= 'danger' onClick={()=> delete_venta(value._id, alertaEliminarVenta())}> Eliminar
                                            </Button>
                                        </td>
                                    </tr>              
                                )
                            }                        
                        </tbody>
                    </Table>
    
                    <hr />
                    <div className = "centro"><br></br>
                        <center>
                            <h3 className="subtitulo">Editar Ventas </h3><br></br>
                        </center> 
                    </div>
    
                    <Form>
                        <Form.Group className="mb-3" controlId="IdVenta">
                            <Form.Label>Id Venta: </Form.Label>
                                <Form.Control disabled='true' id='IdVenta_update' type="number" placeholder="Ingrese el Id de la venta" onChange={(e) => {
                                    set_IdVenta_update(e.target.value);
                                }} />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="IdCliente">
                            <Form.Label>Id Cliente: </Form.Label>
                            <Form.Control  id='IdCliente_update' type="number" placeholder="Ingrese el numero de identificación del cliente" onChange={(e) => {
                                    set_IdCliente_update(e.target.value);
                                }} />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="NombreCliente">
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control id='NombreCliente_update' type="string" placeholder="Ingrese el nombre del cliente" onChange={(e) => {
                                    set_NombreCliente_update(e.target.value);
                                }} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="ApellidoCliente">
                            <Form.Label>Apellido: </Form.Label>
                            <Form.Control id='ApellidoCliente_update'type="string" placeholder="Ingrese el apellido del cliente" onChange={(e) => {
                                    set_ApellidoCliente_update(e.target.value);
                                }} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="NumeroCliente">
                            <Form.Label>Numero: </Form.Label>
                            <Form.Control id='NumeroCliente_update' type="number" placeholder="Ingrese el numero de telefono o celular del cliente" onChange={(e) => {
                                    set_NumeroCliente_update(e.target.value);
                                }} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="DireccionCliente">
                            <Form.Label>Dirección: </Form.Label>
                            <Form.Control id='DireccionCliente_update' type="string" placeholder="Ingrese la dirección del cliente" onChange={(e) => {
                                    set_DireccionCliente_update(e.target.value);
                                }} />
                        </Form.Group>
                    </Form>
    
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo de barras</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Valor Unitario</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td>
                                    <Form.Group className="mb-3" controlId="barcode">
                                        <Form.Control id='barcode_update' type="number" placeholder="Ingrese el codigo de barras del producto" onChange={(e) => {
                                        set_barcode_update(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Control id='description_update' type="string" placeholder="Ingrese la descripción del producto" onChange={(e) => {
                                        set_description_update(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="Cantidad">
                                        <Form.Control id='Cantidad_update' type="number" placeholder="Ingrese la cantidad de productos" onChange={(e) => {
                                        set_Cantidad_update(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="unit_cost">
                                        <Form.Control id='unit_cost_update' type="number" placeholder="Ingrese el costo unitario del producto" onChange={(e) => {
                                        set_unit_cost_update(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group className="mb-3" controlId="ValorTotal">
                                        <Form.Control id='ValorTotal_update' type="number" placeholder="ValorTotal" onChange={(e) => {
                                        set_ValorTotal_update(e.target.value);
                                    }} />
                                    </Form.Group>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
                    <br></br>
                    <br></br>
    
                                
                    <Button variant="warning" onClick={() => {
                        update_venta(id_update, alertaVentaActualizada())
                    }} >
                            Actualizar
                    </Button>
    
                    <br></br>
                    <br></br>
    
    
    
                </Container>
                
            </div>
            
        )
         
    
}


export default Misventas
