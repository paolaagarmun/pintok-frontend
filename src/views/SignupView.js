import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignupView () {
    const navigate = useNavigate();
    const { signUpUser } = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        const response = await signUpUser(user);
        if (response?.errors) {
            setErrors(response.errors);
        }
        setUser({
            name: "",
            email: "",
            password: ""
        });
        navigate("/")
    };

    return (
        <div className="container mt-5">
            <Form
                className="form"
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
            >
                <h2>Sign up</h2>
                <Form.Group>
                    <Form.Control
                        value={user.name}
                        onChange={handleChange}
                        name="name"
                        required
                        type="text"
                        placeholder="Enter your name"
                    />
                    <Form.Control.Feedback type="invalid">
                        Name is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        value={user.email}
                        onChange={handleChange}
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email"
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                        required
                        type="password"
                        placeholder="Enter password"
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    className="form-control mt-3" 
                    type="submit"
                >
                    Log in
                </Button>
            </Form>
        </div>
    )
}

export default SignupView;