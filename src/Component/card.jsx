import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './card.css';
function Card() {
  const [show, setShow] = useState(true);
    return <> 
    <Alert show={show} variant="success" className='alerta col-6'>
        <div className="d-flex justify-content-end">
        <Alert.Heading>Faça seu Login Para Mais Funções!</Alert.Heading>
          <Button onClick={() => setShow(false)} className='btnclose' variant="outline-success">
           OK
          </Button>
        </div>
      </Alert>
    </>
}
export default Card;