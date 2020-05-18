import React, {useEffect,Fragment} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getAboutUs} from '../actions/aboutAction'

const About = ({getAboutUs,aboutus})=> {
    
    
    useEffect(() => {
        getAboutUs()
        return () => {

        }
      }, [getAboutUs]);

    const contents = ()=>{
        return aboutus.map(data=>(
        <div className="col-md-12" key={data.id}>
            <h2>{data.title}</h2>
            <div className="about-content">
               {data.description}
            </div>
        </div>
        ))
    }

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        {contents()}
                    </div>
                    <button type="button" className="btn btn-primary">Read More</button>
                </div>
            </Fragment>
        )
}


About.propTypes = {
    aboutus: PropTypes.array,
    getAboutUs: PropTypes.func.isRequired,
  };

const mapStateToProps = state => ({
      aboutus: state.aboutReducer.aboutus,
  });
  

export default connect(mapStateToProps,{getAboutUs})(About)
