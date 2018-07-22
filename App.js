// App.js

import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux';
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'


export default class App extends React.Component {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        setTimeout(function(){
            SplashScreen.hide();
        }, 3000);
    }

    render() {
        let persistor = persistStore(Store)

        return (
            <Provider store={Store}>
                <PersistGate persistor={persistor}>
                    <Navigation />
                    <StatusBar
                        backgroundColor='#000032'
                        barStyle="light-content"
                        hidden={false}
                    />
                </PersistGate>

            </Provider>
        )
    }
}
