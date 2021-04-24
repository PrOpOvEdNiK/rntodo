import React from "react";
import { View, Text, FlatList } from "react-native";
import {connect} from "react-redux";
import {completeTask} from "../../store/actions";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const todoList = props?.items;
    
    if (todoList.length) {
        return (
            <FlatList
                data={todoList}
                renderItem={({ item }) => (
                    <TodoItem task={item} completeTaskAction={props.completeTaskAction} />
                  )}
                keyExtractor={todoList => todoList.id}
            />
        );
    } else {
        return (
            <View><Text>Список задач пуст</Text></View>
        );
    }
}

const mapStateToProps = (state) => (state.todoList);

const mapDispatchToProps = dispatch => {
    return {
        completeTaskAction: (id) => dispatch(completeTask(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);