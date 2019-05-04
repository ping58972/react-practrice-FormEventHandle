import React from 'react'
//import axios from 'axios'; //put this "import axios" before "import searchBar file?"
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {images:[]};
  onSearchSubmit = async (term)=>{
    //console.log(term);
   const response = await unsplash.get('/search/photos', {
    params: { query: term },
    });    
    this.setState({images: response.data.results});
  }
  render(){
  return (
    <div className="ui segment"style ={{marginTop: "10px"}}>
      <SearchBar onSubmitRun={this.onSearchSubmit}/>
      Found: {this.state.images.length} images
    </div>
  );
  }
}
//
export default App
