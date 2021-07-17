import React from "react";
import {Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function User() {

     return (
        <React.Fragment>
        <Link to="/home">
            <button class="btn btn-primary" type="submit">Home</button>
        </Link>
        <br></br>
        <h1 align = "center">Details of Users</h1>
        <br></br>
        <div className="container">
    <div className="row">
      <div className="col"><div class="card">
    <img src="https://cdn0.iconfinder.com/data/icons/avatar-4/512/Receptionist-512.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Ms. Ayesha Pathan</h5>
      <p class="card-text">She is a dandy user with lot of experience and knowledge. Loves to explore new things.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_business_man_suit_official-512.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Mr. Raj Patil</h5>
      <p class="card-text">He is an excellent user and he loves travelling.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://cdn0.iconfinder.com/data/icons/avatar-4/512/Teacher-512.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Mrs. Jescika Dsouza</h5>
      <p class="card-text">She is an Entrepreneur who is good at managing.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
    </div>
    <br></br>
    <div className="row">
      <div className="col"><div class="card">
    <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_dad_hipster_beard_glasses-512.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Mr. Jaspreet Singh</h5>
      <p class="card-text">He is an Experienced Employee with large community.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_woman_bun_shirt_girl-512.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Ms. Shivani Naik</h5>
      <p class="card-text">She is a young lady with outstanding soft skills. She is Optimistic.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_sweater_neat_man_boy-512.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Mr. Karan Varma</h5>
      <p class="card-text">He is an IT professional with a good command over programming.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
  </div>
  </div>
      </React.Fragment>
     );

 }

 export default User;