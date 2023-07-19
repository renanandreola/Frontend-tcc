import "./Contador.css";
import React from 'react';
 
export default class Contador extends React.Component {
   
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    }

    // constructor(props) {
    //     super(props);

    //     this.inc = this.inc.bind(this);
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render() {
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <span>{this.state.numero}</span>
                <div>
                    <label htmlFor="passoInput">Passo</label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}