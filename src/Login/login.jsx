import React from "react";
import './login.css';
import { useState } from "react";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
//firebase
import firebase from "../config/firebase";
import "firebase/auth";



function Cliente(props) {
    const [email, setemail] = useState();
    const [senha, setsenha] = useState();
    const [sucesso, setsucesso] = useState();

    function alterarEmail(event) {
        setemail(event.target.value);
    }
    function alterarSenha(event) {
        setsenha(event.target.value);
    }

    function LoginUsuario() {
        
     firebase.auth().signInWithEmailAndPassword(email, senha)
     .then(function(firebaseUser){
        setsucesso('S')
        setsucesso('N')
     })
     .catch(function(error){
            setsucesso('N')
     })
    }

    return <>
        <div className="d-flex form-container">
            <Form className="container">
                <Form.Group  as={Row} className="md-4 email mb-2"  controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Email </Form.Label>
                    <Form.Control onChange={alterarEmail} type="email" placeholder="" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="md-4 senha" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control onChange={alterarSenha} type="password" placeholder="" />
                </Form.Group>

                <Button onClick={LoginUsuario} className="entrar" variant="primary" type="button" >Entrar</Button>
                { 
                sucesso === 'N' ? <Alert className="alert-danger nlogin">Faça seu Login</Alert> : null
               }
                { 
                sucesso === 'S' ? <Alert className="alert-blue sok">ok</Alert> : null
               }
     
            </Form>
        </div>
    </>
}
export default Cliente;