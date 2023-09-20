import React from 'react'
import './Button.css'

function Button({ varient = "primary", children, ...rest }) {
    return (
        <div>
            <button className={`button ${varient}`} {...rest}>
                {children}
            </button>
        </div >
    )
}

export default Button