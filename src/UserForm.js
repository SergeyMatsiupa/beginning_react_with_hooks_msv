import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap'

function UserForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [description, setDescription] = useState("");
    const [descError, setDescError] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        var emailValid = false;
        var passwordValid = false;
        var descValid = false;
        if(email.length == 0){
            setEmailError("Email is required");
        }
        else if(email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if(email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("")
            emailValid = true
        }
        // 
        if(password.indexOf('?') >= 0) {
            setPasswordError('Password cannot contain an "?" symbol');
        } else {
            passwordValid = true;
        }
        //
        if(description.indexOf('bad') >= 0) {
            setDescError('Description cannot contain a bad word');
        } else {
            descValid = true;
        }
        //
        if(emailValid && passwordValid && descValid) {
            alert('Email: ' + email + '\nPassword: ' + password + '\nDescription' + description);
            setEmail("");
            setPassword("");
            setDescription("");
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} 
                    value={email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {emailError.length > 0 &&
                    <Alert variant="danger">{emailError}</Alert>}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}
                    value={password} />
                </Form.Group>
                {passwordError.length > 0 &&
                    <Alert variant="danger">{passwordError}</Alert>}
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group controlId="formArea">
                    <Form.Label>Description Text Area</Form.Label>
                    <Form.Control as="textarea" rows={3}  onChange={event => setDescription(event.target.value)}
                    value={description} />
                </Form.Group>
                {descError.length > 0 &&
                    <Alert variant="danger">{descError}</Alert>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            Email entered: {email}
            <br />
            Password entered: {password}
            <br />
            Desc. entered: {description}
        </div>
    );
}
export default UserForm;