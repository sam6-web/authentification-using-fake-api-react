import React, { Component } from 'react'
import axios from 'axios'
import  './index.css'
export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          users : []
        };
      }
      handleOnChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      componentDidMount(){
        axios.get("http://localhost:2000/posts")
        .then(response =>{
            this.setState({users:response.data})
            console.log(response.data)
        })   
    }     
    
      handleOnSubmit = (e) => {
        e.preventDefault();
       
        
        console.log(this.state.users)
       
        for(let i = 0 ; i< this.state.users.length ; i++){
            if(this.state.users[i].email===this.state.email&&this.state.users[i].password===this.state.password){
                return alert('welcome'),window.location.assign('/mainpage')
            } else if ( this.state.users[i].email===this.state.email&&this.state.users[i].password!==this.state.password){
                return alert('password incorrect'),window.location.reload(true)
            } else{
                return alert('user not found'),window.location.reload(true)
            }
        }
      } 
      
    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="form sign-in">

        <h1>Login</h1>

        <div className="insideForm">
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

export default SignIn
