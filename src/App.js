// import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HeaderComponent,
  FooterComponent,
  ListEmployeeComponent,
  AddEmployeeComponent,
} from "./components";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Container>
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />}></Route>
            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            ></Route>
            <Route
              path="/add-employee"
              element={<AddEmployeeComponent />}
            ></Route>
          </Routes>
        </Container>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
