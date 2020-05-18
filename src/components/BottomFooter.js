import React,{Fragment} from 'react'

const BottomFooter = () => {
    var d = new Date();
    var n = d.getFullYear();
    return (
        <Fragment>
            <div className="container text-center">
                <p>SoundInsights © {n}</p>
            </div>
        </Fragment>
    )
}

export default BottomFooter
