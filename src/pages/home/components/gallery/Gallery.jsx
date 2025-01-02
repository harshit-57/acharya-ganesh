import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { useState } from 'react';
import { useEffect } from 'react';

import imageList from '../../../../data/gallery-images';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => setImages(imageList), []);
    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>Memories Over The Years</h2>
            <div className={css.gallery_grid}>
                {Array.isArray(images) &&
                    images.map((img, index) => (
                        <img key={index} src={img} alt="" />
                    ))}
            </div>
        </PageContainer>
    );
};

export default Gallery;
