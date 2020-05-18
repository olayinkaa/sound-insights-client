import React, { useEffect,useState,Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getMp3,reloadMp3,createNewMP3,deleteMp3} from '../actions/mp3Actions'
import {baseURL} from '../utils/configs'
import MyLoader from '../components/MyLoader'
import {Formik,Form} from 'formik'
import {CustomTextInput,CustomSelect} from '../components/FormikCustomFormTypes'
import {Button,Col,Modal,ModalBody,ModalHeader} from 'reactstrap'
import Genres from '../utils/genreList'
import {Mp3Schema} from '../utils/ValidationSchema'
import {delay} from '../utils/constants'
import {toastr} from 'react-redux-toastr'
import {reactReduxToastrOptions} from '../utils/constants'



const initialFormState = {
    songGenre:"",
    songName:null,
    songThumbnail:null,
    artistName:"",
    downloadable:""
}
const ManageMp3 = ({getMp3,reloadMp3,deleteMp3,isLoading,audioClips})=> {

    const [formData,setFormData] = useState(initialFormState)
    const [modal, setModal] = useState(false);
    const [errors,setErrors] = useState({})
    const toggle = ()=> setModal(!modal)
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    useEffect(() => {
        getMp3()
        return () => {

            setModal(false)
        }
      }, [getMp3]);


    const onDeleteClick = (e,id) => {
        e.preventDefault()
        deleteMp3(id);
    };

   const {songGenre,songName,songThumbnail,artistName,downloadable} = formData
  
   const Mp3Records = ()=> {

        return audioClips!==null&&audioClips!==undefined&&audioClips.length>0&&audioClips.map((data,idx)=>(
            <tr key={data.id}>
                <td>{idx+1}</td>
                <td>{data.artist}</td>
                <td>{data.name}</td>
                <td> <img src={`${baseURL}/soundinsight/img/`+data.thumbnail} alt="user" style={{height:'70px',width:'70px'}} /></td>
                <td>{data.genre}</td>
                <td>{parseFloat((data.size)/1000000).toFixed(2)} mb</td>
                <td>{data.type}</td>
                <td>{data.downloadable==="1"?"Downloadable":"Not downloadable"}</td>
                <td>
                    <button className="btn" onClick={e=>onDeleteClick(e,data.id)}>
                         <i className="fas fa-times text-danger"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    const GenreList = ()=>{
        return Genres.map((data,idx)=>(
            <option key={idx} value={data.name}>{data.name}</option>
        ))
    }


    let arr = [];
    errors!==null&&errors!==undefined&&Object.values(errors).forEach((value) => (
      arr.push(value)
    ));




    return  isLoading ? <MyLoader/>: (
            <Fragment>
                <div className="row mb-2">
                    <div className="col-md-9">
                        <input type="text"/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-outline-dark float-right" onClick={toggle}>
                            <i className="fas fa-plus"></i> New Song
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <table className="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Artist Name</th>
                                    <th>Title</th>
                                    <th>Thumbnail</th>
                                    <th>Genre</th>
                                    <th>Size</th>
                                    <th>File Type</th>
                                    <th>Download Status</th>
                                    <th>Action</th>
                                </tr>
                                {Mp3Records()}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* modal goes here  */}
                <Modal isOpen={modal} centered={true} toggle={toggle} className={""} backdrop="static">
                    <ModalHeader 
                    cssModule={{'modal-title': 'w-100 text-center'}}
                    close={closeBtn} 
                    toggle={toggle}
                    >
                        MP3
                    </ModalHeader>
                        <ModalBody>
                            {/* formik start */}
                           
                            <Formik 
                            initialValues={{
                                songGenre:songGenre,
                                songName:songName,
                                songThumbnail:songThumbnail,
                                artistName:artistName,
                                downloadable:downloadable
                            }} 
                            onSubmit={(data,{setSubmitting})=>{

                                setSubmitting(true)
                                delay(2000)
                                const formData = new FormData()
                                formData.append('songGenre',data.songGenre)
                                formData.append('songName',data.songName)
                                formData.append('songThumbnail',data.songThumbnail)
                                formData.append('artistName',data.artistName)
                                formData.append('downloadable',data.downloadable)
                                createNewMP3(formData).then(res=>{
                                    setSubmitting(false)
                                    setModal(false)
                                    toastr.success('Mp3 Song',`${res.data.message}`,reactReduxToastrOptions());
                                    reloadMp3()
                                    setFormData(initialFormState)
                                }).catch(err=>{
                                    setSubmitting(false)
                                    toastr.error('Error', `${err.response.data.message}`,reactReduxToastrOptions("top-center"))
                                    setErrors(err.response.data.errors)
                                })

                            }}
                            validationSchema={Mp3Schema}
                            >
                                {({isSubmitting,setFieldValue,errors})=>(
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
                                        label="Artist Name"
                                        labelFor="artist"
                                        name="artistName"
                                        type="text"
                                        />
                                    </Col>
                                    <Col md="12" className="mb-3">
                                        <CustomSelect label="Genre" labelFor="genre" name="songGenre" >
                                            <option value="">Select a genre</option>
                                            {GenreList()}
                                        </CustomSelect>
                                    </Col>
                                    <Col md="12" className="mb-3">
                                        <CustomSelect label="Download Status" labelFor="download" name="downloadable" >
                                            <option value="">select download status</option>
                                            <option value="1">Downloadable</option>
                                            <option value="0">Not Downloadable</option>
                                        </CustomSelect>
                                    </Col>
                                    <Col md="12">
                                        <div className="form-group">
                                            <label htmlFor="songName">Song upload</label>
                                            <input 
                                            name="songName" 
                                            type="file" 
                                            onChange={(event) => {
                                                setFieldValue("songName", event.target.files[0]);
                                            }} 
                                            className="form-control-file" 
                                            />
                                            {errors.songName&&errors.songName?
                                            (<div className="invalid-feedback">
                                                {errors.songName}
                                            </div>) : null
                                            }
                                        </div>
                                    </Col>
                                    <Col md="12">
                                        <div className="form-group">
                                            <label htmlFor="songThumbnail">Thumbnail upload</label>
                                            <input 
                                            id="songThumbnail" 
                                            name="songThumbnail" 
                                            type="file" 
                                            onChange={(event) => {
                                                setFieldValue("songThumbnail", event.target.files[0]);
                                            }} 
                                            className="form-control-file" 
                                            />
                                        </div>
                                    </Col>
                                    <Col md="12">
                                        <Button type="submit" block color="primary" disabled={isSubmitting}>
                                            Create
                                        </Button>
                                    </Col>
                                    {/* <Col md="12">
                                        {JSON.stringify(values,null,2)}
                                    </Col> */}
                                </Form>
                                )}
                            </Formik> 
                            {/*formik end  */}
                        </ModalBody>
                    </Modal>
            </Fragment>
        )
}



ManageMp3.propTypes = {
    audioClips: PropTypes.array,
    errorReducer: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    getMp3: PropTypes.func.isRequired,
    reloadMp3: PropTypes.func.isRequired,
    deleteMp3: PropTypes.func.isRequired
  };

const mapStateToProps = state => ({
      audioClips: state.mp3Reducer.mp3Records,
      errorReducer: state.mp3Reducer.errors,
      isLoading: state.AsyncReducer.isLoading
  });
  



export default connect(mapStateToProps,{getMp3,reloadMp3,deleteMp3})(ManageMp3)
