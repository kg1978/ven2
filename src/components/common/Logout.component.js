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
                <div className="container text-center col-12">
                    <h2 className="p-4 mb-2">Biztosan kijelentkezik?</h2>
                    <Button className="m-2" variant="success" size="lg" onClick={this.logout}>
                        Igen
                    </Button>
                    <Button className="m-2" variant="danger" size="lg" onClick={this.redirectToHome}>
                        Nem
                    </Button>
                </div>
            </Container>     
        )
    }
}

export default withRouter(Logout);