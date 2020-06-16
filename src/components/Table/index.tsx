import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Table as VTable, Column, AutoSizer } from 'react-virtualized';
import { RootState } from 'src/duck';
import { loadConfig } from 'src/duck/actions/config';
import { loadItems } from 'src/duck/actions/items';
import { TableProps } from './types';
import { Page, Row, HeaderRow, HeaderCell, Cell, renderValue, Footer, Button, FullscreenPlaceholder } from 'src/ui/components';
import FilterModal from './FilterModal';
import orderBy from 'lodash/orderBy';
import { Item } from 'src/duck/types/items';

const Table: FC<TableProps> = ({ items, config, loadConfigAction, loadItemsAction }) => {
  const [editingRowIndex, setEditingRowIndex] = useState<null | number>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sortDirection, setSortDirection] = useState<any>('asc');
  const [sortedItems, setSortedItems] = useState(items);
  const [editing, setIsEditing] = useState(false);
  const [sortBy, setSortBy] = useState<string>();
  const [key, setKey] = useState(1);
  const onButtonClick = (rowIndex: number): void => {
    if (editing) {
      console.log('saving');
      setEditingRowIndex(null);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setEditingRowIndex(rowIndex);
    }
  };
  const reloadData = () => {
    loadConfigAction();
    loadItemsAction();
  };
  const _sort = ({ sortBy }: any) => {
    setSortedItems(
      orderBy(sortedItems, [sortBy], [sortDirection])
    );
    setKey(key + 1); // workaround
    setSortBy(sortBy);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };
  const setItems = (items: Item[]) => {
    setSortedItems(items);
    setKey(key + 1);
  };
  return (
    <Page>
      {
        sortedItems.length ? (<AutoSizer>
          {({ width, height }) => (
            <VTable
              key={key}
              height={height}
              sort={_sort}
              width={width}
              rowCount={sortedItems.length}
              headerHeight={60}
              rowHeight={40}
              rowGetter={({ index }) => sortedItems[index]}
              headerRowRenderer={({ columns, style }) => {
                return (
                  <HeaderRow style={{ ...style, width: window.innerWidth - 20 }}>
                    {columns}
                  </HeaderRow>
                );
              }}
              rowRenderer={({ style, index, columns }) => {
                return (
                  <Row style={{ ...style, width: window.innerWidth - 20 }} even={index % 2 === 0} key={index}>
                    {columns}
                  </Row>
                );
              }}
            >
              <Column
                dataKey={'check'}
                width={50}
                cellRenderer={() => (
                  <Cell w={50} centered>
                    <input type='checkbox' />
                  </Cell>
                )}
              />
              {Object.keys(config).map((col, idx) => (
                <Column
                  key={idx}
                  dataKey={col}
                  width={config[col].width}
                  label={config[col].label}
                  headerRenderer={({ label, dataKey }) => (
                    <HeaderCell w={config[col].width} key={dataKey}>{label} {sortBy === dataKey && (sortDirection === 'desc' ? '👇' : '👆')}</HeaderCell>
                  )}
                  cellRenderer={({ rowData, dataKey, rowIndex }) => {
                    const shouldColor = dataKey === 'VALUE_1';
                    return (
                      <Cell w={config[col].width} centered={false} fillColor={shouldColor && rowData[dataKey]}>
                        {renderValue({ renderVal: rowData[dataKey], type: config[col].type, disabled: editingRowIndex !== rowIndex })}
                      </Cell>
                    );
                  }}
                />
              ))}
              <Column
                dataKey={'button'}
                width={80}
                cellRenderer={({ rowIndex }) => (
                  <Cell w={80} centered>
                    <button onClick={() => onButtonClick(rowIndex)} disabled={editing && editingRowIndex !== rowIndex}>
                      {rowIndex === editingRowIndex ? 'save' : 'edit'}
                    </button>
                  </Cell>
                )}
              />
            </VTable>
          )}
        </AutoSizer>) : (
          <FullscreenPlaceholder>
            <h2>no data😭</h2>
          </FullscreenPlaceholder>
        )
      }
      <Footer>
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>filter</Button>
        <Button onClick={reloadData}>reload data</Button>
      </Footer>
      <FilterModal items={sortedItems} setItems={setItems} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Page>
  );
};

const mapState = (state: RootState) => ({
  items: state.items.data,
  config: state.config.data,
});
const mapDispatch = {
  loadItemsAction: loadItems,
  loadConfigAction: loadConfig,
};
export default connect(mapState, mapDispatch)(Table);
