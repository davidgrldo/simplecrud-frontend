import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalComponent = ({ isOpen, isClose, data, onSubmit, isLoading }) => {
  const [employee, setEmployee] = useState({});

  React.useEffect(() => {
    if (isOpen) {
      setEmployee(data);
    } else {
      setEmployee({});
    }
  }, [isOpen]);

  return (
    <>
      <Modal
        show={isOpen}
        onHide={() => {
          isClose();
          setEmployee({});
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {Object.keys(employee).length === 0
              ? "Create Employee"
              : "Edit Employee"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="md-2 mb-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="example : John"
                name="firstName"
                value={employee.firstName}
                onChange={(e) =>
                  setEmployee({ ...employee, firstName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="md-2 mb-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="example : Doe"
                name="lastName"
                value={employee.lastName}
                onChange={(e) =>
                  setEmployee({ ...employee, lastName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="md-2 mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example : johndoe@email.com"
                name="email"
                value={employee.email}
                onChange={(e) =>
                  setEmployee({ ...employee, email: e.target.value })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={(e) => onSubmit(employee)}
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Submit"}
            </Button>{" "}
            <Button variant="secondary" onClick={isClose}>
              Back
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
