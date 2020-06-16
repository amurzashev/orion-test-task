import { ItemsState } from 'src/duck/types/items';
import { ConfigState } from 'src/duck/types/config';

export interface AppProps {
  loadConfig: () => void,
  loadItems: () => void,
  items: ItemsState,
  config: ConfigState,
}