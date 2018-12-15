import React, { Component } from "react";
import {
    View, Text, StyleSheet,
    TouchableOpacity
} from "react-native";

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.buttonItem}
                    onPress={() => {
                        //Call this action Container
                    }}
                />
                <Text style={{
                    margin: 20,
                    color: this.props.completed == true ? 'darkgreen' : 'black'
                }}>
                    {this.props.taskName}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonItem: {
        position: 'absolute',
        top: 0, bottom: 0,
        left: 0, right: 0
    }
})