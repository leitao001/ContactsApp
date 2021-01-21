import { createSelector } from 'reselect';
export const asset = (state) => state.asset;
export const citiesSelector = createSelector(asset, (data) => data.get('cities')?.toJS() || []);
