import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class DisplayImages extends Component {

    render() {
     	
     const { items = [] } = this.props.items;		
    return (
      <div className="App">
         <input type="text" placeholder="Search Gifs" id="search" value={this.state.value} onChange={this.handleChange}/>
         <br/><input type="Submit" value="Submit" onClick={() => {this.fetchResults(this.state.searchQuery)}}/>
         
         { this.state.items.length > 0 &&
       	  items.map(( { images }) => (
         <img  src={ images.preview_gif.url } />
                        ))
          
        }
      </div>
    );
  }
}

export default DisplayImages;
