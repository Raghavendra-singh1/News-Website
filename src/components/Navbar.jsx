 import React from "react";
 import { Link } from "react-router-dom";
 export const Navbar = () => {
  return <div>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">SquareBoat News</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id= "navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/"> popular</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active text-white" aria-current="page" to="/general">Tesla</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active text-white" aria-current="page" to="/bussiness">Business</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active text-white" aria-current="page" to="/Entertainment">techcrunch</Link>
        </li>
        <li class="nav-item">

        <Link class="nav-link active text-white" aria-current="page" to="/sports">last 6 months</Link>
        </li>
        <li class="nav-item">

        <Link class="nav-link active text-white" aria-current="page" to="/signup">signup</Link>
        </li>
        <li class="nav-item">

        <Link class="nav-link active text-white" aria-current="page" to="/login">login</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav></div>
 };