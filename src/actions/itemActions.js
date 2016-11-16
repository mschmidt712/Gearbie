import * as types from './actionTypes';
import ItemsApi from '../api/mockItemsApi';

export function getItemsByCategoriesSuccess(itemsByCategory) {
  return { type: types.items.GET_ITEMS_BY_CATEGORY_SUCCESS, itemsByCategory };
}

export function getItemsByCategory(category) {
  return function (dispatch) {
    return ItemsApi.getItemsByCategories(category).then(resp => (
      dispatch(getItemsByCategoriesSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}

export function getItemByIdSuccess(itemById) {
  return { type: types.items.GET_ITEM_BY_ID_SUCCESS, itemById };
}

export function getItemById(id) {
  return function (dispatch) {
    return ItemsApi.getItemById(id).then(resp => (
      dispatch(getItemByIdSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}

export function getNearbyItemsSuccess(nearbyItems) {
  return { type: types.items.GET_NEARBY_ITEMS_SUCCESS, nearbyItems };
}

export function getNearbyItems(zipCode) {
  return function (dispatch) {
    return ItemsApi.getNearbyItems(zipCode).then(resp => (
      dispatch(getNearbyItemsSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}
