import { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../images/pintok.png'

function NavBar () {
    const { loggedIn, logOutUser, user } = useContext(AuthContext)
    return (
        <Navbar className='customNav'>
            <Container>
            <a className="navbar-brand" href="/">
                <img src={logo} alt="..." width='150'/>
            </a>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    {loggedIn ? (
                        <>
                        <NavLink to="/addCategory">Add Categories</NavLink>
                        <Navbar.Text>
                            Signed in as: {user?.name}
                        </Navbar.Text>
                        <button onClick={logOutUser} className="btn btn-outline-dakr">
                            Log Out
                        </button>
                        
                        </>
                    ) : (
                        <>
                        <NavLink to="/signup">Signup</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        </>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}

export default NavBar;