import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
const employeeList = require("./../data/userData.json");
import { addEmployeeList } from "./../redux/loginAction";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: "prashant@gmail.com",
            password: "prashant123",
            loginDetails: {
                username: "prashant@gmail.com",
                password: "prashant123"
            }
        };
    }

    /**
     * Thie method is invoke when we click login button
     * We get details of the input box
     * and also check validation inside of this object
     */
    handleLoginClick = () => {
        const { emailId, password, loginDetails } = this.state;
        let userDetails = {
            password: password,
            username: emailId
        };

        if (emailId === "") {
            this.showToastMessageForAndroid("Please Enter Email Id");
        } else if (!this.emailValidate(emailId)) {
            this.showToastMessageForAndroid("Invalid Email Id");
        } else if (password === "") {
            this.showToastMessageForAndroid("Please Enter Password");
        } else {
            let isValidateTwoArray = this.validateCredentialIsSame(userDetails, loginDetails);
            if (isValidateTwoArray) {
                this.props.dispatch(addEmployeeList(employeeList));
                setTimeout(() => {
                    Actions.dashboard();
                }, 2300);
            } else {
                this.showToastMessageForAndroid("You entred invalid credential");
            }
        }
    };

    /**
     * Thie method is used to check email validation
     */
    emailValidate = email => {
        let isValid = false;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            isValid = false;
        } else {
            isValid = true;
        }
        return isValid;
    };

    /**
     * This method is used to check user entered credential and given credential is same
     */
    validateCredentialIsSame = (loginCredential, predefinedData) => {
        var isValidateCredential = true;
        for (var index in loginCredential) {
            if (loginCredential[index] !== predefinedData[index]) {
                isValidateCredential = false;
                break;
            }
        }
        return isValidateCredential;
    };

    showToastMessageForAndroid = message => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.user_input}
                    onChangeText={emailId => this.setState({ emailId })}
                    value={this.state.emailId}
                    placeholder="Email Id"
                />
                <TextInput
                    style={styles.user_input}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.sign_in_button} onPress={this.handleLoginClick}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: "white"
                        }}
                    >
                        {" "}
                        Sign In{" "}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B8A61",
        padding: 20
    },
    user_input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        color: "#000000",
        marginTop: 5,
        marginBottom: 5
    },
    sign_in_button: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        backgroundColor: "#1b5643",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    }
});

export default connect()(LoginScreen);
