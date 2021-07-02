
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ListBeers extends React.Component{


    state = {

        beer:[]
    }

    componentDidMount = async () => {

try{

   const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

    this.setState({beer: [...response.data]})
    
}
catch(err){

    console.log(err)
}
    }

render(){

    return(

<div class="list-group">
{this.state.beer.map((a)=>{
return(

<div>
<div className="container col-12">
    <div className="container col-3"> <Link to={`/beer/${a._id}`}><img src={a.image_url} alt="Cinque Terre" width="auto" height="70px"/> </Link></div>
    <div className="container col-9">{a.name}</div>
    </div>
</div>


)   
})}
</div>



)
}


}

export default ListBeers