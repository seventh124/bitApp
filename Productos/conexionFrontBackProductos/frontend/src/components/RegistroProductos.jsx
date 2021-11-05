import {useState, useEffect} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function RegistroProductos(){

    const [barcode_add, set_barcode_add] = useState(0);
    const [description_add, set_description_add] = useState("");
    const [unit_cost_add, set_unit_cost_add] = useState(0);
    const [state_add, set_state_add] = useState("true");

    const [barcode_update, set_barcode_update] = useState(0);
    const [description_update, set_description_update] = useState("");
    const [unit_cost_update, set_unit_cost_update] = useState(0);
    const [state_update, set_state_update] = useState("true");
    const [id_update, set_id_update] = useState(0);

    const [products, set_products] = useState([]);

    const [busqueda, set_busqueda] = useState ("");

    const peticionGet = async() => {
      Axios.get('http://localhost:3001/api/v1/product/list').then(res =>{
          console.log(res.data.products);
          set_products(res.data.products);
      }).catch(error=>{
        console.log(error);
      })
    }

    const handleChange=e=>{
      set_busqueda(e.target.value);
      filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
      var resultadosBusqueda=products.filter((elemento)=>{
        if(elemento.barcode.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.description.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return elemento;
        }
      });
      set_products(resultadosBusqueda);
    }
  useEffect(()=>{
  peticionGet();
  },[])

    const add_product_db = () => {
        console.log(barcode_add+description_add+unit_cost_add+state_add)
        Axios.post('http://localhost:3001/api/v1/product/add',{
            barcode: barcode_add,
            description: description_add,
            unit_cost: unit_cost_add,
            state: state_add
        });
    }

    const delete_product = (_id) =>{
      Axios.delete('http://localhost:3001/api/v1/product/delete/' + _id)
    }

    const update_product = (_id) =>{
        console.log(_id)
        Axios.put('http://localhost:3001/api/v1/product/update', {
            _id: _id,
            barcode: barcode_update,
            description: description_update,
            unit_cost: unit_cost_update,
            state: state_update
        });       
    }

    return(
        <div>
                <div className ="centro">
                    <br></br>
                    <h2><center>¡Bienvenidos!</center></h2>
                    <br></br>
                </div> 
            <Container>
                    <h3>REGISTRO DE PRODUCTOS</h3>
                    <br></br>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicBarcode">
                        <Form.Label><h4>Código de barras</h4></Form.Label>
                        <Form.Control type="number" placeholder="Digite el código de barras del producto" onChange = {(e) => {
                            set_barcode_add(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label><h4>Descripción</h4></Form.Label>
                        <Form.Control type="text" placeholder="Digite el nombre del producto" onChange = {(e) => {
                            set_description_add(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnitCost">
                        <Form.Label><h4>Valor unitario</h4></Form.Label>
                        <Form.Control type="number" placeholder="Digite el valor unitario del producto en números" onChange = {(e) => {
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


                    <Button variant="success" type="submit" onClick={add_product_db}>
                        AGREGAR PRODUCTO
                    </Button>
                </Form>

                <hr/>
                    <br></br>
                    <h3>CONSULTA DE PRODUCTOS</h3>
                    <br></br>
                
                <div className="containerInput">
                    <input
                      className="form-control inputBuscar"
                      value={busqueda}
                      placeholder="Búsqueda por Codigo de barras o Descripcion"
                      onChange={handleChange}
                    />
                    <button className="btn btn-success">
                      <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <br></br>
                    <br></br>
                </div>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
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
                                    <td>
                                      <Button variant = 'warning' onClick ={
                                        ()=>{
                                          set_id_update(value._id);
                                          set_barcode_update(value.barcode);
                                          set_description_update(value.description);
                                          set_unit_cost_update(value.unit_cost);
                                          set_state_update(value.state.toString());

                                          document.getElementById('barcode_update').defaultValue = value.barcode;
                                          document.getElementById('description_update').defaultValue = value.description;
                                          document.getElementById('unit_cost_update').defaultValue = value.unit_cost;
                                        }
                                      }>EDITAR</Button>
                                    </td>
                                    <td>
                                      <Button variant = 'danger' type ="sumbit" onClick ={()=> delete_product(value._id)}>ELIMINAR</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    <br></br>
                </Table>
                <hr/>
                    <br></br>
                    <h3>ACTUALIZACIÓN DE PRODUCTOS</h3>
                    <br></br>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicBarcode">
                        <Form.Label><h4>Código de barras</h4></Form.Label>
                        <Form.Control disabled="true" id="barcode_update" type="number"  onChange = {(e) => {
                            set_barcode_update(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label><h4>Descripción</h4></Form.Label>
                        <Form.Control id ="description_update" type="text" placeholder="Digite el nombre del producto" onChange = {(e) => {
                            set_description_update(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnitCost">
                        <Form.Label><h4>Valor unitario</h4></Form.Label>
                        <Form.Control id="unit_cost_update" type="number" placeholder="Ingrese el valor unitario del producto en números" onChange = {(e) => {
                            set_unit_cost_update(e.target.value);
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
                            set_state_update("true");
                        }}/>
                        <Form.Check
                        inline
                        label ="AGOTADO"
                        name = "estado"
                        type = "radio"
                        id = '0'
                        onChange = {(e) => {
                            set_state_update("false");
                        }}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={
                        ()=>{
                            update_product(id_update)}}>
                        ACTUALIZAR PRODUCTO
                    </Button>
                    <br></br>
                    <br></br>
                </Form>
                
            </Container>

        </div>
   );
}
export default RegistroProductos;