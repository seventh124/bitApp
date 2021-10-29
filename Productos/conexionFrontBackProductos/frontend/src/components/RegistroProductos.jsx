import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';


function RegistroProductos(){

    const [barcode_add, set_barcode_add] = useState(0);
    const [description_add, set_description_add] = useState("");
    const [unit_cost_add, set_unit_cost_add] = useState(0);
    const [state_add, set_state_add] = useState("true");

    const [products, set_products] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/product/list').then((res) =>{
            console.log(res.data.products)
            set_products(res.data.products)
        });
    }, [])

    const add_product_db = () => {
        console.log(barcode_add+description_add+unit_cost_add+state_add)
        Axios.post('http://localhost:3001/api/v1/product/add',{
            barcode: barcode_add,
            description: description_add,
            unit_cost: unit_cost_add,
            state: state_add
        });
    }

    return(
        //EN EL DIV VA EL NOMBRE DE LA CLASE DEL CSS EN className
        <div> 
            <Container>
                <center>
                    REGISTRO DE PRODUCTOS
                </center>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicBarcode">
                        <Form.Label>Código de barras</Form.Label>
                        <Form.Control type="number" placeholder="Digite el código de barras del producto" onChange = {(e) => {
                            set_barcode_add(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Digite el nombre del producto" onChange = {(e) => {
                            set_description_add(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnitCost">
                        <Form.Label>Valor unitario</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese el valor unitario del producto" onChange = {(e) => {
                            set_unit_cost_add(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnitCost">
                        <Form.Check
                        inline
                        label ="DISPONIBLE"
                        name = "estado"
                        type = "radio"
                        id = '1'
                        onChange = {(e) => {
                            set_state_add("true");
                        }}/>
                        <Form.Check
                        inline
                        label ="AGOTADO"
                        name = "estado"
                        type = "radio"
                        id = '0'
                        onChange = {(e) => {
                            set_state_add("false");
                        }}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={add_product_db}>
                        AGREGAR PRODUCTO
                    </Button>
                </Form>

                <hr/>
                <center>
                    CONSULTA DE PRODUCTOS
                </center>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/*Verificar tabla y botones*/}
                            <th>#</th>
                            <th>Código de barras</th>
                            <th>Descripción</th>
                            <th>Valor Unitario</th>
                            <th>Estado</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((value, key) =>
                                <tr>
                                    <td>
                                        {key}
                                    </td>
                                    <td>
                                        {value.barcode}
                                    </td>
                                    <td>
                                        {value.description}
                                    </td>
                                    <td>
                                        {value.unit_cost}
                                    </td>
                                    <td>
                                        {value.state.toString()}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>

        </div>
   );
}
export default RegistroProductos;