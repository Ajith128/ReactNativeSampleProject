import React, { Component } from "react";
import { Router, Scene, Actions, ActionConst } from "react-native-router-flux";

import LoginScreen from "./LoginScreen";
import Dashboard from "./Dashboard";

export default class Routes extends Component {
    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: "#04493F", color: "white" }}>
                <Scene key="root">
                    <Scene key="loginScreen" component={LoginScreen} animation="fade" hideNavBar={true} initial={true} />
                    <Scene
                        onLeft={() => {
                            Actions.pop();
                        }}
                        key="dashboard"
                        component={Dashboard}
                        animation="fade"
                        hideNavBar={false}
                        title="Employee Details"
                    />
                </Scene>
            </Router>
        );
    }
}
