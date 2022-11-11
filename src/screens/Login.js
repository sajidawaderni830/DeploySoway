import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {



    render() {

        return (
            <View style={{ backgroundColor: "#FFF", height: "90%" }}>
                <Image source={require('../images/14.jpg')}
                    style={{ width: "100%", height: "40%" }}
                />



                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                    }}
                >Save the world</Text>

                <Text
                    style={{
                        fontFamily: "SemiBold",
                        marginHorizontal: 55,
                        textAlign: 'center',
                        marginTop: 5,
                        opacity: 0.4

                    }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 50,
                    paddingHorizontal: 10,
                    borderColor: "#005c71",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="mail" color="#005c71" size={30} />
                    <TextInput
                        style={{ paddingHorizontal: 10 }}
                    />



                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#005c71",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="mail" color="#005c71" size={30} />
                    <TextInput
                        style={{ paddingHorizontal: 10 }}
                    />



                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <Text style={{
                        color: "white",
                        fontFamily: "SemiBold"
                    }}>Already a member</Text>
                </View>
                <Text

                    onPress={() => this.props.navigation.navigate('Register')}

                    style={{
                        alignSelf: "center",
                        color: "#005c71",
                        fontFamily: "SemiBold",
                        paddingVertical: 30
                    }}>New User</Text>


            </View>
        )
    }
}