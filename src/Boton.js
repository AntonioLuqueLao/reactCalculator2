import React from "react";

class Boton extends React.Component {
    render() {
        return(
            <div className='boton' onClick={this.props.enviarInput}>{this.props.value}</div>
        )
    }
}

export default Boton;
