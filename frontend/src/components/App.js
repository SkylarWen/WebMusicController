import React, {Component} from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
    // return <h1>This is a testcase {this.props.name}</h1>;
        return  ( 
        <div className='center'>
            <HomePage />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App name="sky"/>, appDiv);