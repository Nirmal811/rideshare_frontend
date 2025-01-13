import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import Logo from "../logo192.png";
import { login } from "../api/auth-api";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response,setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    const data = {username :`${inputUsername}`, password :`${inputPassword}`};
    try {
      const res = await login(data);
      console.log(res);
      if (res?.data) {
        const message = res.data.Message;
        console.log(message);
        setResponse(message);
        console.log(res.data);
        const color = message === 'Login Successful' ? 'green' : 'red';
        setBackgroundColor(color);
        await delay(500);
        window.localStorage.setItem('token', res.data.Token);
        window.location.href='/rides';
      } else {
        console.error("Unexpected response structure:", res);
      }
      await delay(500);

    } catch (error) {
      console.error("Error during login:", error);
      setResponse("Invalid Credentials");
      setBackgroundColor("red");
    } finally {
      setLoading(false);
    }
    await delay(500);
  };

  const handlePassword = () => {};

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
        <div style={{color:backgroundColor}}>
          <p style={{textAlign:'center'}}>{response}</p>
        </div>
        <div className="h4 mb-2 text-center">Login</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button
            className="text-muted px-0"
            variant="link"
            onClick={handlePassword}
          >
            Forgot password?
          </Button>
        </div>
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Nirmal K | &copy;2024
      </div>
    </div>
    </>
  );
};

export default Login;

