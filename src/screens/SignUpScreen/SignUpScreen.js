import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { firebase } from '../../../config';

import { Video, AVPlaybackStatus } from 'expo-av';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;







const SignUpScreen = () => {



    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();



    const onRegisterPressed = async data => {
        await firebase.auth().createUserWithEmailAndPassword(data.email.trim(), data.password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://sowa-50d53.firebaseapp.com',
                })
                    .then(() => {
                        alert('Verication email sent')
                    }).catch((error) => {
                        alert(error.message)
                    })
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                data
                            })
                    })

                    .catch((error) => {
                        alert(error.message)
                    })
            })

            .catch((error => {
                alert(error.message)
            }))
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <>
            <Video
                source={require('../../video/video.mp4')}
                style={styles.video}
                paused={false}
                repeat={true}
                resizeMode="cover"
                muted
                rate={1}
                shouldPlay={true}
                isLooping={true}



            />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Text style={styles.title}>Créer un compte</Text>

                    <CustomInput
                        name="name"
                        control={control}
                        placeholder="Nom"
                        rules={{
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name should be at least 3 characters long',
                            },
                            maxLength: {
                                value: 24,
                                message: 'Name should be max 24 characters long',
                            },
                        }}
                    />

                    <CustomInput
                        name="username"
                        control={control}
                        placeholder="Prénom"
                        rules={{
                            required: 'Username is required',
                            minLength: {
                                value: 3,
                                message: 'Username should be at least 3 characters long',
                            },
                            maxLength: {
                                value: 24,
                                message: 'Username should be max 24 characters long',
                            },
                        }}
                    />
                    <CustomInput
                        name="email"
                        control={control}
                        placeholder="Email"

                        rules={{
                            required: 'Email is required',
                            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
                        }}
                    />
                    <CustomInput
                        name="password"
                        control={control}
                        placeholder="Mot de passe"
                        secureTextEntry

                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password should be at least 8 characters long',
                            },
                        }}
                    />
                    <CustomInput
                        name="password-repeat"
                        control={control}
                        placeholder="Répéter mot de passe"
                        secureTextEntry
                        rules={{
                            validate: value => value === pwd || 'Password do not match',
                        }}
                    />

                    <CustomButton
                        text="S'inscrire"
                        onPress={handleSubmit(onRegisterPressed)}
                    />

                    <Text style={styles.text}>
                        En vous inscrivant, vous confirmez que vous acceptez notre{' '}
                        <Text style={styles.link} onPress={onTermsOfUsePressed}>
                            Conditions d'utilisation
                        </Text>{' '}
                        et{' '}
                        <Text style={styles.link} onPress={onPrivacyPressed}>
                            Privacy Policy
                        </Text>
                    </Text>

                    <SocialSignInButtons />

                    <CustomButton
                        text="Avoir un compte? S'identifier"
                        onPress={onSignInPress}
                        type="TERTIARY"
                    />
                </View>
            </ScrollView>
        </>
    );

}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
    video: {
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,

    },


});

export default SignUpScreen;
