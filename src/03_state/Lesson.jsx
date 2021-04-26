import React, { Component } from 'react'
//OLD
// class CounterButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() { }
// }
//MODERN
class CounterButton extends Component {
    state = {
        counter: 0
    }
    // increment = () => {
    //     this.setState(prevState => ({
    //         counter: ++prevState.counter
    //     }))
    // }
    increment = () => {
        this.setState(({ counter }) => ({
            counter: ++counter
        }))
    }
    decrement = () => {
        this.setState(({ counter }) => ({
            counter: --counter
        }))
    }

    render() {
        const { counter } = this.state;
        return (
            < div className="container-fluid" >

                <button className="btn btn-danger" onClick={this.decrement}>Dell</button> <button className="btn btn-primary" onClick={this.increment}>Add</button>
                <h1>Count:{counter}</h1>
            </div >)
    }
}



export default CounterButton