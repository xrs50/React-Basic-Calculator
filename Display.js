import React, {Component} from "react";

export default class Display extends Component{
    
    constructor(){
        super();
        this.state = {
            displayState: ""
        }
    }

    enterNumber(event){
        this.setState({
            displayState: this.state.displayState + event.target.value
        })
    }

    clearDisplay(event){
        this.setState({displayState: ""})
    }

    calculate(event){
        this.setState({displayState: eval(this.state.displayState)})
    }
    render(){
        return(
            <div>
                <input value = {this.state.displayState}/>
                <br></br>
                <button onClick={this.clearDisplay.bind(this)} label = "C" value = "clear">C</button>
                <button onClick={this.enterNumber.bind(this)} label = "1" value = "1" >1</button>
                <button onClick={this.enterNumber.bind(this)} label = "2" value = "2" >2</button>
                <button onClick={this.enterNumber.bind(this)} label = "3" value = "3" >3</button>
                <button onClick={this.enterNumber.bind(this)} label = "4" value = "4" >4</button>
                <button onClick={this.enterNumber.bind(this)} label = "5" value = "5" >5</button>
                <button onClick={this.enterNumber.bind(this)} label = "6" value = "6" >6</button>
                <button onClick={this.enterNumber.bind(this)} label = "7" value = "7" >7</button>
                <br></br>
                <button onClick={this.enterNumber.bind(this)} label = "8" value = "8" >8</button>
                <button onClick={this.enterNumber.bind(this)} label = "9" value = "9" >9</button>
                <button onClick={this.enterNumber.bind(this)} label = "0" value = "0" >0</button>
                <button onClick={this.enterNumber.bind(this)} label = "*" value = "*" >*</button>
                <button onClick={this.enterNumber.bind(this)} label = "/" value = "/" >/</button>
                <button onClick={this.enterNumber.bind(this)} label = "+" value = "+" >+</button>
                <button onClick={this.enterNumber.bind(this)} label = "-" value = "-" >-</button>
                <button onClick={this.enterNumber.bind(this)} label = "." value = "." >.</button>
                <br></br>
                <button onClick={this.calculate.bind(this)} label = "=" value = "=" >=</button>
            </div>
        )
    }
}