import React, { useEffect } from 'react';

import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Animated from 'react-native-reanimated';

import { fetchCities } from '@modules/asset/actions';
import { fetchContacts } from '@modules/contact/actions';

//================== screen components=============================
import AddUser from '@screens/AddUser';
import Home from '@screens/Home';

//================== screen components end=============================

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
    );
};

const NativeStack = createNativeStackNavigator();

const AppStack = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCities());
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
    );
    /*  return (
        <NativeStack.Navigator initialRouteName={'Main'} screenOptions={{ headerShown: false }}>
            <NativeStack.Screen name="Main" component={MainStack} />
        </NativeStack.Navigator>
    ); */
};

export default React.memo(AppStack);
