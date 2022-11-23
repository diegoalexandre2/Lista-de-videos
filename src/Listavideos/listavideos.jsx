import React from "react";


//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


function LitasVideos(props) {

  return <>
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr >
          <th>id </th>
          <th>videos</th>
          <th>QTD Apresentada</th>
        </tr>
      </thead>
      <tbody>
        {
         props.arrayvideos.map((video) => {
            return <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.video}</td>
              <td></td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}
export default LitasVideos;

