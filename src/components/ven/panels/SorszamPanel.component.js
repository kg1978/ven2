import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

function SorszamPanel(props) {
    console.log("SorszamPanel rendered");

    return (
        <>
            <Row className="mb-3">
                <Form.Label column sm={4} className="fw-bold">{props.kiallitoSzervTxt}:</Form.Label>
                <Col sm={5}><Form.Control id="sorszam.kiallitoSzerv" placeholder=""/></Col>
            </Row>
            <Row className="mb-3">
                <Form.Label column sm={4} className="fw-bold">{props.kiallitasEvSorszamTxt}:</Form.Label>
                <Col sm={2}><Form.Control id="sorszam.kiallitasEv" placeholder={props.kiallitasEv}/></Col>
                <Col sm={1} className="text-center"><h1>/</h1></Col>
                <Col sm={2}><Form.Control id="sorszam.kiallitasSorszam" placeholder={props.kiallitasSorszam}/></Col>
            </Row>
        </>
    );
}

SorszamPanel.propTypes = {
    kiallitoSzervTxt: PropTypes.string, 
    kiallitoSzerv: PropTypes.string.isRequired, 
    kiallitasEvSorszamTxt: PropTypes.string,
    kiallitasEv: PropTypes.string.isRequired,  
    kiallitasSorszam: PropTypes.string.isRequired 
};

SorszamPanel.defaultProps = {
    kiallitoSzervTxt: 'Kiállító szerv',
    kiallitasEvSorszamTxt: 'Kiállítás év/sorszám',
};

export default SorszamPanel;