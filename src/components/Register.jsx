import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {
  const handleChange = (field, value) => {
    setRegisForm({
      ...regisForm,
      [field]: value,
    });
  };

  const [isOk, setIsOk] = useState(false);

  const [regisForm, setRegisForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      regisForm.name.length >= 2 &&
      regisForm.surname.length >= 3 &&
      regisForm.email.length >= 3 &&
      regisForm.password.length >= 8 &&
      regisForm.confirmPassword == regisForm.password
    ) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [handleChange]);

  const submitHandle = (e) => {
    e.preventDefault();

    alert("You successfully registered");
    handleClear();
  };

  const handleClear = () => {
    setRegisForm({
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Container className="">
      <Row>
        <Col className="d-flex justify-content-center">
          <Form onSubmit={submitHandle}>
            <h1>Registration form</h1>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name: </Form.Label>
              <Form.Control
                id="name"
                placeholder="Write here"
                value={regisForm.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                minlength={2}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="surname">Surname: </Form.Label>
              <Form.Control
                id="surname"
                placeholder="Write here"
                value={regisForm.surname}
                onChange={(e) => handleChange("surname", e.target.value)}
                required
                minLength={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email: </Form.Label>
              <Form.Control
                id="email"
                value={regisForm.email}
                placeholder="Write here"
                type="email"
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password: </Form.Label>
              <Form.Control
                id="password"
                placeholder="Write here"
                value={regisForm.password}
                onChange={(e) => handleChange("password", e.target.value)}
                type="password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirmPassword">
                Confirm password:
              </Form.Label>
              <Form.Control
                id="confirmPassword"
                placeholder="Write here"
                value={regisForm.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
                type="password"
                required
              />
              {regisForm.confirmPassword.length >= regisForm.password.length &&
              regisForm.confirmPassword !== regisForm.password ? (
                <span style={{ color: "red" }}>
                  Check your password. It is not same
                </span>
              ) : (
                ""
              )}
            </Form.Group>

            {isOk ? (
              <Button type="submit" variant="success">
                Register
              </Button>
            ) : (
              <Button type="submit" variant="success" disabled>
                Register
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
