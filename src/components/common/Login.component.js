import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

import AuthService from '../../services/Auth.service';

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        await AuthService.login(username, password).then(
            () => {
                console.log("Login OK");
                window.location.reload(true);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    }

    return (
        <Container>
            <h1>Kérem, jelentkezzen be</h1> 
            <Form onSubmit={handleSubmit}>
                <Form.Group className="col-md-3" controlId="formBasicEmail">
                    <Form.Label>Felhasználónév</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="col-md-3" controlId="formBasicPassword">
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Submit
                </Button>

                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </Form>
        </Container>
    )
}