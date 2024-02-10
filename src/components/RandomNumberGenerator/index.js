import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component{
    state= {counter:0}

    onButtonClick = ()=> {
        this.setState({counter: Math.ceil(Math.random() * 100)})
    }

    render(){
        const {counter} =  this.state
        return(
            <div className='container'>
                 <div className='card'>
                    <h1>Random Number</h1>
                    <p>Generate a random number in the range of 0 to 100</p>
                    <button onClick={this.onButtonClick}>Generate</button>
                    <h2>{counter}</h2>
                 </div>
            </div>
        )
    }
}

export default RandomNumberGenerator