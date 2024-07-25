import React from 'react'
import DataTable from 'react-data-table-component';
import { isArrayValue, isStringValue } from '../data-util/DataHandler'
import { useSelector } from 'react-redux';

const paginationComponentOptions = {
    rowsPerPageText: 'Records per page:',
    rangeSeparatorText: 'out of'
};

function CommonTable(props) {
    const { columns, data, ...rest } = props;
    const themeData = useSelector((state) => state.reduxReducer.themeData);

    const elementStyle = {
        fontFamily: isStringValue(themeData?.fontName),
        color: isStringValue(themeData?.textColor)
    };

    //  Internally, customStyles will deep merges your customStyles with the default styling.
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
        pagination: {
            style: elementStyle
        }
    };
    return (
        <>
            <DataTable
                columns={columns}
                data={isArrayValue(data)}
                striped
                highlightOnHover
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                paginationComponentOptions={paginationComponentOptions}
                pointerOnHover
                customStyles={customStyles}
                {...rest}
            />
        </>
    )
}

export default CommonTable