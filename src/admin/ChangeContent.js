import React,{Fragment} from 'react'
import ManageMp3 from './ManageMp3'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './DashBoard'
import ManageAbout from './ManageAbout'
import PrivateRoute from '../routing/PrivateRoute'

const ChangeContent = () => {
    return (
        <Fragment>
            <div className="col-md-10">
                <Switch>
                        <PrivateRoute exact path='/admin' component={DashBoard} />
                        <PrivateRoute exact path='/admin/mp3' component={ManageMp3} />
                        <PrivateRoute exact path='/admin/aboutus' component={ManageAbout} />
                </Switch>
            </div>
          
        </Fragment>
    )
}

export default ChangeContent
