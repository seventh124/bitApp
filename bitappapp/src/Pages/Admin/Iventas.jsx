import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
   { Codigo: 1, Producto: "WD-40", Cantidad: "10"},
   { Codigo: 2, Producto: "Sikaflex 221", Cantidad: "10"},
   { Codigo: 3, Producto: "Destornillador", Cantidad: "10"},
   { Codigo: 4, Producto: "Probador circuitos", Cantidad: "10"},
   { Codigo: 5, Producto: "Llave expansiva", Cantidad: "10"},
];
class Iventas extends React.Component{
state={
data: data,
form:{

    Codigo:'',
    Producto:'',
    Cantidad:'',
},
modalInsertar: false,
modalEditar: false,
}

handleChange=(e)=>{
this.setState({
    form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
    }
});
};

mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true,});
};

ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
};

mostrarModalEditar=(registro)=>{
  this.setState({modalEditar: true, form: registro});
};

ocultarModalEditar=()=>{
  this.setState({modalEditar: false});
};

insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.Codigo=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
}

editar=(dato)=>{
  var contador=0;
  var lista= this.state.data;
  lista.map((registro)=>{
    if(dato.Codigo==registro.Codigo){
      lista[contador].Producto=dato.Producto;
      lista[contador].Cantidad=dato.Cantidad;
    }
    contador++; 
  });
  this.setState({data: lista, modalEditar: false});
};

eliminar=(dato)=>{
  var opcion=window.confirm("Desea Eliminar el Registro"+dato.Codigo);
  if(opcion == true){
    var contador=0;
    var lista = this.state.data;
    lista.map((registro)=>{
      if(dato.Codigo==registro.Codigo){
        lista.splice(contador, 1);
      }
      contador++;
    });
    this.setState({data: lista, modalEditar: false});
  }
}

render(){
    return (
        <>
        <Container>
        <br/>
        <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Venta</Button> {" "}
        <Button color="success"> Aceptar Venta</Button>
        <br/><br/>

        <Table>
            <thead><tr>
              
            <th>Codigo</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Acciones</th></tr></thead>
            <tbody>
            {this.state.data.map((elemento)=>(
                <tr key={elemento.Codigo}>
                    <td>{elemento.Codigo}</td>
                    <td>{elemento.Producto}</td>
                    <td>{elemento.Cantidad}</td>
                    <td>
                      <Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}> Editar</Button>{"  "}
                    <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>

                    </tr>
            ))}


            </tbody>
        </Table>
        </Container>
        
    
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Codigo:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.personaje}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="Cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.anime}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Codigo: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="Cantidad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.ocultarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

{/* Aqui inicia el editar registro */}
     
        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
           <div><h3>Editar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Codigo:</label>
              
              <input className="form-control" readOnly type="text" value ={this.state.form.Codigo}/>
            </FormGroup>
            
            <FormGroup>
              <label>Producto:</label>
              <input className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange} value ={this.state.form.Producto}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="Cantidad"
                type="text"
                onChange={this.handleChange} value ={this.state.form.Cantidad}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary" onClick={()=>this.editar(this.state.form)}>
              Editar
            </Button>

            <Button
              color="danger" onClick={()=>this.ocultarModalEditar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>


    </>
    );
}
}

export default Iventas
