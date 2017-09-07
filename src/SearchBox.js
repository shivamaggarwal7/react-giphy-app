import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBox extends Component {

    constructor() {
        super();
        this.state = {
                       items: [] , 
                       value: ''
                   };

        this.handleChange = this.handleChange.bind(this);           
    }

	fetchResults(props)
	{
		console.log(this.state.value);
       fetch(`https://api.giphy.com/v1/gifs/search?api_key=0d05b586e3ff4884b6dc9837d9601726&limit=20&offset=0&rating=G&lang=fr&q=`+this.state.value)
           .then(result=>result.json())
             .then(res =>{
           	                this.setState( {items : res.data} )
                           }
           	       )
	  }


	handleChange(event) {
       this.setState({value: event.target.value});
    }

    render() {
     	     
    return (
      <div className="App">
         <input type="text" placeholder="Search Gifs" id="search" value={this.state.value} onChange={this.handleChange}/>
         <br/><input type="Submit" value="Submit" onClick={() => {this.fetchResults(this.state.searchQuery)}}/>
         
         { this.state.items.length > 0 &&
       	  this.state.items.map(( { images }) => (
         <img  src={ images.preview_gif.url } width="200px" height="200px" />
                        ))
          
        }
      </div>
    );
  }
}

export default SearchBox;
