import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import {} from 'react-native';

//===third party plugins=======
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content } from 'native-base';
import { Icon, Text, Button, Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';

import Spinner from 'react-native-loading-spinner-overlay';
import _ from 'lodash';
import ModalSelector from 'react-native-modal-selector';

//===custom components & containers  =======
import ErrorView from '@components/ErrorView/ErrorView';

//=======selectors==========================
import { citiesSelector } from '@modules/asset/selectors';
//=======reducer actions====================
import { addNewContact, updateContact } from '@modules/contact/actions';

//==============utils==================================
import * as constants from '@utils/constant';
import * as apis from '@utils/api';

//==============styles==================================
import { styles } from './styles';
import { Colors, Metrics, Fonts } from '@theme';
import { wp, hp } from '@utils/responsive';
import { ActionFullContainer, ButtonElement } from '@helpers/ContainerStyles';
//AssetType
//==============images & constants ===============================
//=============import end ====================

//===========for test ===========================

const CityInput = ({ value = null, data = [], onSelectCity = () => {} }) => {
    return (
        <ModalSelector
            data={data}
            onChange={onSelectCity}
            disabled={data.length === 0}
            style={styles.modalContainer}
            keyExtractor={(item) => item.id}
            labelExtractor={(item) => item.label}>
            <Button
                title={value || 'Select City'}
                buttonStyle={styles.modalBtn}
                titleStyle={{
                    ...Fonts.input,
                    color: Colors.inputFontColor,
                }}
                icon={{
                    name: 'caret-down-sharp',
                    type: 'ionicon',
                    size: hp(20),
                    color: Colors.inputFontColor,
                }}
                iconRight={true}
                type="outline"
            />
        </ModalSelector>
    );
};
const AddUser = ({ navigation, route }) => {
    //=========Hook Init===========
    const dispatch = useDispatch();
    //========== Props Section========
    const { control, handleSubmit, errors, getValues, setValue, reset } = useForm();
    const cityData = useSelector((store) => citiesSelector(store));
    const updateActionIdRef = useRef(null);
    //========= State Section========
    const [pending, setPending] = useState(false);
    //========== GraphQl query Section========
    //========== Use Effect Section========
    useEffect(() => {
        const fetchContactById = async (id) => {
            try {
                const activeContact = await apis.fetchContactById(id);
                const { city: cityId, name, phoneNumber } = activeContact;
                const city = _.findLast(cityData, (item) => item.id === cityId);
                updateActionIdRef.current = id;
                reset({
                    name,
                    city,
                    phoneNumber,
                });
            } catch (error) {}
        };

        if (route.params?.userId) {
            fetchContactById(route.params?.userId);
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.userId]);
    //========== User Event Action Section========
    const onSelectCity = async (activeCity) => {
        setValue('city', activeCity);
    };
    const actionCallback = () => {
        setPending(false);
        navigation.goBack();
    };
    const confirmAllChange = useCallback(async (data) => {
        try {
            // setPending(true);
            const { name, phoneNumber, city } = data;
            if (updateActionIdRef.current !== null) {
                dispatch(
                    updateContact(
                        { id: updateActionIdRef.current, name, phoneNumber, city: city.id },
                        actionCallback,
                    ),
                );
            } else {
                dispatch(addNewContact({ name, phoneNumber, city: city.id }, actionCallback));
            }
        } catch (error) {
            setPending(false);
        }
    }, []);
    return (
        <Container>
            <Content padder contentContainerStyle={styles.contentContainerStyle}>
                <Text h4>{'CONTACT REGISTER'}</Text>
                <ActionFullContainer>
                    <Controller
                        render={({ onChange, onBlur, value }) => {
                            return (
                                <Input
                                    placeholder={'Name'}
                                    inputContainerStyle={[{ borderWidth: 1, borderRadius: 4 }]}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors?.name?.message}
                                />
                            );
                        }}
                        control={control}
                        rules={{
                            required: 'Name is required.',
                        }}
                        name={'name'}
                        defaultValue={null}
                    />
                    <Controller
                        render={({ onChange, onBlur, value }) => {
                            return (
                                <Input
                                    placeholder={'Phone Number'}
                                    inputContainerStyle={[{ borderWidth: 1, borderRadius: 4 }]}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors?.phoneNumber?.message}
                                    keyboardType={'phone-pad'}
                                />
                            );
                        }}
                        control={control}
                        rules={{
                            required: 'phoneNumber is required.',
                        }}
                        name={'phoneNumber'}
                        defaultValue={null}
                    />
                    <ActionFullContainer style={{ paddingHorizontal: 10 }}>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, onFocus, value }) => (
                                <CityInput
                                    data={cityData}
                                    value={value?.label || null}
                                    onSelectCity={onSelectCity}
                                />
                            )}
                            name={'city'}
                            rules={{
                                required: 'City is required.',
                            }}
                            defaultValue={null}
                        />
                        <ErrorView error={errors?.city?.message || ''} />
                    </ActionFullContainer>
                </ActionFullContainer>
                <ButtonElement
                    title={'REGISTER'}
                    buttonStyle={{
                        borderColor: Colors.grey5,
                        backgroundColor: Colors.violet,
                    }}
                    containerStyle={{ width: '100%', paddingHorizontal: 10 }}
                    titleStyle={{
                        color: Colors.white,
                    }}
                    type={'outline'}
                    onPress={handleSubmit(confirmAllChange)}
                />
            </Content>
            <Spinner
                visible={pending}
                textContent={'One moment...'}
                textStyle={{ color: '#fff' }}
            />
        </Container>
    );
};

export default AddUser;
