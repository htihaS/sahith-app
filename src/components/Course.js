import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container
} from "reactstrap";
import axios from "axios";



const Course = ({course,deletecourse,updatecourse})=>{

    const service_url = "http://localhost:8080/course/deletecourse";
    const service_url_update = "http://localhost:8080/course/updatecourse";
    

    function deleteHandler(){
        axios.delete(`${service_url}`,{
            data:{
            "id":course.id,
            "title":course.title,
            "description":course.description
            }
        }
    ).then(
            (response)=>{
                console.log(response);
                deletecourse(course.id);
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    function updateHandler(id,title,description){
        axios.put(`${service_url_update}`,{
            
            "id":course.id,
            "title":title,
            "description":description
            
        }
    ).then(
            (response)=>{
                console.log(response);
                updatecourse(response.data);
            },
            (error)=>{
                console.log(error);
            }
        )
        //updatecourse(course.id,title,description);
    }

    return (
        <Card className="my-10">
            <CardBody>
                <CardTitle className="font-weight-bold">{course.title}</CardTitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color="danger" onClick={()=>{
                        deleteHandler();
                    }}>Delete</Button>
                    <Button color="warning ml-3" onClick={()=>{
                        const title = prompt("Enter new title:");
                        const description = prompt("Enter new description:");
                        updateHandler(course.id,title,description);
                    }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Course;