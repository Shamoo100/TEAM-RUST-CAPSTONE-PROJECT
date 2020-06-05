import '../styles/ResultPage.css'
var React = require("react");

class ResultPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row center-div preds">
                    <div className="col-12 center-div pred-cat"> Predicted Category: {this.props.result['category']}</div>
                </div>
                <div className="row center-div probs-outer">
                    <div className="col-12 center-div probs-title">
                        Probabilities for each class:
                    </div>
                    <div className="col-12 center-div probs">
                        Healthy Wheat: {this.props.result['probs']['healthy_wheat']}
                    </div>
                    <div className="col-12 center-div probs">
                        Leaf Rust: {this.props.result['probs']['leaf_rust']}
                    </div>
                    <div className="col-12 center-div probs">
                        Stem Rust: {this.props.result['probs']['stem_rust']}
                    </div>
                    
                </div>
            </div >
        );
    }
}

export default ResultPage;
