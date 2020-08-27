import React,{Fragment} from 'react'
import ReactPlayer from 'react-player/youtube'
const YoutubeVideo = () => {
    return (
        <Fragment>
            <div className="row p-4">
                <div className="col-md-6 mt-2">
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=ZSesneKDTJ4'
                    controls={true} 
                    width="100%"
                    />
                </div>
                <div className="col-md-6 mt-2">
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=21n5N1UxGaU'
                    controls={true} 
                    width="100%"
                    />
                </div>
            </div>
          
        </Fragment>
    )
}

export default YoutubeVideo
