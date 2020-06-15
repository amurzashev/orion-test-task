import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Table as VTable, Column, AutoSizer } from 'react-virtualized';
import { RootState } from 'src/duck';
import { TableProps } from './types';
import { Page, Row, HeaderRow, HeaderCell, Cell } from 'src/ui/components';


const Table: FC<TableProps> = ({ items, config }) => {
  return (
    <Page>
      <AutoSizer>
        {({ width, height }) => (
          <VTable
            height={height}
            width={width}
            rowCount={items.length}
            headerHeight={60}
            rowHeight={40}
            rowGetter={({ index }) => items[index]}
            headerRowRenderer={({ columns, style }) => (
              <HeaderRow style={style}>
                {columns}
              </HeaderRow>
            )}
            rowRenderer={({ style, index, columns }) => {
              return (
                <Row style={style} even={index % 2 === 0} key={index}>
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
                  <HeaderCell w={config[col].width} key={dataKey}>{label}</HeaderCell>
                )}
                cellRenderer={({ rowData, dataKey }) => (
                  <Cell w={config[col].width} centered={false}>
                    {rowData[dataKey]}
                  </Cell>
                )}
              />
            ))}
            <Column
              dataKey={'button'}
              width={80}
              cellRenderer={() => (
                <Cell w={80} centered>
                  <button>edit</button>
                </Cell>
              )}
            />
          </VTable>
        )}
      </AutoSizer>
    </Page>
  );
};

const mapState = (state: RootState) => ({
  items: state.items.data,
  config: state.config.data,
});
export default connect(mapState)(Table);
