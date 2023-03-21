import React from 'react';
import { useState } from 'react';
import GalleryStyles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ galleryImages }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false)
    };

    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    };

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1)
    };


    return (
        <>
            {openModal &&
                <div className={GalleryStyles.slider}>
                    <FontAwesomeIcon icon={faCircleXmark} className={GalleryStyles.closeBtn} onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className={GalleryStyles.prevBtn} onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className={GalleryStyles.nextBtn} onClick={nextSlide} />
                    <div className={GalleryStyles.fullScreenImage}>
                        <img src={galleryImages[slideNumber].img} alt='' />
                    </div>
                </div>
            }

            <div>
                <ul className={GalleryStyles.container}>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                                <>
                                <li
                                    className={GalleryStyles.singleImageLi}
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <img src={slide.img} alt='' className={GalleryStyles.singleImage}/>
                                </li>
                                <li className={GalleryStyles.singleImageLi}></li>
                                </>
                        )
                    })
                }
                </ul>
            </div>
        </>
    )
}

export default Gallery