import React, { useState, useEffect } from "react";

import './listavideos.css'

//firebase
import 'firebase/firestore'
// import firebase from "../config/firebase";

//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function LitasVideos(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [linck, setLinck] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(props.arrayvideos);
   
  });

  function abrirvideo(video) {
    let listavideos = videos;
    console.log(listavideos)
    let index = videos.findIndex(item => item.id === video.id);
   
    listavideos[index].views++
    

   
    setLinck(video.video)
    setModalShow(true);

  }

  const handleClose = () => setModalShow(false);

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
          videos.map((video) => {
            return <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.descricao}</td>
              <td>
                <span className="vd" onClick={() => abrirvideo(video)} >
                  {video.video}
                </span>
              </td>
              <td>{video.views}</td>
              <td >

                <Button onClick={() => props.clickAlterar(video.id)} className='btn-edd'>Editar</Button>
                <Button onClick={() => props.clickDelite(video.id)} variant="danger" >Escluir</Button>

              </td>
            </tr>
          })
        }
      </tbody>
    </Table>

    <Modal
      show={modalShow}
      onHide={handleClose}
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body>
        <div className="ratio ratio-16x9">
          <iframe src={linck} title="YouTubevideo" allowFullScreen></iframe>
        </div>
      </Modal.Body>
    </Modal>

    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}
  </>
}
export default LitasVideos;

