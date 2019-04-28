import React, { Component } from 'react';

class App extends Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        age: "",
        names: [],
        ages: []
      }
    }

onSubmit = (e) => {
      e.preventDefault()
      this.setState((prevState)=>{
        return {
          firstName: "",
          age: "",
          names: [prevState.firstName, ...prevState.names],
          ages: [prevState.age, ...prevState.ages]
    }
  })
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

render() {
    const styles = {
      padding: "20px",
    }

    const names = this.state.names.map((nameList)=>{
      return <h3>{nameList}</h3>
    })
    const ages = this.state.ages.map((ageList)=>{
      return <h3>{ageList}</h3>
    })

  return (
    <div>
        <h1>Enter your first name</h1>
        <form onSubmit={this.onSubmit} style={styles}>
        
          First name: 
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          Age: 
          <input name="age" value={this.state.age} onChange={this.handleChange} />

          <button>Click me</button>
        </form>
        Names entered: {names}{ages}
    </div>
  );
}
}

export default App;