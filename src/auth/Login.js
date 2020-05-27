import React,{Fragment} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {Formik,Form} from 'formik'
import {Button,Col,Row} from 'reactstrap'
import {CustomTextInput} from '../components/FormikCustomFormTypes'
import {LoginSchema} from '../utils/ValidationSchema'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {login} from '../actions/authAction'
const Login = ({login,isAuthenticated}) => {


if (isAuthenticated) return <Redirect to='/admin' />
  
return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <div className="card rounded shadow shadow-sm">
                            <div className="card-header">
                                <h3 className="mb-0 text-center">Sign into Your Account</h3>
                            </div>
                            <div className="card-body">
                                <Formik 
                                        initialValues={{
                                            email:'',
                                            password:'',
                                        }} 
                                        onSubmit={async(data,{setSubmitting})=>{
                                            setSubmitting(true);
                                            login(data)
                                            console.log(data)
                                        }}
                                        validationSchema={LoginSchema}
                                        >
                                            {({isSubmitting})=>(
                                            <Form>
                                                <Row>
                                                    <Col md="12" className="mb-3">
                                                        <CustomTextInput
                                                        type="email"
                                                        label="Email"
                                                        labelFor="email"
                                                        name="email"
                                                        />
                                                    </Col>
                                                    <Col md="12" className="mb-3">
                                                        <CustomTextInput
                                                        type="password"
                                                        label="password"
                                                        labelFor="Password"
                                                        name="password"
                                                        />
                                                    </Col>
                                                    <Col md="12">
                                                        <Button type="submit" block color="primary" disabled={isSubmitting} >
                                                            <i className="fas fa-plus"></i> Login
                                                        </Button>{' '}
                                                    </Col>
                                                </Row>
                                            </Form>
                                            )}
                                        </Formik> 
                                <p className="p-2">
                                    Don't have an account? <Link to="/register" className="text-primary">Sign Up</Link>
                                </p>
                                <p className="p-1">
                                    <Link to="/" className="text-primary">Back Home</Link>
                                </p>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>

    </Fragment>
    )
}



Login.propTypes = {
   
    login: PropTypes.func.isRequired,

  };

  const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
  });
  

export default connect(mapStateToProps,{login})(Login)
