import { Navbar, Container } from 'react-bootstrap'
import logo from '../images/pintok.png'

function NavBar () {
    return (
        <Navbar>
            <Container>
            <a class="navbar-brand" href="#">
                <img src={logo} alt="..." width='150'/>
            </a>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}

export default NavBar;