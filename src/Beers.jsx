
import React from "react";
import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';
import randomBeer from './assets/random-beer.png';
import { Link } from "react-router-dom";


class Beers extends React.Component{

    

   render(){

    return(

        <div className="container">
     <div className="card mb-3"> 
     <Link  to={`/beer/ListBeers`}> <img src={beers} className="card-img-top" alt="beer"/>  </Link>
        <div className="card-body">
          <h5 className="card-title">All Beers</h5>
          <p className="card-text">Lorem </p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    
   <div className="card mb-3">
   <Link  to={`/beer/random`}><img src={randomBeer} className="card-img-top" alt="beer"/> </Link>
        <div className="card-body">
          <h5 className="card-title">random-beer</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div clasName="card mb-3">
      <Link  to={`/beer/newBeer`}>  <img src={newBeer} clasName="card-img-top" alt="beer"/></Link>
        <div clasName="card-body">
          <h5 clasName="card-title">Card title</h5>
          <p clasName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p clasName="card-text"><small clasName="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
     
  
      </div>

  
   )
   }




}

export default Beers