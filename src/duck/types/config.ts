export enum TypeEnum {
  NUMERIC,
  STRING,
  DATE,
  TIMESTAMP,
}

export interface Config {
  [key: string]: {
    width: number,
    label: string,
    type: TypeEnum,
  }
}

export interface ConfigState {
  loading: boolean
  error: boolean
  data: Config
}

export const CONFIG_LOADING_START = 'CONFIG_LOADING_START';
export const CONFIG_LOADING_ERROR = 'CONFIG_LOADING_ERROR';
export const CONFIG_LOADING_FINISH = 'CONFIG_LOADING_FINISH';

interface ConfigLoadStartAction {
  type: typeof CONFIG_LOADING_START,
}

interface ConfigLoadErrorAction {
  type: typeof CONFIG_LOADING_ERROR,
}

interface ConfigLoadFinishAction {
  type: typeof CONFIG_LOADING_FINISH,
  payload: {
    data: Config
  }
}

export type ConfigActionTypes = ConfigLoadStartAction | ConfigLoadErrorAction | ConfigLoadFinishAction