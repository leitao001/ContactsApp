import { Dimensions, PixelRatio } from 'react-native';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import { Colors, Metrics, Fonts } from '@theme';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
// Retrieve initial screen's width
export const screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
export const screenHeight = Dimensions.get('window').height;

export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 667;

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension) => {
    return wp2dp((dimension / DESIGN_WIDTH) * 100 + '%');
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = (dimension) => {
    return hp2dp((dimension / DESIGN_HEIGHT) * 100 + '%');
};

export function widthValueToDP(width) {
    const elemWidth =
        typeof width === 'number'
            ? parseFloat(width / DESIGN_WIDTH)
            : parseFloat(parseFloat(width) / DESIGN_WIDTH);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth);
}

export function heightValueToDP(height) {
    const elemHeight =
        typeof width === 'number'
            ? parseFloat(height / DESIGN_HEIGHT)
            : parseFloat(parseFloat(height) / DESIGN_HEIGHT);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight);
}

const designResolution = {
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
}; //this size is the size that your design is made for (screen size)
export const perfectSize = create(designResolution);

//responsive item image
export const marginValue = 5;
export const marginSmallValue = 3;
const cardMarginValue = 2;

export const itemSize = parseInt(
    screenWidth - 2 * Metrics.smallHorizontalMargin.marginHorizontal,
    10,
);
export const oneColItemSize = parseInt(
    screenWidth - 2 * Metrics.smallHorizontalMargin.marginHorizontal,
    10,
);

export const towColsItemSize = parseInt(
    (screenWidth - marginValue * 6 - cardMarginValue * 8) / 2,
    10,
);
export const smallTowColsItemSize = parseInt(
    (screenWidth - marginSmallValue * 6 - cardMarginValue * 8) / 2,
    10,
);
export const threeColsItemSize = parseInt(
    (screenWidth - marginValue * 8 - cardMarginValue * 12) / 3,
    10,
);
