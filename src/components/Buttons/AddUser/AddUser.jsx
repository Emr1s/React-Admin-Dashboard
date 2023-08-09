import React from 'react'
import './AddUser.scss'

const AddUser = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const img = e.target[0].value
        const firstName = e.target[1].value
        const SecondName = e.target[2].value
        const email = e.target[3].value
        const phone = e.target[4].value
        const createdAt = e.target[5].value
        const Verified = e.target[6].checked

        props.setRows([
            ...props.rows,
            { id: props.rows.length + 1, col1: props.rows.length + 1, col2: img, col3: firstName, col4: SecondName, col5: email, col6: phone, col7: createdAt, col8: Verified, },
        ])
        props.setOpen(false)
    }
    return (
        <div className='addUser'>
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

export default AddUser