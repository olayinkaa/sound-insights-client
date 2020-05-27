import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {setAlert} from '../actions/alert'
import {register} from '../actions/authAction'
import {Formik,Form} from 'formik'
import {Button,Col,Row} from 'reactstrap'
import {CustomTextInput} from '../components/FormikCustomFormTypes'
import {RegisterSchema} from '../utils/ValidationSchema'
import { useHistory } from 'react-router-dom';

const Register = ({register}) => {
const history = useHistory();

return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <div className="card rounded shadow shadow-sm">
                                <div className="card-header">
                                    <h3 className="mb-0 text-center">Sign up for an Account</h3>
                                </div>
                                <div className="card-body">
                                    <Formik 
                                        initialValues={{
                                            name:'',
                                            email:'',
                                            password:'',
                                            password_confirmation:''
                                        }} 
                                        onSubmit={async(data,{setSubmitting})=>{
                                            setSubmitting(true);
                                            register(data,history)
                                        }}
                                        validationSchema={RegisterSchema}
                                        >
                                            {({isSubmitting})=>(
                                            <Form>
                                            <Row>
                                                <Col md="12" className="mb-3">
                                                    <CustomTextInput
                                                    label="Name"
                                                    labelFor="name"
                                                    placeholder=""
                                                    name="name"
                                                    type="text"
                                                    />
                                                </Col>
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
                                                <Col md="12" className="mb-3">
                                                    <CustomTextInput
                                                    type="password"
                                                    label="Confirm Password"
                                                    labelFor="password_confirmation"
                                                    name="password_confirmation"
                                                    />
                                                </Col>
                                                <Col md="12">
                                                    <Button type="submit" block color="primary" disabled={isSubmitting} >
                                                        <i className="fas fa-plus"></i> Register
                                                    </Button>{' '}
                                                </Col>
                                            </Row>
                                                {/* <Col md="12">
                                                    {JSON.stringify(values,null,2)}
                                                </Col> */}
                                            </Form>
                                            )}
                                        </Formik> 
                                    <p className="p-2">
                                        Already have an account? <Link to="/login" className="text-primary">Sign In</Link>
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


Register.propTypes = {
   
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,

  };


export default connect(null,{setAlert,register})(Register)
