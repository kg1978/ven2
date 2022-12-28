import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

import JogService from '../../services/Jog.service';

export default class Download extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            joginit: false,
            jogp: 0

        };
    }

    setMessage(x) {
        this.setState({
            message: x
        });
    }

    setJoginit(x) {
        this.setState({
            joginit: x
        });
    }

    setJogp(x) {
        this.setState({
            jogp: x
        });
    }

    download() {
        console.log("download start");

        JogService.init().then(
            () => {
                console.log("JogService.init finished");
                this.setJoginit(true);
                this.setJogp(100);
                this.downloadFinished();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setMessage(resMessage);
            }
        );
    };

    downloadFinished() {
        if (this.state.joginit) {
            window.location.reload(true);
        }
    };

    componentDidMount() {
        this.download();
    }

    render() {
        return (
            <Container>
                <div class="p-3 mb-4"></div>
                <h2>Kérem vájon amíg letötödnek a komponens adatok...</h2>
                <div class="p-3 mb-4">
                    Felhasználó adatainak betöltése
                    <ProgressBar animated variant="success" now={this.state.jogp} />
                </div>
                {this.state.message && (
                    <div className="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>
                )}
            </Container>
        )
    }
}