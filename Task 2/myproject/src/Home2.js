import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";

function Home2(){
    return(
        <div>
            <h1 align = "center">Welcome to the Home Page!</h1>
            <Link to="/user">
            <button class="btn btn-primary" type="submit">Get User</button>
            </Link>
          </div>
    );
}
  
export default Home2;