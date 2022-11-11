import { View, Text } from 'react-native'
import React from 'react'
import {
    createDrawerNavigator,

} from '@react-navigation/drawer'

import { Home } from '../screens/Home'



const Drawer = createDrawerNavigator();


const DrawerMenu = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: Theme.colors.boxBackground
        }}>
            <Drawer.Navigator
                hideStatusBar={true}
                drawerType="slide"
                overLayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '60%',
                    backgroundColor: 'transparent'

                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName="Home"
            >
                <Drawer.Screen name="Home">
                    {(props) => <Home  {...props} />}

                </Drawer.Screen>


            </Drawer.Navigator>

        </View>
    )
}

export default DrawerMenu