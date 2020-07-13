import React from 'react';
import NumPad from './NumPad';
import ResultBox from './Result';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate()
        } else if (button === "C") {
            this.reset()
        } else if (button === "CE") {
            this.backspace()
        } else if (button === "^2") {
            this.square() 
        } else if (button === "SR") {
            this.squarert()
        } else if (button === "^3") {
            this.cube() 
        } else if (button === "^-1") {
            this.reciprocal()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            })
        } catch (g) {
            this.setState({
                result: "error"
            })
        }
    };

    square = () => {
        let A = this.state.result;
        let B = Math.pow(A,2);
        this.setState({
            result: B
        })
    };

    squarert = () => {
        let C = this.state.result;
        let D = Math.pow(C,.5);
        this.setState({
            result: D
        })
    };

    cube = () => {
        let X = this.state.result;
        let Y = Math.pow(X,3);
        this.setState({
            result: Y
        })
    };

    reciprocal = () => {
        let N = this.state.result;
        let M = Math.pow(N,-1);
        this.setState({
            result: M
        })
    }

    reset = () => {
            this.setState({
                result: ""
        })
    };

    backspace = () => {
        try {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    } catch (g) {
        this.setState({
            result: "error"
        })
    }
    };

    render() {
        return(
            <div>
                <div className="calculatorbody">
                    <h2>Calculator</h2>
                    <ResultBox result={this.state.result} />
                    <NumPad onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default App;