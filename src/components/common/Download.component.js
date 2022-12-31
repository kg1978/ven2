import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import JogService from '../../services/Jog.service';
import KodokService from '../../services/Kodok.service';

export default function Download () {
    console.log("Download rendered");

    const [message, setMessage] = useState("");
    const [jogp, setJogp] = useState(0);
    const [kodokp, setKodokp] = useState(0);    
    
    useEffect(() => {
        let joginit = false;
        let kodokinit = false;

        async function download1() {
            console.log("JogService start");
        
            JogService.init().then(
                () => {
                    console.log("JogService.init finished");
                    joginit = true;
                    setJogp(100);
                    downloadFinished();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }
            );
        };

        async function download2() {
            console.log("KodokService start");
        
            KodokService.init().then(
                () => {
                    console.log("KodokService.init finished");
                    kodokinit = true;
                    setKodokp(100);
                    downloadFinished();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }
            );
        };

        function downloadFinished() {
            console.log("downloadFinished jog: " + joginit + " kodok: " + kodokinit);
            if (joginit && kodokinit) {
                console.log("downloadFinished ok");
                window.location.reload(true);
            }
        };

        download1();
        download2();
    },[]);    
   
    return (
        <Container>
            <div className="p-3 mb-4"></div>
            <h2>Kérem vájon amíg letötödnek a szükséges adatok...</h2>
            <div className="p-3 mb-4">
                Felhasználó adatainak betöltése
                <ProgressBar animated variant="success" now={jogp} />
            </div>
            <div className="p-3 mb-4">
                Kódtáblák betöltése
                <ProgressBar animated variant="success" now={kodokp} />
            </div>
            {message && (
                <div className="alert alert-danger" role="alert">
                    {message}
                </div>
            )}
        </Container>
    )
}