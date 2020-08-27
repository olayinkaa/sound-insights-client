import React from 'react'
import Main from '../css/main.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {logout} from '../actions/authAction'
import {Button} from '@material-ui/core'

const AdminHeader = ({logout}) => {



// if (!isAuthenticated) return <Redirect to='/' />

return (
        <React.Fragment>
            <div>
            {/* --------------------------Header--------------------- */}
                <div id={Main.header} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <h2> <span className="fas fa-cog" aria-hidden="true" /> SOUND INSIGHT <small>Manage Your Site</small></h2>
                            </div>
                            <div className="col-md-4">
                                <Link to="/" className={`btn btn-default ${Main.create} mx-1`}>
                                    <span className="text-dark">Home</span>
                                </Link>
                                {/* <button className={`btn btn-danger mt-3 float-right`} onClick={()=>logout()}>
                                    Logout
                                </button> */}
                                <Button variant="contained" color="secondary" className="mt-3" onClick={()=>logout()}>
                                    Logout
                                </Button>
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


AdminHeader.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
  };

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
  });
  

export default connect(mapStateToProps,{logout})(AdminHeader)