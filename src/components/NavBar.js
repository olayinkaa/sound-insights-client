import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NavBar = ({auth}) => {

    return (
        <div>
            <header id="navbar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="home">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-brand" href="#">

                        <img src="images/logo.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            {/* eslint-disable-next-line */}
                                <a className="nav-link" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#media">MEDIA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">CONTACT</a>
                            </li>
                            {auth &&
                             <li className="nav-item">
                                <Link className="nav-link" to="/admin">DASHBOARD</Link>
                            </li>
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}


NavBar.propTypes = {
    auth: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    auth: state.authReducer.isAuthenticated
  });
  

export default connect(mapStateToProps)(NavBar)
