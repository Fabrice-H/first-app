import React, { useState } from 'react';
import {
    StyleSheet, View, FlatList, SafeAreaView, Alert,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Task from './components/Task'

export default function App() {
    const [tasks, setTasks] = useState([
        { "id": "1", "task": "HTML I", "done": true },
        { "id": "2", "task": "CSS", "done": true },
        { "id": "3", "task": "Responsive design", "done": true },
    ])

    const uniqueId = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
    }

    const addTask = (text) => {
        if (!text) {
            Alert.alert('Pas de tâche ?', 'Veuillez ajouter une tâche', [{ text: 'OK' }])
        } else {
            setTasks(prevTasks => {
                return [{ task: text, id: uniqueId() }, ...prevTasks]
            })
        }
    }

    const deleteTask = (id) => {
        setTasks(prevTasks => {
            return prevTasks.filter(item => item.id !== id)
        })
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <SafeAreaView style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTask addTask={addTask} />
                    <View style={styles.list}>
                        <FlatList
                            data={tasks}
                            renderItem={({ item }) => (
                                <Task item={item} deleteTask={deleteTask} />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedede',
    },
    content: {
        padding: 30,
        backgroundColor: '#fff',
        flex: 1
    },
    list: {
        marginTop: 30,
        backgroundColor: '#fff',
        flex: 1
    }
});
