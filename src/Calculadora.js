import React from "react";
import Boton from "./Boton";
import Pantalla from "./Pantalla";
import {evaluate} from 'mathjs';
import './App.css';

class Calculadora extends React.Component {
    constructor() {
        super()
        this.state= {
            input: ""
        }
        this.enviarInput=this.enviarInput.bind(this);
        this.clearInput=this.clearInput.bind(this);
        this.calcularInput=this.calcularInput.bind(this);
    }
    enviarInput(e) {
        this.setState(state=> ({
            input: state.input+e.target.textContent
        }))
    }
    clearInput(){
        this.setState({
            input: ''
        })
    }
    calcularInput() {
        this.setState(state=> ({
            input: evaluate(state.input)
        }))
    }
    render() {
        return (
            <div className="calculadora"> 
            <div className="screen-container">
            <Pantalla input={this.state.input}/>
            </div>
            <div className="screen-container2"></div>
      <div className="fila"><Boton value="7" enviarInput={this.enviarInput}/><Boton  value="8" enviarInput={this.enviarInput}/><Boton value="9" enviarInput={this.enviarInput}/><Boton Boton value="*" enviarInput={this.enviarInput}/></div>
      <div className="fila"><Boton value="4" enviarInput={this.enviarInput}/><Boton value="5" enviarInput={this.enviarInput}/><Boton value="6" enviarInput={this.enviarInput}/><Boton value="/" enviarInput={this.enviarInput}/></div>
      <div className="fila"><Boton value="1" enviarInput={this.enviarInput}/><Boton value="2" enviarInput={this.enviarInput}/><Boton value="3" enviarInput={this.enviarInput}/><Boton value="-" enviarInput={this.enviarInput}/></div>
      <div className="fila"><Boton value="0" enviarInput={this.enviarInput}/><Boton value="." enviarInput={this.enviarInput}/><Boton value="=" enviarInput={this.calcularInput}/><Boton value="+" enviarInput={this.enviarInput}/></div>
      <div className="fila"><Boton value="clear" enviarInput={this.clearInput} /></div>
      <div className="upperBorder"></div>
            </div>
        )
    }
}

export default Calculadora;