import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonAction from '../components/ButtonAction';

export default function AppHeader() {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>Сегодня</Text>
  
          <ButtonAction size="sm" variant="secondary" content="Править"/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50
    },
    headerText: {
        fontWeight: "800",
        fontSize: 28,
        lineHeight: 42
    }
});