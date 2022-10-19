import React, { useState } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const AddCourse = ()=>{

    const btnAddCourse = ()=>{
        toast.success("Course Added!",{
          position: "top-left"
        });
      };

      const btnDeleteCourse = ()=>{
        toast.warning("Course deleted",{
            position: "top-left"
        });
      }

      const [course,setCourse] = useState({});

      const service_url = "http://localhost:8080/course/addcourse";

      function formHandler(e){
        console.log(course);
        
        axios.post(`${service_url}`,course).then(
            (response)=>{
                console.log("added");
                btnAddCourse();
            },
            (error)=>{
                console.log("error");
                toast.error("error");
            }
        )
        e.preventDefault();
      }

    return(

        <div>

            <h1>Fill course details</h1>
            <Form onSubmit={formHandler}>
                <FormGroup >
                    <label for="courseid">Course Id</label>
                    <Input type = "text" placeholder="Enter here" name="courseid" id="courseid" onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type = "text" placeholder="Enter here" name="title" id="title" onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}></Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type = "text area" placeholder="Enter here" name="description" id="description" onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }} style={{height:"100px"} }></Input>
                </FormGroup>
                <ToastContainer/>
                <Container>
                <div className="mt-3">
                    <Button type="submit" color='success mr-2'  >Add Course</Button> 
                    <Button type="reset" color='danger ml-2'  >Clear</Button> 
                </div>
                </Container>
            </Form>
        </div>
    )

}

export default AddCourse;