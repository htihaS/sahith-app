import './App.css';
import Home from "./components/Home"
import Header from './components/Header';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
          <Menus></Menus>
          </Col>

          <Col md={8}>
            
          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/add-course" element = {<AddCourse/>} exact />
            <Route path="/view-courses" element = {<AllCourses/>} exact /> 
          </Routes> 
           
          </Col>
        </Row>
      </Container>
      
      </Router>

      
    </div>
  );
}

export default App;
