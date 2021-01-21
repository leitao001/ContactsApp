/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from '@store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
import { Spinner } from 'native-base';
import { navigationRef, isReadyRef } from '@src/RootNavigation';
import AppStack from '@src/router';
enableScreens();

const RootContainer = React.memo(() => {
    useEffect(() => {
        return () => {
            isReadyRef.current = false;
        };
    }, []);
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}>
            <AppStack />
        </NavigationContainer>
    );
});

const App = () => {
    return (
        <Suspense fallback={null}>
            <Provider store={store}>
                <PersistGate
                    loading={
                        <View style={styles.container}>
                            <Spinner color="#219653" />
                        </View>
                    }
                    persistor={persistor}>
                    <RootContainer />
                </PersistGate>
            </Provider>
        </Suspense>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default React.memo(App);
//json-server --host 192.168.1.5 db.json
