import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf} from '../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      smurfs: []
    }
  }  
  

  componentDidMount(){
    this.props.getSmurfs();
    this.setState({
      smurfs: this.props.smurfs
    });
  }

  handleChange = e =>{
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  addSmurf = e =>{
    e.preventDefault();
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log(newSmurf)
    this.props.addSmurf(newSmurf); 
    
  }

  render() {
    return (
      <div className="App">
      <h1>SMURFS !!</h1>
      <div className='add-smurf'>
        <h2>Add to Village</h2>
        <form onSubmit={this.addSmurf}>
          <input type='text' name='name' id='name' onChange={this.handleChange} placeholder='Smurf Name'/>
          <input type='text' name='age' id='age' onChange={this.handleChange}
          placeholder='Smurf Age'/>
          <input type='text' name='height' id='height' onChange={this.handleChange}
          placeholder='Smurf Height'/>
          <button type='submit'>Add Smurf</button>          
        </form>
      </div>
        <div className="smurf-list">
        <h2>Village</h2>
        {this.props.smurfs.map(smurf => {
          return(
            <ul id={smurf.id} key={smurf.id}>
            <li>{smurf.name}</li>
            <li>{smurf.age}</li>
            <li>{smurf.height}</li>
            </ul>
          )
         })}

        </div> 
               
      </div>
    );
  }
}

const mapStateToProps = ({smurfs}) => ({
    smurfs: smurfs
});

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App)



