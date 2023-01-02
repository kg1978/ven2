import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

import localStoreHandler from '../../../common/LocalStoreHandler';

import AdminPanel from '../panels/AdminPanel.component'
import SorszamPanel from '../panels/SorszamPanel.component';
import KerelemHeader from './KerelemHeader.component';
import KerelemWuXr from './KerelemWuXr.component';

function KerelemFeldolgozas() {
    console.log("KerelemFeldolgozas rendered");

    const listNemKivalaszthatoOkmir = ["AXXBK", "AXXOT", "AXXAH"];
    const KOZPSZERV1 = "AXXCP";
    const KOZPSZERV2 = "AXXXK";
    const AXXCP = "AXXCP";
    const MODENORMAL = 1;
    const MODEXR = 2;

    const [xrMode, setXrMode] = useState(false);
    const [specSzolgJog, setSpecSzolgJog] = useState(false);
    const [kategoriaEllJog, setKategoriaEllJog] = useState(false);
    const [pirRO54Enabled, setPirRO54Enabled] = useState(false);
    const [cimtipusChangeEnabled, setCimtipusChangeEnabled] = useState(false);
    const [isAXXCP, setIsAXXCP] = useState(false);
    const [isKozpontiSzerv, setIsKozpontiSzerv] = useState(false);

    let rogzUgyint = "Kis Anna";
    let rogzDatum = "2022.01.01 10:59:59";
    let torlUgyint = "NAgy Anna";
    let torlDatum = "2023.01.01 10:59:59";
    
    let feldAllapotNev = "Folyamatban";
    let aktOkmIrNev = "Központi OKM.";
    let aktOkmIrKod = "AXXA34";
    let kiadOkmAzon = "1A233WSR";
    let kiallitasEv = "2023";
    let kiallitasSorszam = "00001"

    let wuXr = true;

    return (
        <Container>
            <Form>
                <div className="container text-center col-12">
                    <h1 className="pt-3">Kérelem</h1>
                </div>
                <hr/>  
                <AdminPanel rogzUgyint={rogzUgyint} rogzDatum={rogzDatum} 
                        torlUgyint={torlUgyint} torlDatum={torlDatum}/>                   
                <KerelemHeader feldAllapotNev={feldAllapotNev} aktOkmIrNev={aktOkmIrNev} 
                     aktOkmIrKod={aktOkmIrKod} kiadOkmAzon={kiadOkmAzon}/>
                <hr/>

                { wuXr && <KerelemWuXr selected=""/> }

                <SorszamPanel kiallitoSzervTxt="Rögzítő okmányiroda" kiallitoSzerv={aktOkmIrNev} 
                        kiallitasEvSorszamTxt="Rögzítés éve/sorszáma" kiallitasEv={kiallitasEv} 
                        kiallitasSorszam={kiallitasSorszam}/>
                    
                <Row><Col>Kérelmező: </Col></Row>
            </Form>
        </Container>   
    );
}

export default KerelemFeldolgozas;