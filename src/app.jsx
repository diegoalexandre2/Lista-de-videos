import React, { useEffect, useState } from 'react';
import Cliente from './Login/login';
import LitasVideos from './Listavideos/listavideos';

//firebase
import { collection, getDocs, } from "firebase/firestore";
import { db } from "./config/firebase";
//Bootstrep//
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        let listavid = [];
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "videos"));
            querySnapshot.forEach((doc) => {
                listavid.push(
                    {
                        id: doc.data().id,
                        video: doc.data().video,
                    }
                );
            });
            setVideos(listavid);
        };
        getUsers();
    }, []);

    return <div>
        <Cliente />
        <h1>Lista De Videos</h1>

        <div >
            <Button variant="primary" type="button">Pesquisar</Button>
        </div>
        <LitasVideos arrayvideos={videos} />
    </div>

}
export default App;