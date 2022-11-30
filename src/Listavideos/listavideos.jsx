import React, { useState } from "react";

import './listavideos.css'

//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function LitasVideos(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [lick, setLick] = useState('');
  const [cont, setCont] = useState(0)

  function abrirvideo() {
    const urlParams = new URLSearchParams(window.location.search);
    setModalShow(true);
    setCont((cont) =>  cont + 1 );
   setLick(window.location.search);
   
  }
  // função para inserir o url na variavel link
  function MyVerticallyCenteredModal(props) {

    return (
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          {lick}

        </Modal.Body>
      </Modal>
    );
  }
  return <>
    <Table striped bordered hover size="sm" >
      <thead>
        <tr >
          <th scope="col">id </th>
          <th scope="col" className="col-acao">Descrição</th>
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
              <td>{video.descricao}</td>
              <td>
                <span onClick={() => abrirvideo()} > 
                  {video.video}
                </span>
              </td>
              <td>{cont}</td>
              <td>
                <Button onClick={() => props.clickAlterar(video.id)} className='btn-edd'>Editar</Button>
                <Button onClick={() => props.clickDelite(video.id)} variant="danger" >Escluir</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>

    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

    <MyVerticallyCenteredModal

      show={modalShow}
      onHide={() => setModalShow(false)}

    />
  </>
}
export default LitasVideos;

