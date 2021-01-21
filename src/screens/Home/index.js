import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Alert } from 'react-native';

//===third party plugins=======
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from 'native-base';
import { Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import { ListItem, Text } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

//===custom components & containers  =======

//=======selectors==========================
import { contactsSelector } from '@modules/contact/selectors';

//=======reducer actions====================
import { deleteContact } from '@modules/contact/actions';

//==============utils==================================

//==============styles==================================
import { styles } from './styles';
import { Colors } from '@theme';
import { SpaceContainer } from '@helpers/ContainerStyles';
//AssetType
//==============images & constants ===============================
//=============import end ====================

//===========for test ===========================

const UserItem = React.memo(
    ({ user, index = 0, onPress = () => {}, onPressEdit = () => {}, onPressRemove = () => {} }) => {
        return (
            <ListItem bottomDivider>
                <Icon name="person" type="ionicon" color={Colors.grey} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                </ListItem.Content>
                <Icon
                    name="edit"
                    type="entypo"
                    color={Colors.grey}
                    onPress={() => {
                        onPressEdit(user.id);
                    }}
                />
                <Icon
                    name="trash"
                    type="entypo"
                    color={Colors.grey}
                    onPress={() => {
                        onPressRemove(user.id);
                    }}
                />
            </ListItem>
        );
    },
    // (prev, next) => {
    //     return prev.user.id === next.user.id;
    // },
);
const Home = ({ navigation, route }) => {
    //=========Hook Init===========
    const dispatch = useDispatch();

    //========== Props Section========
    const conatctList = useSelector((store) => contactsSelector(store));
    //========= State Section========
    //========== GraphQl query Section========
    //========== Use Effect Section========

    //========== User Event Action Section========
    //========== Flat List Action Section========
    const onEndReachedCalledDuringMomentum = useRef(true);

    const keyExtractor = useCallback((item) => item.id.toString(), []);
    const onEndReached = ({ distanceFromEnd }) => {
        if (!onEndReachedCalledDuringMomentum.current) {
            onEndReachedCalledDuringMomentum.current = true;
        }
    };
    const onMomentumScrollBegin = () => {
        onEndReachedCalledDuringMomentum.current = false;
    };
    const onEditUser = useCallback(
        (id) => {
            navigation.navigate('AddUser', { userId: id });
        },
        [navigation],
    );
    const onRemoveUser = useCallback(
        async (id) => {
            try {
                Alert.alert(
                    'Confirm',
                    'Would you remove this contact?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                        {
                            text: 'OK',
                            onPress: () => {
                                dispatch(deleteContact({ id }));
                            },
                        },
                    ],
                    { cancelable: false },
                );
            } catch (error) {}
        },
        [dispatch],
    );
    const renderUserItem = ({ item, index }) => {
        return (
            <UserItem
                user={item}
                index={index}
                onPressEdit={onEditUser}
                onPressRemove={onRemoveUser}
            />
        );
    };

    return (
        <Container>
            <Content contentContainerStyle={styles.contentConatinerStyle}>
                <SpaceContainer aspectRatio={20} />
                <Text h8>{'Test'}</Text>
                <SpaceContainer aspectRatio={20} />
                <Text h4>{'Collaction'}</Text>
                <SpaceContainer aspectRatio={20} />
                <View style={styles.contentView}>
                    <FlatList
                        data={conatctList}
                        renderItem={renderUserItem}
                        keyExtractor={keyExtractor}
                        onEndReached={onEndReached}
                        onEndReachedThreshold={0.5}
                        onMomentumScrollBegin={onMomentumScrollBegin}
                    />
                </View>
                <ActionButton
                    buttonColor={Colors.violet}
                    onPress={() => {
                        navigation.navigate('AddUser');
                    }}
                />
            </Content>
        </Container>
    );
};

export default Home;
