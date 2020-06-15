import api from 'src/api';
import { ITEMS_LOADING_ERROR, ITEMS_LOADING_FINISH, ITEMS_LOADING_START, Item } from '../types/items';
import { AppThunk } from '..';

interface AxiosResponse {
  items: Item[]
}

export const loadItems = (): AppThunk => async dispatch => {
  dispatch({
    type: ITEMS_LOADING_START, 
  });
  try {
    const response = await api.get<AxiosResponse>('6f15e3ad-bf04-4940-9b81-0f14fac8ebf2');
    dispatch({
      type: ITEMS_LOADING_FINISH,
      payload: {
        data: response.data.items,
      },
    });
  } catch (err) {
    dispatch({
      type: ITEMS_LOADING_ERROR,
    });
  }
};
