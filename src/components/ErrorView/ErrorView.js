import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Metrics, Fonts } from '@theme';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
});

const ErrorView = ({ error }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: Colors.errorColor, fontSize: 14 }} key={error}>
                {error}
            </Text>
        </View>
    );
};

ErrorView.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorView;
