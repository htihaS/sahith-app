import React from "react";
import { Badge ,Button , Container } from 'reactstrap';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            
            <Badge  color="info" style={{width:"100%",padding:" 4rem"}}>
                <h1>Sah!Th</h1>
                <p>This is Sahith's personal portal ,to learn react</p>
                <Container>
                  
                <Button><Link className="list-group-item-action" tag="a" to="/view-courses" >Start Using</Link></Button>
                 
                    
                </Container>
            </Badge>    

        </div>
    )
}

export default Home;