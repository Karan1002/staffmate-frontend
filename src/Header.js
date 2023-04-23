import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./staff-mate-low-resolution-logo-color-on-transparent-background-removebg-preview (1).png"
                            width="90"
                            height="50"
                            className="d-inline-block align"
                        />{' '}
                        Staff Mate
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About us</Nav.Link>
                            <Nav.Link href="#pricing">Contact us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Log in
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;