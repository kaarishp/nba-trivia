import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Welcome to NBA Trivia!</Text>
            </View>
            <View style={styles.middle}>
                <TouchableOpacity style={styles.dailyModeButton} onPress={() => navigation.navigate('Daily')}>
                    <Text style={styles.buttonText}>Daily Mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.swipeModeButton}>
                    <Text style={styles.buttonText}>Swipe Mode</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.author}>Author: Kaarish & Faiz</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'space-between',
    },
    top: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dailyModeButton: {
        backgroundColor: 'orange',
        padding: 10,
        margin: 10,
    },
    swipeModeButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'white',
    },
    author: {
        fontSize: 18,
    },
});

export default HomePage;