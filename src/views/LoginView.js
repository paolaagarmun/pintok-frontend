import { useContext, useState } from "react";
import { Button, Form, InputGroup, FontAwesomeIcon } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginView () {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext);
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useState({
        password: "",
        email: ""
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        const response = await loginUser(user);
        if (response?.errors) {
            setErrors(response.errors)
        }
        setUser({
            email: "",
            password: ""
        })
        navigate("/")
    }

    return (
        <div className="container mt-5">
            <Form
                className="form"
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
            >
                <h3>Log in</h3>
                <Form.Group>
                    <Form.Control
                        value={user.email}
                        onChange={handleChange}
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        type="password"
                        placeholder="Enter password"
                        className="input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className="form-control mt-3" type="submit">
                    Log in
                </Button>
            </Form>
        </div>
    );

};

export default LoginView