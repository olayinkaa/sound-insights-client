import React from 'react'
import {Link} from 'react-router-dom'
import ChangeContent from './ChangeContent'
const AdminSidebar = () => {
    return (
        <React.Fragment>
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="list-group text-dark">
                                <Link to="/admin" className="list-group-item list-group-item-action bg-dark" >
                                    <i className="fas fa-cog"></i>
                                    <span className="mx-1">DASHBOARD</span>
                                </Link>
                                <Link  to="/admin/mp3" className="list-group-item list-group-item-action text-dark" >
                                   <i className="fas fa-music" /> <span>MP3</span>
                                </Link>
                                <Link to="/admin/aboutus" className="list-group-item list-group-item-action text-dark">
                                    <i className="fas fa-notes-medical"></i> <span>ABOUT US</span>
                                </Link>
                                <Link to="/admin/aboutus" className="list-group-item list-group-item-action text-dark">
                                    <i className="fas fa-notes-medical"></i> <span>SLIDER</span>
                                </Link>
                                <Link to="/admin/aboutus" className="list-group-item list-group-item-action text-dark">
                                    <i className="fas fa-notes-medical"></i> <span>EMAIL</span>
                                </Link>
                            </div>
                        </div>
                     <ChangeContent/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AdminSidebar
                        