import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class DisplayImages extends Component {

    render() {
     		
    return (
      <div className="App">
         
       { this.props.items.length > 0 &&

          this.props.items.map(( { images }) => (
           <img  src={ images.preview_gif.url } width="200px" height="200px" />
                        ))          
        }
      </div>
    );
  }
}

export default DisplayImages;
