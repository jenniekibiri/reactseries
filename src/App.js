import React, { Component } from 'react';
import axios from 'axios'
import Loading from './Loading';
class App extends Component {
  constructor (props){
//initialize component state
super(props)
//state
this.state = {
users:[],
loading:false
}
//bind the created method
this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUser(){
  this.setState(
    {loading:true}
    )
    axios('https://randomuser.me/api/?nat=US&results=5')
.then(response=> this.setState({
  users:[...this.state.users,...response.data.results],
  loading:false
})

)
  }
  handleSubmit(e){
    e.preventDefault();
    this.getUser();
    console.log('these are more users being loaded')
     
  }
  componentWillMount(){
this.getUser()
  }


  render() {
    //destructure
    const {loading,users}=this.state
    return (
      <div className="App">
        <form onClick={this.handleSubmit}>
  <input type="submit" value="load users"/>
</form>
<hr></hr>
{!loading ? users.map(user =>
<div key={user.id.value}>

 <h3 style={{color:'blue'}}>
   
   {user.name.first}
 </h3>
<p>{user.dob.age}</p>
<hr/>

  </div>):(<Loading message="hey its loading"/>)}

      </div>
    );
  }
}

export default App;
