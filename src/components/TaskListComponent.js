import React, { Component } from "react";
import {
    View, Text, Image, FlatList,
    TouchableOpacity, StyleSheet
} from "react-native";
import TaskItemContainer from "../containers/TaskItemContainer";

export default class TaskListComponent extends Component {
    render() {
        return (
            <FlatList
                data={this.props.tasks}
                keyExtractor={(item, index) => item.taskName}
                renderItem={({ item, index }) => {
                    return (
                        <TaskItemContainer {...item} />
                    );
                }}
            />
        )
    }
}