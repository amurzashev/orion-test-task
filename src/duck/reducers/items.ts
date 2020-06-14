import { ItemsActionTypes, ItemsState, ITEMS_LOADING_START, ITEMS_LOADING_ERROR, ITEMS_LOADING_FINISH } from '../types/items';

const initialState: ItemsState = {
  data: null,
  loading: false,
  error: false,
};

export default (state = initialState, action: ItemsActionTypes): ItemsState => {
  switch (action.type) {
    case ITEMS_LOADING_START:
      return {
        data: null,
        loading: true,
        error: false,
      };
    case ITEMS_LOADING_ERROR:
      return {
        data: null,
        loading: false,
        error: true,
      };
      case ITEMS_LOADING_FINISH:
        return {
          data: action.payload.data,
          loading: false,
          error: true,
        };
    default:
      return state;
  }
};
