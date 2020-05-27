import React, { Fragment,useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getAnalytics} from '../actions/dashboardAction'

const DashBoard = ({getAnalytics,analytics}) => {

    useEffect(() => {
        getAnalytics()
        return () => {}
      }, [getAnalytics]);

    const {total_downloadable_mp3:downloadable,total_not_downloadable_mp3:notDownloadable,registerUser} = analytics
    return (
        <Fragment>
                <div className="card px-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 p-4">
                                <div className="small-box bg-success text-white">
                                   <div className="inner">
                                        <h3>
                                            <i className="fas fa-music"/>&nbsp;&nbsp;
                                            {downloadable}
                                        </h3>
                                        <h4>Total downloadable Music</h4>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4">
                                <div className="small-box bg-danger text-white">
                                   <div className="inner">
                                        <h3>
                                            <i className="fas fa-music" />&nbsp;&nbsp;
                                            {notDownloadable?notDownloadable:0}
                                        </h3>
                                        <h4>Total Not downloadable Music</h4>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4">
                                <div className="small-box bg-warning text-white">
                                   <div className="inner">
                                        <h3>
                                            <i className="fas fa-fw fa-user" />
                                            {registerUser}
                                        </h3>
                                        <h4>Total registered user</h4>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4">
                                <div className="small-box bg-primary text-white">
                                   <div className="inner">
                                        <h3>
                                            <i className="fas fa-fw fa-user" />
                                            0
                                        </h3>
                                        <h4>Total Slider Content</h4>
                                   </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}


DashBoard.propTypes = {
    analytics: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    getAnalytics: PropTypes.func.isRequired,
  };


const mapStateToProps = state => ({
    analytics: state.dashboardReducer.analytics,
});


export default connect(mapStateToProps,{getAnalytics})(DashBoard)
