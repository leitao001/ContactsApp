import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme';
import { widthValueToDP as wv, heightValueToDP as hv, perfectSize } from '@utils/responsive';

export const styles = StyleSheet.create({
    contentContainerStyle: {
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center',
    },
    modalBtn: {
        borderColor: Colors.inputBorderColor,
        borderWidth: 1,
        justifyContent: 'space-between',
    },
    modalContainer: {
        width: '100%',
    },
});
