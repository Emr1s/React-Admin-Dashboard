import React, { useState } from 'react'
import './Users.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { PiNotePencil } from 'react-icons/pi'
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';

const Users = () => {
  const [open, setOpen] = useState(false)

  const [rows, setRows] = useState([
    { id: 1, col1: 1, col2: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600", col3: "Toshiba", col4: "Naomi", col5: "tosiba@gmail.com", col6: "898-99-999", col7: "2023-08-04", col8: true },
  ]);

  const columns = [
    { field: 'col1', headerName: 'ID', width: 50 },
    {
      field: 'col2', headerName: 'Image', width: 100, typeOfInput: 'text',
      renderCell: (params) => {
        return (
          <img src={params.row?.col2} alt="" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} />
        )
      }

    },
    { field: 'col3', headerName: 'First name', width: 120, typeOfInput: 'text', },
    { field: 'col4', headerName: 'Second name', width: 120, typeOfInput: 'text', },
    { field: 'col5', headerName: 'Email', width: 170, typeOfInput: 'email', },
    { field: 'col6', headerName: 'Phone', width: 150, typeOfInput: 'number', },
    { field: 'col7', headerName: 'Created At', width: 150, typeOfInput: 'date', },
    { field: 'col8', headerName: 'Verified', width: 100, type: 'boolean', typeOfInput: 'checkbox', },
    {
      field: 'col9', headerName: 'Action', width: 100,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/user/${params.row.id}`} className='link'>
              <PiNotePencil style={{ fontSize: '20px' }} />
            </Link>
            <AiOutlineDelete style={{ fontSize: '20px' }} onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    },
  ];

  const handleDelete = (id) => {
    setRows(rows.filter(item => item.id !== id))

  }
  return (
    <div className='users'>
      <div className="title">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new user</button>
      </div>
      <DataTable
        rows={rows}
        columns={columns}
        open={open}
        setOpen={setOpen}
        setRows={setRows}

      />
    </div>
  )
}

export default Users