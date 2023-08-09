import React from 'react'
import './AddProduct.scss'

const AddProduct = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const img = e.target[0].value
        const title = e.target[1].value
        const color = e.target[2].value
        const price = e.target[3].value
        const createdAt = e.target[4].value
        const inStock = e.target[5].checked

        props.setRows([
            ...props.rows,
            { id: props.rows.length + 1, col1: props.rows.length + 1, col2: img, col3: title, col4: color, col5: price, col6: createdAt, col7: inStock, },
        ])
        props.setOpen(false)
    }
    return (
        <div className='addProduct'>
            <form className='addForm' onSubmit={e => handleSubmit(e)}>
                <div className="form">
                    <div className="info">
                        <h1>Add Product</h1>
                        <span onClick={() => props.setOpen(false)}>X</span>
                    </div>
                    {props.columns
                        .filter(item => item.headerName !== "ID" && item.headerName !== "Action")
                        .map(colum => (
                            <div className="item" key={colum.field}>
                                <label>{colum.headerName}</label>
                                <input type={colum.typeOfInput} />
                            </div>
                        ))
                    }
                    <div className="btn">
                        <button >Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct