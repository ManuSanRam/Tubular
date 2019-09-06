
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableRow';
import * as React from 'react';
import {DataGrid, ToolbarOptions } from 'tubular-react';
import {ColumnsDefinition} from './ColumnsDefinition';

const App: React.FunctionComponent = () => {
    const customToolbar = new ToolbarOptions({
        advancePagination: true,
        bottomPager: false,
        customItems: (
            <button
                onClick={() => console.log('me cliquearon we')}
            >
                Clickeame we
            </button>
        ),
        exportButton: false,
        itemsPerPage: 15,
        printButton: false,
        rowsPerPageOptions: [5, 10, 15],
        searchText: true,
        topPager: true,
    });

    const customBody = (row: any) => {
        return (
            <TableRow
                key={row.OrderId}
            >
                <TableCell>{row.CustomerName}</TableCell>
                <TableCell>{row.ShippedDate}</TableCell>
                <TableCell>{row.ShipperCity}</TableCell>
                <TableCell>{row.IsShipped}</TableCell>
                <TableCell>{row.Amount}</TableCell>
            </TableRow>
        );
    };

    return (
        <>
            <h2>Tubular</h2>
            <DataGrid
                bodyRenderer={customBody}
                gridName='Orders'
                columns={ColumnsDefinition}
                dataSource={'http://localhost:51244/api/tubular/paged'}
                toolbarOptions={customToolbar}
            />
        </>
    );
};

export default App;
