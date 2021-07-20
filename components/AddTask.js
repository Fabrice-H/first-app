import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Ajouter une tache"
                onChangeText={changeHandler}
            />
            <Button
                title="Ajouter une tacher"
                color='#6a75ca'
                onPress={() => addTask(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        color: '#333'
    },
});


export default AddTask
