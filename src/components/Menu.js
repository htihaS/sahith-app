import React from "react";
import { Link } from "react-router-dom";
import {ListGroup } from "reactstrap";

function Menus(){
    return(
    <ListGroup>
     <Link className="list-group-item list-group-item-action" tag="a" to="/" >  
      Home
    </Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" >
      AllCourses
    </Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" >
      AddCourse
    </Link>
    <Link className="list-group-item list-group-item-action" tag="a" to = "/">
      About
    </Link>
    <Link className="list-group-item list-group-item-action" tag="a" to = "/">
      Contact us
    </Link>
  </ListGroup>
    )
}


export default Menus;