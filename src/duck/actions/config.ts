import api from 'src/api';
import { CONFIG_LOADING_ERROR, CONFIG_LOADING_FINISH, CONFIG_LOADING_START, Config } from '../types/config';
import { AppThunk } from '..';

interface AxiosResponse {
  config: Config
}

export const loadConfig = (): AppThunk => async dispatch => {
  dispatch({
    type: CONFIG_LOADING_START, 
  });
  try {
    const response = await api.get<AxiosResponse>('9700b81e-1edd-49b8-8160-736b24a989a7');
    dispatch({
      type: CONFIG_LOADING_FINISH,
      payload: {
        data: response.data.config,
      },
    });
  } catch (err) {
    dispatch({
      type: CONFIG_LOADING_ERROR,
    });
  }
};
