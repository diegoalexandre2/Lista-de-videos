import React, { useEffect, useState } from 'react';
import Cliente from './Login/login';
import LitasVideos from './Listavideos/listavideos';
import './app.css';
//firebase
import { collection, getDocs, } from "firebase/firestore";
import { db } from "./config/firebase";
//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from './Component/card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {

    const [videos, setVideos] = useState([]);
    const [busca, setBusca] = useState([]);
    const [texto, setTexto] = useState([]);


    useEffect(() => {
        let listavid = [];
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "videos"));
            querySnapshot.forEach((doc) => {
                if (doc.data().video.indexOf(busca) >= 0) {
                    listavid.push(
                        {
                            id: doc.data().id,
                            video: doc.data().video,
                        });
                }
            });
            setVideos(listavid);
        };
        getUsers();
    }, [busca]);

    return <div>
        <Cliente />
        <Card />
        <div className='row'>
            <div className='col-4'>
                <h1>Lista De Videos</h1>
            </div>

            <div className=" col-6 ">
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
            <LitasVideos arrayvideos={videos} />
        </div>
    </div>


}
export default App;