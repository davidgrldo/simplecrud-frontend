import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { Container, Form, Row, Card, Button } from "react-bootstrap";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email };

    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Card className="col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center mt-2">Add Employee</h2>
            <Card.Body>
              <Form>
                <Form.Group className="md-2 mb-2">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="example : John"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="md-2 mb-2">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="example : Doe"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="md-2 mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example : johndoe@email.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={(e) => saveEmployee(e)}>
                  Submit
                </Button>{" "}
                <Link to="/employees">
                  <Button variant="secondary">Back</Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default AddEmployeeComponent;
