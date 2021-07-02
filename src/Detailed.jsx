
import React from "react";
import axios from "axios";

class Detailed extends React.Component{


    state = {

      
        name:'',
        tagline:'',
        description:"",
        url:""
    }

    


 

    handleSubmit = async(event) =>{
        try{
          const id= this.props.match.params.id 
       let response =  await   axios.post(`https://ih-beers-api2.herokuapp.com/beers/${id}`)

           
          
       this.setState({ ...response.data });
       console.log(this.state.name)
    } catch (err) {
      console.log(err);
    }
       

    }

render(){

    return(



<div>
    <p>{this.state.name}</p>
    <p></p>
    <p></p>
</div>



)
}


}

export default Detailed