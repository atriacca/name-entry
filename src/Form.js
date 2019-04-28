import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          age: "",
          names: []
        }
      }

onSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
          return {
            firstName: "",
            age: "",
            names: [prevState.firstName, ...prevState.names]
      }
    })
}

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

render() {
      const styles = {
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "1f 1fr 6fr",
        gridGap: "33px",
      }

// These next few lines (and others with "names") runs a list of names entered
      const names = this.state.names.map((name)=>{
        return <h3>{name}</h3>
      })

    return (
      <div>
          <h1>Enter your first name</h1>
          <form onSubmit={this.onSubmit} style={styles}>
          
            First name: 
            <input name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChange} />
            
            Age: 
            <input name="age" value={this.state.age} onChange={this.handleChange} />

            <button>Click me</button>
          </form>
          Names entered: {names}
      </div>
    );
  }
}

export default Form;