import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";

import localStoreHandler from '../../../common/LocalStoreHandler';
import {DOMAIN2, DOMAIN10} from '../../../common/Const';

function KerelemMuvelet(props) {
    console.log("KerelemMuvelet rendered");

    const valuesOkmanytipus = localStoreHandler.getDomain(DOMAIN2);
    const valuesIgenylesOka = localStoreHandler.getDomain(DOMAIN10);
    let valuesOkmanytipusTmp = [];
    let valuesIgenylesOkaTmp = [];

    /** 2016.01.01 elõtti állapot */
    /** 2016.01.01-tõl  (Csere családi állapot vált. miatt, Pótlás eltulajdonítás miatt */
    const kiallOkMod = ["ALAP", "ILLTETEKVALT20160101"];

    let tipusAlap = [
        ["01","02","03","04","05","09"], // Jármûvezetõi engedély
        ["00","09"], // Ideiglenes vez. eng.
        ["00","01","02","03","04","05","","09","10"], //Vezetõi engedely
        ["00","09"],// Nemzetközi
        ["01","02","03","04","05","09"], // Jármûvezetõi igazolvány 
        ["01","04"] // Külföldi
    ];

    let tipusIH = [
        ["01","02","03","04","05","09"], // Jármûvezetõi engedély
        ["00","09"], // Ideiglenes vez. eng.
        ["00","01","02","03","04","05","09","10","11","12"], //Vezetõi engedely
        ["00","09"],// Nemzetközi
        ["01","02","03","04","05","09","11","12"], // Jármûvezetõi igazolvány 
        ["01","04","11","12"] // Külföldi
    ];

    if (props.xrMode){
        tipusAlap[3] = ["00"];
        tipusIH[3] = ["00"];
    } 
    if (props.isKozpontiSzerv) {
        tipusAlap[5] = ["01","04","06"];
        tipusIH[5] = ["01","04","06","11","12"];     
    } 

    let [selectedOkmTip, setSelectedOkmTip] = useState("0");
    let [selectedIgenyOk, setSelectedIgenyOk] = useState("00");    

    useEffect(() => {
        setSelectedOkmTip(props.okmanytipus);
        setSelectedIgenyOk(props.igenylesOka);

        if (props.xrMode) {            
            setSelectedOkmTip("3");
            //console.log("re 3 selectedOkmTip:" + selectedOkmTip); 
        } else if (!props.specSzolgJog) {
            if (props.okmanytipus === "1" || props.okmanytipus === "6") {
                setSelectedOkmTip("0");
                //console.log("re 16 selectedOkmTip:" + selectedOkmTip);
            }
        } else {
            if (props.okmanytipus === "6") {
                setSelectedOkmTip("0");
                //console.log("re 6 selectedOkmTip:" + selectedOkmTip);
            }
        }
    },[]);

    const changeSelectOptionHandler = (event) => {
        setSelectedOkmTip(event.target.value);
        //console.log("changeSelectOptionHandler: " + event.target.value);
    };

    const filterOkmanyTipus = () => {
        valuesOkmanytipus.map((option)=>{
            if (props.xrMode) {
                if (option.key === "3") {
                    valuesOkmanytipusTmp.push(option);
                }
            } else if (!props.specSzolgJog) {
                if (option.key !== "1" && option.key !== "6") {
                    valuesOkmanytipusTmp.push(option);
                }
            } else {
                if (option.key !== "6") {
                    valuesOkmanytipusTmp.push(option);
                }
            }
        });        

        /*valuesOkmanytipusTmp.map((option)=>{ 
            console.log(`filterOkmanyTipus ${option.key} ${option.value}`);
        });*/
        
        filterIgenylesOka();
    }    

    const filterIgenylesOka= () => {
        //console.log("filterIgenylesOka value:" + selectedOkmTip);

        let oka = tipusIH[selectedOkmTip];

        valuesIgenylesOka.map((option)=>{
            if (oka.includes(option.key)) {
                valuesIgenylesOkaTmp.push(option);
            }
        });

        /*valuesIgenylesOkaTmp.map((option)=>{ 
            console.log(`filterIgenylesOka ${option.key} ${option.value}`); 
        });*/
    }

    filterOkmanyTipus();

    return (
        <>
            <Row className="mb-1">
                <Form.Label column sm={4} className="fw-bold">Érintett okmány típusa:</Form.Label>
                <Col sm={5}>
                    <Form.Select name="kerelemOkmanytipus" defaultValue={selectedOkmTip} 
                    onChange={changeSelectOptionHandler}>
                    {valuesOkmanytipusTmp.map((option) => (
                        <option key={option.key} value={option.key}>{option.value}</option>
                    ))}
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mb-1">
                <Form.Label column sm={4} className="fw-bold">Igénylés oka:</Form.Label>
                <Col sm={5}>
                    <Form.Select name="kerelemIgenylesOka" defaultValue={selectedIgenyOk}>
                    {valuesIgenylesOkaTmp.map((option) => (
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