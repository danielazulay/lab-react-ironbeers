import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import home from './assets/home.png'
import { Link } from "react-router-dom";

function  Header(props){
return(

<div>
<nav className="navbar navbar-dark bg-primary">



<Link to="/beer"><img src={home} className="card-img-top" alt="beer" width="5px" height="auto"/> </Link>


</nav>
</div>
)


}

export default Header