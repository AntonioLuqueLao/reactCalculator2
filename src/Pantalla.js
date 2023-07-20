import React from "react";

class Pantalla extends React.Component {
    constructor(props){
        super()
    }
    render() {
        return(
            <div className="pantalla">{this.props.input}</div>
        )
    }
}

export default Pantalla;