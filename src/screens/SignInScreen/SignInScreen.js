import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TextInput,
    Alert,
} from 'react-native';
import cryp from '../../images/cryp.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { firebase } from '../../../config';
import so from '../../images/so.jpg'
import { Video, AVPlaybackStatus } from 'expo-av';
import bit from '../../images/bit.jpg'
import logoS from '../../images/logoS.png'
const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSignInPressed = async data => {
        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(data.email.trim(), data.password);
            console.log(response);
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
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
                    <Image
                        source={logoS}
                        style={[styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />

                    <CustomInput
                        name="email"
                        control={control}
                        placeholder="Email"
                        rules={{
                            required: 'Email is required',
                            pattern: { message: 'Email is invalid' },
                        }}
                    />

                    <CustomInput
                        name="password"
                        placeholder="Mot de passe"
                        secureTextEntry

                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 3,
                                message: 'Password should be minimum 3 characters long',
                            },
                        }}
                    />

                    <CustomButton
                        text={loading ? 'Loading...' : "S'Identifier"}
                        onPress={handleSubmit(onSignInPressed)}
                    />

                    <CustomButton
                        text="Mot de passe oublié?"
                        onPress={onForgotPasswordPressed}
                        type="TERTIARY"
                    />

                    <SocialSignInButtons />

                    <CustomButton
                        text="Vous n'avez pas de compte ? Créer une"
                        onPress={onSignUpPress}
                        type="TERTIARY"
                    />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
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

export default SignInScreen;
