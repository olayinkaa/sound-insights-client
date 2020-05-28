import React,{useState,useEffect,Fragment} from 'react'
import {Button,Col,Modal,ModalBody,ModalHeader} from 'reactstrap'
import {CustomTextInput,CustomTextarea} from '../components/FormikCustomFormTypes'
import {Formik,Form} from 'formik'
import {AboutSchema} from '../utils/ValidationSchema'
import {delay} from '../utils/constants'
import {getAboutUs,createAboutUs,reloadAboutUs,deleteAboutUs,updateAboutUs,getRecord} from '../actions/aboutAction'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyLoader from '../components/MyLoader'
import {toastr} from 'react-redux-toastr'
import {reactReduxToastrOptions} from '../utils/constants'

const initialFormState = {
    title:"",
    description:"",
}
const ManageAbout = ({getAboutUs,reloadAboutUs,deleteAboutUs,aboutus,isLoading}) => {
    const [modal,setModal] = useState(false);
    const [formData,setFormData] = useState(initialFormState)
    const [errors,setErrors] = useState({});
    const [isEdit,setEdit] = useState(false)
    const toggle = ()=> {
        setModal(!modal)
        setFormData(initialFormState)
        setEdit(false)
    }
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    useEffect(() => {
        getAboutUs()
        return () => {

        }
      }, [getAboutUs]);

     const onDeleteClick = (e,id) => {
        e.preventDefault()
        deleteAboutUs(id);
      };

    const toUpdate= (e,id)=>{
        e.preventDefault()
        getRecord(id).then(res=>{
            setFormData(res.data.data)
        })
        setTimeout(()=>{
         setModal(true)
        },1500)
        setEdit(true)
    }

  
    const AboutUs = ()=> {
        return aboutus!==null&&aboutus!==undefined&&aboutus.length>0&&aboutus.map((data,idx)=>(
            <tr key={data.id} onClick={e=>toUpdate(e,data.id)} style={{cursor:'pointer'}}>
                <td>{idx+1}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                    <button className="btn" onClick={e=>onDeleteClick(e,data.id)}>
                         <i className="fas fa-times text-danger"></i>
                    </button>
                </td>
            </tr>
        ))
    }
      
    let arr = [];
    errors!==null&&errors!==undefined&&Object.values(errors).forEach((value) => (
      arr.push(value)
    ));
    const {title,description} = formData

    return isLoading? <MyLoader/> : (
        <Fragment>
        <div className="row mb-2">
            <div className="col-md-9">
                <input type="text"/>
            </div>
            <div className="col-md-3">
                <button className="btn btn-outline-dark float-right" onClick={toggle}>
                    <i className="fas fa-plus"></i> New Content
                </button>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>description</th>
                            <th>Action</th>
                        </tr>
                        {AboutUs()}
                    </tbody>
                </table>
            </div>
        </div>
        {/* modal goes here  */}
        <Modal isOpen={modal} size="lg" centered={true} toggle={toggle} className={""} backdrop="static">
            <ModalHeader 
            cssModule={{'modal-title': 'w-100 text-center'}}
            close={closeBtn} 
            toggle={toggle}
            >
                ABOUT US
            </ModalHeader>
                <ModalBody>
                    {/* formik start */}              
                    <Formik 
                    initialValues={{
                        title:title,
                        description:description,
                    }} 
                    onSubmit={(data,{setSubmitting})=>{
                        setSubmitting(true)
                        delay(2000)
                        isEdit?updateAboutUs(formData.id,data).then(res=>{
                            toastr.success('About Us',`${res.data.message}`,reactReduxToastrOptions());
                            setModal(false)
                            setSubmitting(false)
                            setEdit(false)
                            reloadAboutUs()
                        })
                        .catch(err=>{
                            console.log(err)
                            setSubmitting(false)
                            toastr.error('About Us',`System Error, contact the developer`,reactReduxToastrOptions());
                        })
                        :createAboutUs(data).then(res=>{
                            setSubmitting(false)
                            setModal(false)
                            toastr.success('About Us',`${res.data.message}`,reactReduxToastrOptions());
                            reloadAboutUs()
                        })
                        .catch(err=>{
                            setSubmitting(false)
                            setErrors(err.response.data)
                            toastr.error('About Us',`${err.response.data.data}`,reactReduxToastrOptions());
                        })

                    }}
                    validationSchema={AboutSchema}
                    >
                        {({isSubmitting})=>(
                        <Form>
                           <Col md="12">
                                <ul>
                                    {arr.length>0&&arr!==null&&arr!==undefined&&arr.map((item, i) => (
                                        <li key={i}>
                                            <span style={{color: 'red'}}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col md="12" className="mb-3">
                                <CustomTextInput
                                label="Title"
                                labelFor="title"
                                name="title"
                                type="text"
                                />
                            </Col>
                            <Col md="12" className="mb-3">
                                <CustomTextarea
                                label="Description"
                                labelFor="description"
                                name="description"
                                rows="9"
                                />
                            </Col>
                            <Col md="12">
                                <Button type="submit" block color="primary" disabled={isSubmitting}>
                                    {isEdit?"Update":"Create"}
                                </Button>
                            </Col>
                        </Form>
                        )}
                    </Formik> 
                    {/*formik end  */}
                </ModalBody>
            </Modal>
    </Fragment>
    )
}


ManageAbout.propTypes = {
    aboutus: PropTypes.array,
    aboutContent: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    getAboutUs: PropTypes.func.isRequired,
    deleteAboutUs: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
  };

const mapStateToProps = state => ({
      aboutus: state.aboutReducer.aboutus,
      aboutContent: state.aboutReducer.aboutContent,
      delete_id: state.aboutReducer.id,
      isLoading: state.AsyncReducer.isLoading
  });
  


export default connect(mapStateToProps,{getAboutUs,reloadAboutUs,deleteAboutUs})(ManageAbout)
