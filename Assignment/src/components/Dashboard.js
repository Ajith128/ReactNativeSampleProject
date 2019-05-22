import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import { connect } from "react-redux";

class Dashboard extends Component {
    /**
     * This method is invoke render row item view in FlatList
     */
    renderCustomContent = item => {
        return (
            <View style={styles.flatview}>
                <Text style={styles.textStyle}>Name : {item.name}</Text>
                <Text style={styles.textStyle}>
                    Gender : {item.gender} {"  "} Age : {item.age}
                </Text>
                <Text style={styles.textStyle}>Email Id : {item.email}</Text>
                <Text style={styles.textStyle}>Phone No : {item.phoneNo}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.employeeDetails}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => this.renderCustomContent(item)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B8A61",
        padding: 16
    },
    flatview: {
        justifyContent: "center",
        borderRadius: 2,
        backgroundColor: "#0e3529",
        marginTop: 10
    },
    textStyle: {
        fontFamily: "Verdana",
        fontSize: 18,
        color: "white",
        padding: 10
    }
});

const mapStateToProps = state => {
    return {
        employeeDetails: state.login.employeeDetails
    };
};

export default connect(
    mapStateToProps,
    null
)(Dashboard);
