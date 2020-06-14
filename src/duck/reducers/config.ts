import { ConfigActionTypes, ConfigState, CONFIG_LOADING_ERROR, CONFIG_LOADING_FINISH, CONFIG_LOADING_START } from '../types/config';

const initialState = {
  data: null,
  loading: false,
  error: false,
};

export default (state = initialState, action: ConfigActionTypes): ConfigState => {
  switch (action.type) {
    case CONFIG_LOADING_START:
      return {
        data: null,
        loading: true,
        error: false,
      };
    case CONFIG_LOADING_ERROR:
      return {
        data: null,
        loading: false,
        error: true,
      };
      case CONFIG_LOADING_FINISH:
        return {
          data: action.payload.data,
          loading: false,
          error: true,
        };
    default:
      return state;
  }
};
