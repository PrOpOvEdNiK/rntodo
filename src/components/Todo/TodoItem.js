import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function TodoItem(props) {
    const task = props.task;
    return (
        <TouchableOpacity style={styles.row}>
            <View style={styles.radio}/>

            <Text style={styles.text}>{task.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    row: {
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    radio: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderRadius: 11,
        borderColor: '#D9D9D9',
        marginRight: 14
    },
    text: {
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0.01
    }
});

export default TodoItem;