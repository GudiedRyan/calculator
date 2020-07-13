import React from 'react';


class NumPad extends React.Component {

    render() {
    return(
        <div>            
            <button name="(" onClick={g => this.props.onClick(g.target.name)}>(</button>
            <button name=")" onClick={g => this.props.onClick(g.target.name)}>)</button>
            <button name="CE" onClick={g => this.props.onClick(g.target.name)}>CE</button>
            <button name="C" onClick={g => this.props.onClick(g.target.name)}>C</button> <br />

            <button name="^2" onClick={g => this.props.onClick(g.target.name)}>^2</button>
            <button name="^3" onClick={g => this.props.onClick(g.target.name)}>^3</button>
            <button name="SR" onClick={g => this.props.onClick(g.target.name)}>SR</button> 
            <button name="^-1" onClick={g => this.props.onClick(g.target.name)}>^-1</button> <br />

            <button name="1" onClick={g => this.props.onClick(g.target.name)}>1</button>
            <button name="2" onClick={g => this.props.onClick(g.target.name)}>2</button>
            <button name="3" onClick={g => this.props.onClick(g.target.name)}>3</button>
            <button name="+" onClick={g => this.props.onClick(g.target.name)}>+</button> <br />

            <button name="4" onClick={g => this.props.onClick(g.target.name)}>4</button>
            <button name="5" onClick={g => this.props.onClick(g.target.name)}>5</button>
            <button name="6" onClick={g => this.props.onClick(g.target.name)}>6</button>
            <button name="-" onClick={g => this.props.onClick(g.target.name)}>-</button> <br />

            <button name="7" onClick={g => this.props.onClick(g.target.name)}>7</button>
            <button name="8" onClick={g => this.props.onClick(g.target.name)}>8</button>
            <button name="9" onClick={g => this.props.onClick(g.target.name)}>9</button>
            <button name="*" onClick={g => this.props.onClick(g.target.name)}>*</button> <br />

            <button name="0" onClick={g => this.props.onClick(g.target.name)}>0</button>
            <button name="." onClick={g => this.props.onClick(g.target.name)}>.</button>
            <button name="=" onClick={g => this.props.onClick(g.target.name)}>=</button>
            <button name="/" onClick={g => this.props.onClick(g.target.name)}>/</button> <br />
        </div>
    )
    }
}

export default NumPad;