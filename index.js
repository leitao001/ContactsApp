/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-get-random-values';

import { AppRegistry, YellowBox, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested',
    'Require cycle:',
    'Remote debugger',
    'useNativeDriver',
]);
LogBox.ignoreLogs(['currentlyFocusedField']);

AppRegistry.registerComponent(appName, () => App);
