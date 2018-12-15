import React, { Component } from "react";
import {
    View, Text, Image,
    TextInput, TouchableOpacity,
    StyleSheet
} from "react-native";

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: ''
        }
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.viewButton} />
                <View style={styles.viewTextInput}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='Enter task name'
                        placeholderTextColor='grey'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newTaskName: text });
                            }
                        }
                    />
                </View>
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        //Call click event => use "Container"
                        this.props.onClickAdd(this.state.newTaskName);
                    }}
                >
                    {/* <Text>ADD</Text> */}
                    <Image
                        source={require('../../images/plus.png')}
                        style={styles.addButton}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 64,
        // marginHorizontal: 12,
        marginTop: 30,
        // backgroundColor: 'red'
    },
    viewButton: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTextInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        height: 40,
        padding: 10,
        color: 'black',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    addButton: {
        width: 32,
        height: 32,
        resizeMode: 'contain'
    }
})