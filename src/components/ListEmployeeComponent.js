import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import EmployeeService from "../services/EmployeeService";
import ModalComponent from "./ModalComponent";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDetailEmployee = async (id) => {
    const res = await EmployeeService.getEmployeeById(id);
    setEmployee(res.data);
    setOpen(true);
  };

  const saveOrUpdateEmployee = async (employee, id) => {
    try {
      setLoading(true);
      if (!id) {
        await EmployeeService.createEmployee(employee);
      } else {
        await EmployeeService.updateEmployee(id, employee);
      }

      getAllEmployees();
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <Container>
      <h2 className="text-center">Employee List</h2>
      {/* <Link to="/add-employee"> */}
      <Button className="mb-2" onClick={() => setOpen(true)}>
        Add Employee
      </Button>
      {/* </Link> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => getDetailEmployee(employee.id)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalComponent
        isOpen={isOpen}
        isClose={() => {
          setOpen(false);
          setEmployee({});
        }}
        isLoading={isLoading}
        data={employee}
        onSubmit={(value) => saveOrUpdateEmployee(value, employee.id)}
      />
    </Container>
  );
};

export default ListEmployeeComponent;
