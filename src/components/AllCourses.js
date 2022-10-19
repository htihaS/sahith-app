import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";

const AllCourses = ()=>{
    
    const service_url = "http://localhost:8080/courses";
    const [courses,setCourses] = useState([])

    useEffect(()=>{
       document.title = "All Courses || Sah!Th"
        getAllCoursesFromServer();
    },[]);

    function getAllCoursesFromServer(){
        axios.get(`${service_url}`).then(
            (response) => {
            console.log("Success");
            console.log(response.data);
            setCourses(response.data);
        },
        (error) => {
            console.log(error);
        }
        )
    }

    function deleteC(id){
        setCourses(courses.filter((c)=> c.id !== id))
    }

    function update(updated){
        setCourses(courses.map((item)=>{
            if(updated.id === item.id){
                return {...item , title:updated.title , description:updated.description}
            }
            return item;
        })
        )
    }

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses:</p>
            {
                courses.length>0 ? courses.map((item)=><Course  key = {item.id}  deletecourse={deleteC} updatecourse={update} course={item}/>)  : "No courses Available"
            }
        </div>
    )
}

export default AllCourses;