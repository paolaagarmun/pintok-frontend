import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../images/pintok.png'

function NavBar () {
    return (
        <Navbar className='customNav'>
            <Container>
            <a className="navbar-brand" href="/">
                <img src={logo} alt="..." width='150'/>
            </a>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <NavLink to="/singleCategoryView">See video test</NavLink>
                <NavLink to="/addCategory">Add Categories</NavLink>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}

export default NavBar;