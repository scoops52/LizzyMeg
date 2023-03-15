import React from 'react';
import YouTube from 'react-youtube';
import ReelStyles from './Reel.module.scss';

const Reel = () => {
    const videoId = '7zixqxX4yMU';
    const opts = {
        playerVars: {
            autoplay: 0,
        },
        width: '100%',
        height: '100%',
    }
  return (
    <div className={ReelStyles.container}>
        <div className={ReelStyles.reelWrapper}>
        <YouTube videoId={videoId} opts={opts} className={ReelStyles.reel}/>
        </div>
    </div>
  )
}

export default Reel