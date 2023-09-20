import React from 'react'
import './Input.css'

function Input({ size = "small", ...rest }) {
    return (
        <input type='text' className={`input ${size}`} {...rest} />
    )
}

export default Input