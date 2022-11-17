import React from "react";


//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function LitasVideos(props) {

  return <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr >
          <th>id </th>
          <th>videos</th>
          <th>QTD Apresentada</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
         props.arrayvideos.map((video) => {
            return <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.video}</td>
              <td></td>
              <th><Button variant="primary" type="button">Editar</Button></th>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}
export default LitasVideos;

