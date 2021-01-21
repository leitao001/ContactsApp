/**
 * This file contains metric values that are global to the application.
 */

// Examples of metrics you can define:
export const tiny = 5;
export const small = tiny * 3; // 15
export const normal = tiny * 4; // 20
export const medium = tiny * 5; // 25

const Metrics = {
    bottomMargin: {
        marginBottom: normal,
    },
    tinyBottomMargin: {
        marginBottom: tiny,
    },
    mediumBottomMargin: {
        marginBottom: medium,
    },

    tinyVerticalMargin: {
        marginVertical: tiny,
    },
    smallVerticalMargin: {
        marginVertical: small,
    },
    verticalMargin: {
        marginVertical: normal,
    },
    mediumVerticalMargin: {
        marginVertical: medium,
    },

    tinyHorizontalMargin: {
        marginHorizontal: tiny,
    },
    smallHorizontalMargin: {
        marginHorizontal: small,
    },
    horizontalMargin: {
        marginHorizontal: normal,
    },
    mediumHorizontalMargin: {
        marginHorizontal: medium,
    },

    tinyHorizontalPadding: {
        paddingHorizontal: tiny,
    },
    smallHorizontalPadding: {
        paddingHorizontal: small,
    },
    horizontalPadding: {
        paddingHorizontal: normal,
    },
    mediumHorizontalPadding: {
        paddingHorizontal: medium,
    },

    tinyVerticalPadding: {
        paddingVertical: tiny,
    },
    smallVerticalPadding: {
        paddingVertical: small,
    },
    verticalPadding: {
        paddingVertical: normal,
    },
    mediumVerticalPadding: {
        paddingVertical: medium,
    },
};
export default Metrics;
