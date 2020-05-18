import React, {useState} from 'react'
import {Formik,Form} from 'formik'
import {Button,Col} from 'reactstrap'
import {CustomTextInput,CustomTextarea} from '../components/FormikCustomFormTypes'
import {EmailSchema} from '../utils/ValidationSchema'
import {delay} from '../utils/constants'
import {toastr} from 'react-redux-toastr'
import {reactReduxToastrOptions} from '../utils/constants'
import {sendEmail} from '../actions/emailAction'


const initialFormState = {
    subject:"",
    name:"",
    email:"",
    body:"",
}
const ContactUs=()=> {

    const [formData,setFormData] = useState(initialFormState)


    const {subject,name,email,body} = formData;

    return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-white">Get In Touch</h1>
                    <div className="row">
                        <div className="col-md-6">
                           <div className="contact-form">
                               <Formik 
                                    initialValues={{
                                        subject:subject,
                                        name:name,
                                        email:email,
                                        body:body,
                                    }} 
                                    onSubmit={(data,{setSubmitting,resetForm})=>{
                                        setSubmitting(true)
                                        delay(2000)
                                        sendEmail(data)
                                        .then(res=>{
                                            toastr.success('Email',`${res.data.message}`,reactReduxToastrOptions("top-left"));
                                            setSubmitting(false)
                                            resetForm()
                                            setFormData(initialFormState)
                                        })
                                        .catch(err=>{
                                            console.log(err)
                                            setSubmitting(false)
                                        })
                                    }}
                                    validationSchema={EmailSchema}
                                    >
                                {({isSubmitting,values})=>(
                                <Form>
                                    <Col md="12" className="mb-3">
                                        <CustomTextInput
                                        label=""
                                        placeholder="Enter your subject"
                                        labelFor="subject"
                                        name="subject"
                                        type="text"
                                        />
                                    </Col>
                                    <Col md="12" className="mb-3">
                                        <CustomTextInput
                                        label=""
                                        placeholder="Enter your name"
                                        labelFor="name"
                                        name="name"
                                        type="text"
                                        />
                                        <p className="text-success">Optional</p>
                                    </Col>
                                    <Col md="12" className="mb-3">
                                        <CustomTextInput
                                        label=""
                                        placeholder="Enter your email"
                                        labelFor="email"
                                        name="email"
                                        type="email"
                                        />
                                    </Col>
                                    <Col md="12" className="mb-3">
                                        <CustomTextarea
                                        label=""
                                        placeholder="Enter your message"
                                        labelFor="body"
                                        name="body"
                                        />
                                    </Col>
                                    <Col md="12">
                                        <Button type="submit" block color="primary" disabled={isSubmitting}>
                                            Create
                                        </Button>
                                    </Col>
                                </Form>
                                )}
                            </Formik> 
                        </div>
                        </div>
                        {/*  */}
                        <div className="col-md-6 mt-4">
                            <div className="follow">
                                <b>Address:</b> <i className="fa fa-map-marker" /> 64 Kujore Street Ojota, Lagos.
                            </div>
                            <div className="follow">
                                <b>Email:</b><i className="fa fa-envelope" /> ibrahimolayinkaa@gmail.com
                            </div>
                            <div className="follow">
                                <b>Phone:</b> <i className="fa fa-phone" /> 
                                +2347065643303
                            </div>
                            <div className="follow">
                                <label><b>Get Social:</b></label> 
                                <a href="#0"><i className="fab fa-facebook-square fa-2x text-primary mx-2"/></a>
                                <a href="#0"><i className="fab fa-whatsapp fa-2x text-primary mx-2" /></a>
                                <a href="#0"><i className="fab fa-twitter fa-2x text-primary mx-2" /></a>
                                <a href="#0"><i className="fab fa-instagram fa-2x text-primary mx-2" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    
}


export default ContactUs
