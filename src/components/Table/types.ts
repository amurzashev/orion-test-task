import { Item } from 'src/duck/types/items';
import { Config } from 'src/duck/types/config';

export interface TableProps {
  items: Item[]
  config: Config
  loadItemsAction: () => void
  loadConfigAction: () => void
}