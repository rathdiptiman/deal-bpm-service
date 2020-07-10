

import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'

import ServerInfo from "./ServerInfo";
import ProcessDefsInfo from "./ProcessDefsInfo";
import ProcessInstancesInfo from "./ProcessInstancesInfo";

class App extends Component {

    render() {
        return (
                <div className="App">
                <div>
                <HeaderComponent/>
                </div>
                    <div class="jumbotron jumbotron-fluid" className="ReactTitleStyle">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            <strong><h3>Welcome to Deal BPM Application!</h3></strong>
                        </p>
                        <br/>
                    </div>

                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="card-deck">
                                
                                <ServerInfo/>
                                <ProcessDefsInfo/>
                                <ProcessInstancesInfo/>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                    <FooterComponent/>
                </div>
                </div>
                
        );
    }
}

export default App;
