import React from "react";

class ResultBox extends React.Component {
    render() {
        let {result} = this.props;
        return(
            <div className="result">
                <p>{result}</p>
            </div>
        )
    }
}

export default ResultBox;