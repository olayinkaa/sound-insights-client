import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getMp3} from '../actions/mp3Actions'
import {baseURL} from '../utils/configs'
import {Link} from 'react-router-dom'

class ServiceDisplay extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
          playing: false
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)
      }
    
      handlePlay (idx) {
        const audioEl = document.getElementsByClassName(`audio-element-${idx}`)[0]
        audioEl.play()
      }
    
      handlePause (idx) {
        const audioEl = document.getElementsByClassName(`audio-element-${idx}`)[0]
        audioEl.pause()
      }

      componentDidMount(){

        this.props.getMp3()
      }
    
    RenderComponent = ()=> {
        const {audioClips} = this.props
        return audioClips!==null&&audioClips!==undefined&&audioClips.length>0&&audioClips.filter(item=>item.downloadable==="0").map((soundObj,idx)=>{
            return (
            <div className="col-lg-3 col-md-3" key={idx}>
                <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1"> 
                        <img src={`${baseURL}/soundinsight/img/`+soundObj.thumbnail} alt="user" style={{height:'200px'}} />
                        <div className="el-overlay">
                            <audio className={`audio-element-${idx}`}>
                                <source src={`${baseURL}/soundinsight/mp3/`+soundObj.title}></source>
                            </audio>
                            <ul className="el-info">
                                <li><Link type="button" className="img-circle font-20" to={""}  onClick={()=>this.handlePlay(idx)}><i className="ti-control-play" /></Link></li>
                                <li><Link type="button" className="img-circle font-20" to={""} onClick={()=>this.handlePause(idx)}><i className="ti-control-pause" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="el-card-content text-left text-white">
                        <h4 className="card-title m-b-0">{soundObj.artist}</h4>
                        <p className="text-white">{soundObj.name}</p>
                        <h6 className="text-white">{soundObj.genre}</h6>
                    </div>
                </div>
            </div>
            )
        })
    }
    render() {
        return (
            <Fragment>
                <section className="row el-element-overlay">
                    <div className="col-md-12">
                        <div className="card bg-dark text-white">
                            <div className="card-body">
                                <h5 className="card-title">TRENDING ALBUM</h5>
                                <div className="row">
                                    {this.RenderComponent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

ServiceDisplay.propTypes = {
    audioClips: PropTypes.array,
    getMp3: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
      audioClips: state.mp3Reducer.mp3Records
  });
  


export default connect(mapStateToProps,{getMp3})(ServiceDisplay)
