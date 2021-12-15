import { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../images/pintok.png'

function NavBar () {
    const { loggedIn, logOutUser, user } = useContext(AuthContext)
    return (
        <Navbar sticky="top" className='customNav'>
            <Container>
            <a className="navbar-brand" href="/">
                <img src={logo} alt="..." width='150'/>
            </a>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    {loggedIn ? (
                        <>
                        <NavLink to="/addCategory" className="btnAddCateg">Add Categories</NavLink>
                        <Navbar.Text>
                            <i>Signed in as: <span className='userName'>{user?.name}</span></i>
                        </Navbar.Text>
                        <button onClick={logOutUser} className="btnNav">
                            Log Out
                        </button>
                        
                        </>
                    ) : (
                        <>
                        <NavLink to="/login" className="btnNavLogin">Login</NavLink>
                        
                        <NavLink to="/signup" className="btnNav">Signup</NavLink>
                        </>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}

export default NavBar;