import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

function KerelemHeader(props) {
    console.log("KerelemHeader rendered");

    return (
        <>
            <Row>
                <Col sm={3} className="fw-bold">Feldolgozás állapota:</Col>
                <Col sm={8}>{props.feldAllapotNev}</Col>                
            </Row>
            <Row>
                <Col sm={3} className="fw-bold">Aktuális hely:</Col>
                <Col sm={8}>{props.aktOkmIrNev} {props.aktOkmIrKod}</Col>                
            </Row>
            <Row>
                <Col sm={3} className="fw-bold">Kiadott okmány:</Col>
                <Col sm={8}>{props.kiadOkmAzon}</Col>                
            </Row>
        </>
    );
}

export default KerelemHeader;