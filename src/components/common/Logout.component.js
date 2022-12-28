import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

import { withRouter } from '../../common/With-router';
import AuthService from '../../services/Auth.service';

class Logout extends React.Component {   
    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/');
    }

    logout = () => {
        AuthService.logout();
        this.redirectToHome();
    }

    render() {
        return (  
            <Container>     
                <ButtonToolbar>
                    <Button bsStyle="success" bsSize="large" active onClick={this.logout}>
                    Igen
                    </Button>
                    <Button bsStyle="danger" bsSize="large" active onClick={this.redirectToHome}>
                    Nem
                    </Button>
                </ButtonToolbar>
            </Container>     
        )
    }
}

export default withRouter(Logout);