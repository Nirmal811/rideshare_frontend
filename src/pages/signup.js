import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import Logo from "../logo192.png";
import { register } from "../api/auth-api";

const Register = () => {
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    if (confirmPassword!==inputPassword) {
      setShow(true);
    }
    //console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    try{
      const data = {useremail:`${inputUserEmail}`, username :`${inputUsername}`, password :`${inputPassword}`};
      const res = await register(data);
      console.log(res.data);
      setMessage(res.data.Message);
      await delay(1500);
      window.location.href = '/'
    }
    catch(err)
    {
      console.log(err.response.data.Message);
      setMessage(err.response.data.Message);
    }

    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <>
    <div className="sign-in__wrapper" style={{backgroundColor:'#2d2d18'}}>
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Sign Up</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Passwords doesn't match
          </Alert>
        ) : (
          <div />
        )}
        <div>
          <p>{message}</p>
        </div>
        <Form.Group className="mb-2" controlId="useremail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={inputUserEmail}
            placeholder="Email"
            onChange={(e) => setInputUserEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Create New Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            placeholder="Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Sign Up
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Signing Up...
          </Button>
        )}
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Nirmal and Karthik | &copy;2024
      </div>
    </div>
    </>
  );
};

export default Register;

