import React from 'react'
import Main from '../css/main.module.css'
import { Link } from 'react-router-dom'
const AdminHeader = () => {
    return (
        <React.Fragment>
            <div>
            {/* --------------------------Header--------------------- */}
                <div id={Main.header} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mt-3">
                                <h2> <span className="fas fa-cog" aria-hidden="true" /> SOUND INSIGHT <small>Manage Your Site</small></h2>
                            </div>
                            <div className="col-md-2">
                                <Link to="/" className={`btn btn-default ${Main.create}`}>
                                    <span className="text-dark">Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="breadcrumb" >
                    <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="active font-weight-bolder">Dashboard</li>
                    </ol>
                    </div>
                </section>
            </div>

        </React.Fragment>
    )
}

export default AdminHeader