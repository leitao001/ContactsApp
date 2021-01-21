import axios from 'axios';
import * as constants from './constant';

const request = async ({ path, method, data = null }) => {
    var queryData = {
        method: method,
        url: constants.ROOT_API + path,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
        queryData = { ...queryData, data: data };
    } else {
        queryData = { ...queryData, params: data };
    }
    try {
        let response = await axios(queryData);

        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
};
export default request;
