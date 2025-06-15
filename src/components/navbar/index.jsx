import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './index.css';

function Navbarof() {
    return (
        <div className='parentContainer'>
            <Navbar collapseOnSelect expand="lg" className="main">
                <Container>
                    <Navbar.Brand className='headings' as={Link} to="/">Abdul Ahad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/" className='headings'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/projects" className='headings'>Projects</Nav.Link>
                            <Nav.Link as={Link} to="/about" className='headings' >About Me</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='headings' >Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarof;