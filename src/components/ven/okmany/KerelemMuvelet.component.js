import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

import localStoreHandler from '../../../common/LocalStoreHandler';
import {DOMAIN2, DOMAIN10} from '../../../common/Const';

function KerelemMuvelet(props) {
    console.log("KerelemMuvelet rendered");

    /** 2016.01.01 elõtti állapot */
    /** 2016.01.01-tõl  (Csere családi állapot vált. miatt, Pótlás eltulajdonítás miatt */
    const kiallOKMod = ["ALAP", "ILLTETEKVALT20160101"];
    const valuesOkmanytipus = localStoreHandler.getDomain(DOMAIN2);
    const valuesIgenylesOka = localStoreHandler.getDomain(DOMAIN10);

    return (
        <>
            <Row className="mb-1">
                <Form.Label column sm={4} className="fw-bold">Érintett okmány típusa:</Form.Label>
                <Col sm={5}>
                    <Form.Select name="kerelemOkmanytipus" defaultValue={props.okmanytipus}>
                    {valuesOkmanytipus.map((option) => (
                        <option key={option.key} value={option.key}>{option.value}</option>
                    ))}
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mb-1">
                <Form.Label column sm={4} className="fw-bold">Igénylés oka:</Form.Label>
                <Col sm={5}>
                    <Form.Select name="kerelemIgenylesOka" defaultValue={props.igenylesOka}>
                    {valuesIgenylesOka.map((option) => (
                        <option key={option.key} value={option.key}>{option.value.toString()}</option>
                    ))}
                    </Form.Select>
                </Col>
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