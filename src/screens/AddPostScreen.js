import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { InputField, InputWrapper } from '../styles/AddPost'

import Icon from 'react-native-vector-icons/Ionicons';

const AddPostScreen = () => {
    return (
        <View style={styles.container}>
            <InputWrapper>
                <InputField
                    placeholder="exprimer"
                    multiline
                    numberOfLines={4}
                />

            </InputWrapper>
            <Text style={styles.welcome}>
                React Native Action Button Example
            </Text>

        </View>)
}
export default AddPostScreen;
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        actionButtonIcon: {
            fontSize: 20,
            height: 22,
            color: 'white',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        },
    }
)