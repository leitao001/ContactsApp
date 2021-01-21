import request from '@utils/request';
export const fetchContactById = async (id) => {
    try {
        const response = await request({
            path: 'contacts/' + id,
            method: 'GET',
        });
        return response;
    } catch (error) {}
};
export const fetchAllConact = async () => {
    try {
        const response = await request({
            path: 'contacts',
            method: 'GET',
        });
        return response;
    } catch (error) {}
};
export const addContactQuery = async ({ data }) => {
    try {
        const response = await request({
            path: 'contacts',
            method: 'POST',
            data,
        });
        return response;
    } catch (error) {}
};
export const updateContactQuery = async ({ id, data }) => {
    try {
        const response = await request({
            path: 'contacts/' + id,
            method: 'PUT',
            data,
        });
        return response;
    } catch (error) {}
};
export const deleteContactQuery = async ({ id }) => {
    try {
        const response = await request({
            path: 'contacts/' + id,
            method: 'DELETE',
        });
        return response;
    } catch (error) {}
};
