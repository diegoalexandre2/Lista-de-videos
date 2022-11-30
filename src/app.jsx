import React, { useEffect, useState } from 'react';
import Cliente from './Login/login';
import LitasVideos from './Listavideos/listavideos';
import './app.css';
//firebase
import 'firebase/firestore'
import firebase from './config/firebase';


//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from './Component/card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';



function App(props) {

  const [lick, setLick] = useState('');
  const [descri, setDescri] = useState('');
  const [show, setShow] = useState('');
  const [alte, setAlte] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alterClose = () => setAlte(false);
  const alterShow = () => setAlte(true);

  const [videos, setVideos] = useState([]);
  const [busca, setBusca] = useState([]);
  const [texto, setTexto] = useState([]);
  const [delite, setDelite] = useState([]);
  const [adicionado, setAdicionado] = useState([]);
  const db = firebase.firestore();

  function CadastrarVideo() {
    db.collection('videos').add({
      descricao: descri,
      video: lick,

    }).then(() => {
      setAdicionado()
      handleClose()
    }).catch((erro) => {

    })
  }


  function deliteVideo(id) {
    firebase.firestore().collection('videos').doc(id).delete().then(() => {
      setDelite(id)
    })

  };
  function alter() {
    alterShow()
     firebase.firestore().collection('videos').doc(props.id).get()
     .then((resultado) =>{
      setVideos(resultado.data().video);

       db.collection('videos').doc(props.id).update({
      video: lick,

    }).then(() => {
      setAdicionado()
      handleClose()
    }).catch((erro) => {

     })
      
     })
   
  }

  useEffect(() => {

    let listavid = [];
    firebase.firestore().collection('videos').get().then(async function(resultado) {
      await resultado.docs.forEach(function(doc){
       if (doc.data().video.indexOf(busca) >= 0) {
         listavid.push({
           id: doc.id,
           descricao: doc.data().descricao,
           video: doc.data().video,
         })

       } 
      
      })
      setVideos(listavid)
    })

  }, [busca, adicionado, delite]);

  return <div>
    <Cliente />
    <Card />
    <div>
      <div className='row'>
        <div className='col-4'>
          <h1>Lista De Videos</h1>
        </div>
        <div className=" col-4">
          <InputGroup onChange={(e) => setTexto(e.target.value)} className="mb-3 busca">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button onClick={(e) => setBusca(texto)} variant="primary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
        </div>
        <div className=" col-4">

          <Button variant="primary" onClick={handleShow}>
            Adicionar
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADICIONAR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">


            </Form.Group>
            
              <Form.Label>Descição</Form.Label>
              <Form.Control onChange={(e) => setDescri(e.target.value) }
                type="text"
                placeholder=""
                autoFocus
              />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link do Video</Form.Label>
              <Form.Control onChange={(e) => setLick(e.target.value) }
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


      <Modal show={alte} onHide={alterClose}>
        <Modal.Header closeButton>
          <Modal.Title>alterar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">


            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>informe a Alteração</Form.Label>
              
              <input  onChange={(e) => setLick(e.target.value)  }
             
                type="text"
                placeholder=''
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={alter}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      

    
      <LitasVideos arrayvideos={videos} clickDelite={deliteVideo} clickAlterar={alter} />
    </div>
  </div>


}
export default App;