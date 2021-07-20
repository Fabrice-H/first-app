import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Task App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: '#6a75ca',
        color: '#fff',
        height: 80
    },
    title: {
        textAlign: "center",
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic"
    },
});


export default Header;