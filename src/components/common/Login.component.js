import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        <div className="login-container">
            <div className="p-2 mb-2 text-blue">VEN3</div>
            <div className="login-frame">
                <h2>Kérem jelentkezzen be</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Felhasználónév</Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Jelszó</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <div className="text-center mt-3">
                                <Button variant="primary" type="submit" disabled={loading} >
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            Bejelentkezés
                        </Button>
                        </div>
                        {message && (
                                <div className="mt-3">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}