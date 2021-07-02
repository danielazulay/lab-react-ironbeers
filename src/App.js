import React from 'react';
import Detailed from "./Detailed.jsx"
import RandomBeer from "./RandomBeer.jsx"
import Header from "./Header.jsx"
import './App.css';
import NewBeer from './NewBeer.jsx'
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Beers from "./Beers.jsx"
import ListBeers from "./ListBeer.jsx"
function App() {


  return (
    <BrowserRouter>

<div>
<Header/>
<Route exact path="/beer" component={Beers} />
<Route exact path="/beer/ListBeers" component={ListBeers} />
<Route exact path="/beer/random" component={RandomBeer} />
<Route exact path="/beer/newBeer" component={NewBeer} />
<Route  path="/beer/:_id" component={Detailed} />


</div>
</BrowserRouter>

  );
}

export default App;
