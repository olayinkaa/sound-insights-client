import React from 'react'
import {Link} from 'react-router-dom'

const Promo = () => {
    return (
        <>
            
            <div className="container">
                <p>Register for free Guitar Training</p>
                <Link to={""} className="btn btn-primary btn-lg">Register Now</Link>
            </div>
            
        </>
    )
}

export default Promo
