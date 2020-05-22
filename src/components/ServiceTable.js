import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getMp3,downloadFile} from '../actions/mp3Actions'
// import {baseURL} from '../utils/configs'

const ServiceTable=({audioClips})=> {


    const download =(e,id)=>{
        e.preventDefault()
        downloadFile(id)
    }
    
    
    const Mp3Records = ()=> {
        return audioClips!==null&&audioClips!==undefined&&audioClips.length>0&&audioClips.filter(item=>item.downloadable==="1").map((data,idx)=>(
            <tr key={data.id}>
                <td>{idx+1}</td>
                <td> <img src={data.thumbnail} alt="user" style={{height:'70px',width:'70px'}} /></td>
                <td>{data.artist}</td>
                <td>{data.name}</td>
                <td>{data.genre}</td>
                <td>{parseFloat((data.size)/1000000).toFixed(2)} mb</td>
                <td>{data.type}</td>
                <td className="text-nowrap">
                    <button onClick={e=>download(e,data.id)} className="btn btn-success btn-sm">
                        <i className="fa fa-download"></i> 
                    </button>
                </td>
            </tr>
        ))
    }

    return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <h5 className="card-title text-white">DOWNLOADABLE SONGS</h5>
                            <div className="table-responsive">
                                <table className="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Thumbnail</th>
                                            <th>Artist</th>
                                            <th>Title</th>
                                            <th>Genre</th>
                                            <th>Size</th>
                                            <th>Type</th>
                                            <th className="text-nowrap">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {Mp3Records()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}


ServiceTable.propTypes = {
    audioClips: PropTypes.array,
    errorReducer: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    getMp3: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
  };

const mapStateToProps = state => ({
      audioClips: state.mp3Reducer.mp3Records,
      isLoading: state.AsyncReducer.isLoading
  });
  


export default connect(mapStateToProps,{getMp3})(ServiceTable)




// <tr>
// <td>3</td>
// <td><i class="fa fa-heart-o" aria-hidden="true"></i></td>
// <td>Shut Up Society</td>
// <td>M. Murdock</td>
// <td>04:22</td>
// <td class="text-nowrap">
//     <a href="#0" data-toggle="tooltip" data-original-title="Download" class="link btn btn-dark btn-sm"> <i class="fa fa-download m-r-10"></i> </a>
//     <a href="#0" data-toggle="tooltip" data-original-title="Bookmark" class="link btn btn-dark btn-sm"> <i class="fa fa-bookmark m-r-10"></i> </a>
//     <a href="#0" data-toggle="tooltip" data-original-title="Remove" class="link btn btn-danger btn-sm"> <i class="fa fa-times"></i> </a>
// </td>
// </tr>