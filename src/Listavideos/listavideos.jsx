import React, { useEffect, useState } from "react";


//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//firebase
import { collection, getDocs, } from "firebase/firestore";

function LitasVideos() {

  const [videos, setVideo] = useState([]);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection("videos"));
    querySnapshot.forEach((doc) => {
      console.log(doc);
    });
    /*const firestore = getFirestore(app);
   firestore().collection('video').get().then(async function (resultado) {
      await resultado.docs.forEach(function (doc) {
        console.log(doc.id);
      })
    })*/
  }, [])
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
          videos.map((video) => {
            return <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.nome}</td>
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

