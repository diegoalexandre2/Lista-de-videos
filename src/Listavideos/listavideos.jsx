import React, { useState } from "react";
import './listavideos.css'

//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

//firebase//
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase'

function LitasVideos(props) {
  const [show, setShow] = useState(false);
  const [aid, setAid] = useState(false);
  const [lick, setLick] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deliteVideo(id) {
    alert("Escluir Video " + id);
  }
  function CadastrarVideo() {

    const docRef = addDoc(collection(db, "videos"), {
      id: aid,
      video: lick,
    }).then(() => {


    }).catch((erro) => {

    })
  }

  return <>
    <Table striped bordered hover size="sm" >
      <thead>
        <tr >
          <th scope="col">id </th>
          <th scope="col">videos</th>
          <th scope="col" className="col-acao">QTD Apresentada</th>
          <th scope="col" className="col-acao"></th>
        </tr>
      </thead>
      <tbody >
        {
          props.arrayvideos.map((video) => {
            return <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.video}</td>
              <td></td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  Adicionar
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>ADICIONAR</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Numero de Identificação</Form.Label>
                        <Form.Control onChange={(e) => setAid(e.target.value)}
                          type="text"
                          placeholder="id"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link do Video</Form.Label>
                        <Form.Control onChange={(e) => setLick(e.target.value)}
                          type="text"
                          placeholder="link"
                          autoFocus
                        />
                      </Form.Group>

                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      cancelar
                    </Button>
                    <Button variant="primary" onClick={CadastrarVideo}>
                      Salvar
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button className='btn-edd'>Editar</Button>
                <Button onClick={() => deliteVideo(video.id)} variant="danger" >Escluir</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}
export default LitasVideos;

