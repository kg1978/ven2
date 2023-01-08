import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

function KerelemWuXr(props) {
    console.log("KerelemWuXr rendered");

    const [selectedValue, setSelectedValue] = useState(props.selected);

    const handleChange = e => {
        setSelectedValue(e.target.value);
    }

    return (
        <>
            <Row className="mb-1">
                <Form.Label column sm={4} className="fw-bold">Elekt. ügyi. forrása:</Form.Label>
                <Col sm={2}>
                    <Form.Check
                    type="radio"
                    label="WÜ"
                    value="wu"
                    name="kerelem.wuxr"
                    onChange={handleChange}
                    checked={selectedValue === 'wu'}
                    />
                </Col>
                <Col sm={2}>
                    <Form.Check
                    type="radio"
                    label="XR"
                    value="xr"
                    name="kerelem.wuxr"
                    onChange={handleChange}
                    checked={selectedValue === 'xr'}
                    />
                </Col>
            </Row>
        </>
    );
}

KerelemWuXr.propTypes = {
    selected: PropTypes.string.isRequired
};

export default KerelemWuXr;