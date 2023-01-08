import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";

function KerelemUgyszam(props) {
    console.log("KerelemUgyszam rendered");

    return (
        <>
            <Row className="mb-1">
                <Form.Label column sm={4} className="fw-bold">Internetes azonosító:</Form.Label>
                <Col sm={5}><Form.Control id="kerelemUgyszamAzonosito" placeholder={props.ugyszamAzonosito}/></Col>
                <Col sm={1}><Button variant="primary">Keresés</Button></Col>
            </Row>
        </>
    );
}

KerelemUgyszam.propTypes = {
    ugyszamAzonosito: PropTypes.string.isRequired
};

export default KerelemUgyszam;