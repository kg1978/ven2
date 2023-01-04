import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

function KerelemMuvelet(props) {
    console.log("KerelemMuvelet rendered");

    /** 2016.01.01 elõtti állapot */
    /** 2016.01.01-tõl  (Csere családi állapot vált. miatt, Pótlás eltulajdonítás miatt */
    const kiallOKMod = ["ALAP", "ILLTETEKVALT20160101"];

    return (
        <>
            <Row className="mb-3">
                <Form.Label column sm={4} className="fw-bold">Érintett okmány típusa:</Form.Label>
                <Col sm={5}><Form.Control id="kerelemOkmanytipus" placeholder={props.okmanytipus}/></Col>
            </Row>
            <Row className="mb-3">
                <Form.Label column sm={4} className="fw-bold">Igénylés oka:</Form.Label>
                <Col sm={5}><Form.Control id="kerelemIgenylesOka" placeholder={props.igenylesOka}/></Col>
            </Row>
        </>
    );
}

KerelemMuvelet.propTypes = {
    okmanytipus: PropTypes.string.isRequired,
    igenylesOka: PropTypes.string.isRequired,
    xrMode: PropTypes.bool.isRequired,
    specSzolgJog: PropTypes.bool.isRequired,
    isKozpontiSzerv: PropTypes.bool.isRequired
};

export default KerelemMuvelet;