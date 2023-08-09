import React, { useState } from 'react'
import './Products.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { PiNotePencil } from 'react-icons/pi'
import DataTable from '../../components/DataTable/DataTable';

const Products = () => {
  const [open, setOpen] = useState(false)

  const [rows, setRows] = useState([
    { id: 1, col1: 1, col2: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks.png", col3: "Toshiba Split AC 2", col4: "wtite", col5: "$899.99", col6: "2023-08-04", col7: true, },
    { id: 2, col1: 2, col2: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks.png", col3: "Toshiba Split AC 2", col4: "wtite", col5: "$899.99", col6: "2023-08-04", col7: true, },
  ]);

  const columns = [
    { field: 'col1', headerName: 'ID', width: 100 },
    {
      field: 'col2', headerName: 'Image', width: 150, typeOfInput: 'text',
      renderCell: (params) => {
        return (
          <img src={params.row?.col2} alt="" style={{ width: '50px', objectFit: 'contain' }} />
        )
      }
      
    },
    { field: 'col3', headerName: 'Title', width: 150, typeOfInput: 'text', },
    { field: 'col4', headerName: 'Color', width: 150, typeOfInput: 'text', },
    { field: 'col5', headerName: 'Price', width: 150, typeOfInput: 'text',},
    { field: 'col6', headerName: 'Created At', width: 150, typeOfInput: 'date',},
    { field: 'col7', headerName: 'In Stock', width: 150, type: 'boolean', typeOfInput: 'checkbox', },
    {
      field: 'col8', headerName: 'Action', width: 100,
      renderCell: (params) => {
        return (
          <div className="action" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <AiOutlineDelete style={{  fontSize: '20px' }} onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    },
  ];

  const handleDelete = (id) => {
    setRows(rows.filter(item => item.id !== id))

  }
  return (
    <div className='products'>
      <div className="title">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add new product</button>
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

export default Products