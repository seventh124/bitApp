import React from 'react';
import Card from 'react-bootstrap/Card'

const Footer = () => {
    return (
        <Card className="text-center">
            
        <Card.Body>
            <Card.Title>¡Contáctenos!</Card.Title>
            <Card.Text>
                Teléfono: 1234567890 <br></br>
                Dirección: Calle x # xx-xx <br></br>
                E-mail:<br></br>
                Redes sociales:<br></br>
            </Card.Text>
        </Card.Body>
        </Card>
    );
};

export default Footer;