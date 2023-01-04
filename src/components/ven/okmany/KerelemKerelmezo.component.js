import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

function KerelemKerelmezo(props) {
    console.log("KerelemKerelmezo rendered");

    const [selectedValue, setSelectedValue] = useState(props.selected);

    const handleChange = e => {
        setSelectedValue(e.target.value);
    }

    return (
        <>
            <Row className="mb-3">
                <Form.Label column sm={4} className="fw-bold">Kérelmező:</Form.Label>
                <Col sm={2}>
                    <Form.Check
                    type="radio"
                    label="Polgar"
                    value="polgar"
                    name="kerelmezo.polgar"
                    onChange={handleChange}
                    checked={selectedValue === 'polgar'}
                    />
                </Col>
                <Col sm={2}>
                    <Form.Check
                    type="radio"
                    label="Hivatal"
                    value="hivatal"
                    name="kerelmezo.hivatal"
                    onChange={handleChange}
                    checked={selectedValue === 'hivatal'}
                    />
                </Col>
            </Row>
        </>
    );
}

KerelemKerelmezo.propTypes = {
    selected: PropTypes.string.isRequired
};

export default KerelemKerelmezo;