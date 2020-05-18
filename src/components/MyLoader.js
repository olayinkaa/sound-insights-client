import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from "prop-types";



const MyLoader = (props) => (
<div 
style={{
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex:2
    }}>

    <Loader type="Oval" color={'#004274'} height={80} width={50} />
    <div className="mt-2" style={{fontSize: '20px'}}>
        {props.msg}
    </div>

</div>
);



MyLoader.defaultProps = {
    msg: "loading..."
}

MyLoader.propTypes= {
    msg:PropTypes.string,
}


export default MyLoader;