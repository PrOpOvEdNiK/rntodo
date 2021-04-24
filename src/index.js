import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/Todo/TodoList';
import AppHeader from './layouts/header';

export default function AppWrapper() {
    return (
        <>
            <AppHeader/>
            <TodoList/>
        </>
    );
}

const styles = StyleSheet.create({
    
});