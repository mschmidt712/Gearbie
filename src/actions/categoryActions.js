import * as types from './actionTypes';
import CategoryApi from '../api/mockCategoryApi';

export function getAllCategoriesSuccess(categories) {
  return { type: types.categories.GET_ALL_CATEGORIES_SUCCESS, categories };
}

export function getAllCategories() {
  return function (dispatch) {
    return CategoryApi.getAllCategories().then(resp => (
      dispatch(getAllCategoriesSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}

