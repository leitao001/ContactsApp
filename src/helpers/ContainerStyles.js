import styled from 'styled-components/native';
import { Colors, Metrics, Fonts } from '@theme';
import { wp, hp, perfectSize } from '@utils/responsive';
import adjust from '@utils/adjust';
import { View, Text, TextInput } from 'react-native';
import { Input, Button, CheckBox, ListItem } from 'react-native-elements';

const itemHeight = 40;

export const MainContainer = styled.View.attrs({})`
    flex: 1;
`;

export const IntroContainer = styled.View.attrs({})``;

export const DataContainer = styled.View`
    flex: 1;
`;
export const Space = styled(View).attrs((props) => ({
    height: props.height ? props.height : 10,
    width: '100%',
}))`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
`;
export const MainScroll = styled.ScrollView``;

export const MainScrollContainer = styled.View.attrs({})`
    align-items: center;
`;

export const SpaceContainer = styled.View.attrs({})`
    aspect-ratio: ${(props) => props.aspectRatio};
    width: 100%;
`;

export const SpaceContainer1 = styled.View.attrs({})`
    aspect-ratio: ${(props) => props.aspectRatio};
    width: 100%;
`;

export const InfoContainer = styled.View.attrs({
    height: hp(itemHeight),
    width: '100%',
})`
    padding-left: 30px;
    padding-right: 30px;
`;
// [{ width: '100%'},[ props.padder && ...Metrics.horizontalPadding}]],
export const ActionFullContainer = styled.View.attrs((props) => ({
    width: '100%',
    ...(props.hPadder && Metrics.horizontalPadding),
    ...(props.vPadder && Metrics.smallVerticalMargin),
    ...(props.vBottomPadder && Metrics.tinyBottomMargin),
    ...props.style,
}))``;
export const GridFullContainer = styled.View.attrs((props) => ({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

    ...(props.hPadder && Metrics.horizontalPadding),
    ...(props.vPadder && Metrics.smallVerticalMargin),
}))``;
export const InfoFullContainer = styled.View.attrs({
    width: '100%',
})``;
export const TitleFullContainer = styled(ListItem).attrs({
    containerStyle: {
        backgroundColor: '#f6f6f6',
    },
})``;
export const HiddenText = styled.Text.attrs()`
    height: 0px;
    opacity: 0;
`;
export const InfoTextContainer = styled.View.attrs({
    width: '100%',
})`
    /* aspect-ratio: 5.36; */
    /* background-color: black; */
    padding-left: 30px;
    padding-right: 30px;
`;
export const InputElement = styled(Input).attrs((props) => ({
    inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,

        height: hp(itemHeight),
    },
    containerStyle: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    inputStyle: {
        ...Fonts.input,
        ...props.inputStyle,
    },
    errorStyle: {
        color: Colors.red,
    },
}))``;
export const ButtonElement = styled(Button).attrs((props) => ({
    buttonStyle: {
        height: props.type === 'clear' ? hp(itemHeight * 0.8) : hp(itemHeight),
        ...props.buttonStyle,
    },
    titleStyle: {
        ...Fonts.button,
        ...props.titleStyle,
    },
}))``;
