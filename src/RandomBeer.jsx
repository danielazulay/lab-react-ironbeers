
import React from "react";
import axios from "axios";

class RandomBeer extends React.Component{


    state = {

        beer:{}
    }

    componentDidMount = async () => {

try{

   const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
 
let rand =Math.floor(Math.random()*response.length)

    this.setState({beer: {...response.data}})


    console.log(rand)
}
catch(err){

    console.log(err)
}
    }

render(){

    return(

<div class="list-group-lg">




    <div className="container col-3"> <img src={this.state.beer.image_url} alt="Cinque Terre" width="auto" height="70px"/> </div>
    <div className="container col-7">{this.state.beer.name}</div>

  
</div>

  





)
}


}

export default RandomBeer