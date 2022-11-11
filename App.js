import React from 'react';
import AddPostScreen from './src/screens/AddPostScreen';
import { NavigationContainer } from '@react-navigation/native';
import ChatStackNavigator from './src/navigations/Navigator';
import RootStack from './src/navigations/RootStackScreen';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';
import { ActivityIndicator, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useState, useEffect, useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from './config';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import HomeScreen from "./src/screens/HomeScreen";
import Header from "./src/components/Header";
import Discussion from './src/screens/Discussion';
import Chat from './src/screens/Chat';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
import Icon from '@expo/vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Setting from './src/screens/Setting';
import Friends from './src/screens/Friends';
const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPostScreen')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPostScreen"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={Profile}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);








const ProfileStack = ({ navigation }) => {
  <Stack.Navigator>
    <Stack.Screen
      name='Profile'
      component={Profile}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        ),
      }}

    />
    <Stack.Screen
      name='EditProfile'
      component={EditProfile}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        }

      }}

    />

  </Stack.Navigator>

}

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f2404c',
        inactiveTintColor: '#60c4be',
        style: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#FFF',
          elevation: 2
        },

      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={FeedStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name='ios-compass' color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name='chat' color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name='ios-person' color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name='Setting'
        component={Setting}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name='settings' color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name='Friends'
        component={Friends}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person-add-sharp' color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator()
const screenOptionStyle = {
  headerShown: false
};
function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);

  }
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => unsubscribe();
  }, []);
  if (initializing) return null;

  if (!user) {
    return (


      <Stack.Navigator >

        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false,
          }}



        />
        <Stack.Screen name="SignIn" component={SignInScreen}
          options={{
            headerShown: false,
          }}

        />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{
            headerTitle: () => <Header name="Dashboard" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 15
            },
            headerShown: false,
          }}




        />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />


      </Stack.Navigator>
    )
  }
  return (

    <Stack.Navigator screenOptions={screenOptionStyle}>

      <Stack.Screen name='Chat' component={BottomTabNavigator} options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name='Discussion' component={Discussion} options={{
        headerShown: false,
      }}
      />


    </Stack.Navigator>

  );
}
export default () => {



  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
