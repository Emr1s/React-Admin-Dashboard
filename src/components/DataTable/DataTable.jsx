import React from 'react'
import './DataTable.scss'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddProduct from '../../components/Buttons/AddProduct/AddProduct';
import AddUser from '../Buttons/AddUser/AddUser';


const DataTable = (props) => {
    return (
        <>
            <div className="table">
                <DataGrid
                    rows={props.rows}
                    columns={props.columns}
                    className='muiTable'
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        }
                    }}

                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    disableColumnFilter
                    disableDensitySelector
                    disableRowSelectionOnClick
                    disableColumnSelector
                />
            </div>
            {
                props.open &&
                <AddUser
                    setOpen={props.setOpen}
                    columns={props.columns}
                    setRows={props.setRows}
                    rows={props.rows}
                />
            }
        </>
    )
}

export default DataTable