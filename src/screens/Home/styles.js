import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme';
import { widthValueToDP as wv, heightValueToDP as hv, perfectSize } from '@utils/responsive';

export const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
        ...Metrics.tinyVerticalPadding,
        backgroundColor: Colors.white,
    },
    contentConatinerStyle: {
        flex: 1,
        alignItems: 'center',
    },
});
