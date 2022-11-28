import React from "react";

import './listavideos.css'

//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function LitasVideos(props) {
  // const [lick, setLick] = useState('');

  // função para inserir o url na variavel link

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
              <td>
                <span>
                  {video.video}
                </span>
              </td>
              <td></td>
              
              <td>  
                <Button onClick={() => props.clickAlterar(video.id)}  className='btn-edd'>Editar</Button>
                <Button onClick={() => props.clickDelite(video.id)} variant="danger" >Escluir</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    {/* modal
    {lick} */}
  </>
}
export default LitasVideos;

