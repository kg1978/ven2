import React from "react";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel(props) {
    console.log("AdminPanel rendered");

    const datumPic = "####.##.## ##:##:##";

    return (
        <>
            <Row>
                <Col sm={3} className="fw-bold">Rögzítette:</Col><Col sm={3}>{props.rogzUgyint}</Col>
                <Col sm={3} className="fw-bold">Rögzítés dátuma:</Col><Col sm={3}>{props.rogzDatum}</Col>
            </Row>
            <Row>
                <Col sm={3} className="fw-bold">Törölte:</Col><Col sm={3}>{props.torlUgyint}</Col>
                <Col sm={3} className="fw-bold">Törlés dátuma:</Col><Col sm={3}>{props.torlDatum}</Col>
            </Row>
        </>
    );
}

AdminPanel.propTypes = {
    rogzUgyint: PropTypes.string.isRequired, 
    rogzDatum: PropTypes.string.isRequired, 
    torlUgyint: PropTypes.string.isRequired,
    torlDatum: PropTypes.string.isRequired  
};

export default AdminPanel;