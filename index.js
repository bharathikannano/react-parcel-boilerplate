import React from "react";
import ReactDOM from "react-dom";
import Header from "/component/Header";
import "/src/sass/main.scss";

class HelloMessage extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);
