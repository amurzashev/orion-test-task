import { ItemsActionTypes, ItemsState, ITEMS_LOADING_START, ITEMS_LOADING_ERROR, ITEMS_LOADING_FINISH, ITEMS_UPDATE_ITEM } from '../types/items';

const initialState: ItemsState = {
  data: [],
  loading: false,
  error: false,
};

export default (state = initialState, action: ItemsActionTypes): ItemsState => {
  switch (action.type) {
  case ITEMS_LOADING_START:
    return {
      data: [],
      loading: true,
      error: false,
    };
  case ITEMS_LOADING_ERROR:
    return {
      data: [],
      loading: false,
      error: true,
    };
  case ITEMS_LOADING_FINISH:
    return {
      data: action.payload.data,
      loading: false,
      error: false,
    };
  case ITEMS_UPDATE_ITEM:
    return {
      ...state,
      data: [
        ...state.data.slice(0, action.payload.index),
        action.payload.item,
        ...state.data.slice(action.payload.index + 1, state.data.length),
      ],
    };
  default:
    return state;
  }
};
