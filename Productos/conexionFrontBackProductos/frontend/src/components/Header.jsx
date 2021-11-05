import React from 'react';

const Header = () => {
    return (
        <h4>
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BitApp</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Agregar venta</Nav.Link>
                <Nav.Link href="#features">Mis ventas</Nav.Link>
                <Nav.Link href="#pricing">Productos</Nav.Link>
                <Nav.Link href="#pricing">Vendedores</Nav.Link>
                <Nav.Link href="#pricing">Perfil</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </h4>
        
    );
};

export default Header;