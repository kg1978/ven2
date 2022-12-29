import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import withRouter from '../../common/With-router';

import 'bootstrap/dist/css/bootstrap.css';

import AuthService from '../../services/Auth.service';

class Logout extends React.Component {     

    redirectToHome = () => {
        console.log("redirectToHome");
        this.props.navigate("/");
    }

    logout = () => {
        AuthService.logout();
        this.props.navigate("/");
        window.location.reload(true);
    }

    render() {
        return (  
            <Container>
                <div className="row">
                    <div className="col text-center">
                        <h2>Biztosan kijelentkezik?</h2>
                        <Button variant="success" size="lg" onClick={this.logout}>
                        Igen
                        </Button>{' '}
                        <Button variant="danger" size="lg" onClick={this.redirectToHome}>
                        Nem
                        </Button>
                    </div>
                </div>
            </Container>     
        )
    }
}

export default withRouter(Logout);