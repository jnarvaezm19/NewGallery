import React from 'react';
import './App.css';
import Album from './components/albumSchema/album'
import Photo from './components/photoSchema/photo'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "Prueba 2"
    }
  }
  
  render() {
    return(
    <div className="App container-fluid row">
      <div className="col s3 center">
        <h4 className="pulse">Albums</h4>
        <Album/>
      </div>
      <div className="col s9 center">
        <h4>Photos</h4>
        <Photo/>
      </div>
    </div>
    );
  }
}

export default App;
