import React from 'react';
import MediaStyles from './Media.module.scss';
import  galleryImages  from '../../assets/galleryImages';
import Gallery from './Gallery/Gallery';


const Media = () => {
    
  return (
    <div className={MediaStyles.container}>
        <h1 className={MediaStyles.title}>
            Photos
        </h1>
        <p>Click image for full size</p>
        <div className={MediaStyles.galleryContainer}>
        <Gallery galleryImages={galleryImages} />
        </div>
    </div>
  )
}

export default Media