
import React from "react";
import axios from "axios";

class NewBeer extends React.Component{


    state = {

      
        name:'',
        tagline:'',
        description:"",
        url:""
    }

    


    handleChange=(event)=>{
this.setState({[event.target.name]:event.target.value})

    }

    handleSubmit = (event) =>{
        
           
             axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state).then((response)=>{

                event.preventDefault(); 
             }).catch((err)=>{
                 console.log(err)
             })
          
             this.props.history.push("/beer")
       

    }

render(){

    return(




<div className="container">


<form onSubmit={this.handleSubmit}>
  <div className="mb-3">
    <label forName="name" className="form-label">name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     name="name"
     value={this.state.name}
     onChange={this.handleChange}
    />
  </div>
  <div className="mb-3">
    <label forName="tagline" className="form-label">tagline </label>
    <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
          name="tagline "
     value={this.state.tagline}
     onChange={this.handleChange}
    />

  </div>
  <div className="mb-3">
    <label forName="description" className="form-label">description</label>
    <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"
          name="description"
     value={this.state.description}
     onChange={this.handleChange}
    />
    
  </div>
  <div className="mb-3">
    <label forName="img" className="form-label">URL</label>
    <input type="text" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp"
          name="url"
     value={this.state.url}
     onChange={this.handleChange}
    />
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


</div>






)
}


}

export default NewBeer