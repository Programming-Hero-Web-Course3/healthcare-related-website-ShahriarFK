import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div className="container my-5">
            <h1><b>Please Login Here</b></h1>


            <Form className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-danger">Your Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-info">
                        Don't worry. We'll keep secret your password.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-danger">Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Button className="my-5" variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            <hr />
            <button onClick={signInUsingGoogle} className="btn btn-warning mb-5" >Google Sign In</button>
        </div>
    );
};

export default Login;