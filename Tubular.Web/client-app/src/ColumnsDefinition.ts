
import {
  AggregateFunctions,
  ColumnDataType,
  ColumnModel,
  ColumnSortDirection
} from 'tubular-common';

export const ColumnsDefinition = [
    new ColumnModel('OrderID', {
      IsKey: true,
      Visible: false,
    }),
    new ColumnModel('CustomerName', {
      Aggregate: AggregateFunctions.COUNT,
      Filterable: true,
      Searchable: true,
      SortOrder: 1,
      Sortable: true,
    }),
    new ColumnModel('ShippedDate', {
      DataType: ColumnDataType.DATE_TIME,
      Filterable: false,
      Searchable: false,
      SortDirection: ColumnSortDirection.DESCENDING,
    }),
    new ColumnModel('ShipperCity'),
    new ColumnModel('IsShipped', {
      DataType: ColumnDataType.BOOLEAN,
    }),
    new ColumnModel('Amount'),
  ];
