import React, { Component } from 'react'
import axios from 'axios'
import  './index.css'
export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: ""
        };
      }
      handleOnChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleOnSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
        axios.post('http://localhost:2000/posts', newUser)
          .then(res => {
            alert('done')
            window.location.assign('/login')
          });
      }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="form signu-up">
            <h1>signup</h1>
    
            <div className="insideForm">
              <label >Name</label>
              <input name="name"
               type="text"
                placeholder="please enter your name"
                onChange={this.handleOnChange}
                value={this.state.name} />
    
              <label >Email</label>
              <input name="email"
               type="email"
                placeholder="please enter your email" 
                onChange={this.handleOnChange}
                value={this.state.email} />
    
              <label>Password</label>
              <input name="password"
               type="password"
                placeholder="enter your password"
                onChange={this.handleOnChange}
                value={this.state.password} />
            </div>
    
            <button type="submit">Submit</button>
          </form>
        )
    }
}

export default SignUp
