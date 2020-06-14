export enum SourceNMEnum {
  PROD,
  UAT,
  DEV,
}

export interface Item {
  RN: number,
  IS_ACTIVE: 0 | 1,
  ID: string,
  DESCRIPTION: string,
  SOURCE_ID: number,
  SOURCE_NM: SourceNMEnum,
  CLIENT_ID: number,
  CLIENT_NM: string,
  ACTIVATION_DT: string,
  TERMINATION_DT: string,
  VALUE_1: number,
  VALUE_2: number,
  VALUE_3: number,
  UPDATED_BY: string,
  UPDATE_TIMESTAMP: string,
  [key: string]: any // just in case
}

export interface ItemsState {
  loading: boolean
  error: boolean
  data: Item[] | null
}


export const ITEMS_LOADING_START = 'ITEMS_LOADING_START';
export const ITEMS_LOADING_ERROR = 'ITEMS_LOADING_ERROR';
export const ITEMS_LOADING_FINISH = 'ITEMS_LOADING_FINISH';

interface ItemsLoadStartAction {
  type: typeof ITEMS_LOADING_START,
}

interface ItemsLoadErrorAction {
  type: typeof ITEMS_LOADING_ERROR,
}

interface ItemsLoadFinishAction {
  type: typeof ITEMS_LOADING_FINISH,
  payload: {
    data: Item[]
  }
}

export type ItemsActionTypes = ItemsLoadStartAction | ItemsLoadErrorAction | ItemsLoadFinishAction
