import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/Home.css';

export const Home = () => {
    return <main>
        <Container className="container-fluid">
            <Row className='justify-content-center flex-grow-0'>
                <Card className='text-center bg-secondary text-white my-5'>
                    <Card.Body>
                        <h1>Welcome to DevMovie PLAY!, all the movies in one place</h1>
                    </Card.Body>
                </Card>
                <div id="splash-screen">
                    <div></div>
                    <div class="splash-opacity"></div>
                </div>
            </Row>
        </Container>
    </main>;
}