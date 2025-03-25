import React from 'react'

const FormRow = ({type, label, placeholder}) => {
    console.log(type)
    return (
        <div>
            <label>{label} :</label>
            <input type={type} placeholder={placeholder} />
        </div>

    )
}

export default FormRow;
