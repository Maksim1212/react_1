import React from "react";
import {moviesData} from "../moviesData"

console.log(moviesData);

//let title = 'Hello React';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            movies: moviesData
        }
    }
    render(){
        console.log(this)
        return <div>{this.state.movies.map(function(movie){
        return <div><p>{movie.title}</p><button>Delete</button></div>
        })}</div>;
    }
}

// function App() {
// return <div>{moviesData[0].title}</div>;
// }

export default App;
