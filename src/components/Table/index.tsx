import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Table as VTable, Column, AutoSizer } from 'react-virtualized';
import { RootState } from 'src/duck';
import { TableProps } from './types';
import { Page, Row, HeaderRow, HeaderCell } from 'src/ui/components';


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
            rowHeight={20}
            rowGetter={({ index }) => items[index]}
            headerRowRenderer={({ columns, style }) => (
              <HeaderRow style={style}>
                {columns}
              </HeaderRow>
            )}
          >
            {Object.keys(config).map((col, idx) => (
              <Column
                key={idx}
                dataKey={col}
                width={config[col].width}
                label={config[col].label}
                headerRenderer={({ label, dataKey }) => (
                  <HeaderCell w={config[col].width} key={dataKey}>{label}</HeaderCell>
                )}
              />
            ))}
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
