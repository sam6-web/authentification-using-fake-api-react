import React, { Component } from 'react'

export class Main extends Component {
    handleChangeLogOut = ()=>{
        window.location.assign('/')
    }
    render() {
        return (
            <div className='mainpage'>
                <h2>welcome</h2>
                <button onClick={this.handleChangeLogOut}>
                    logout
                </button>
            </div>
        )
    }
}

export default Main
