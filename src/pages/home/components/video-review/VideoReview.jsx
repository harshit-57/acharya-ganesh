import React from 'react';
import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import ImgSectionBg from '../../../../assets/testimonial_bg.png';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';

const VideoReviews = () => {
    const videos = [
        'https://player.vimeo.com/video/968714275',
        'https://player.vimeo.com/video/968719006',
        'https://player.vimeo.com/video/968723190',
        'https://player.vimeo.com/video/968725669',
    ];

    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>Our Students Reviews</h2>
            <div className={css.section_container}>
                {videos.map((video, index) => (
                    <div key={index} className={css.videoWrapper}>
                        <iframe
                            src={video}
                            width="100%"
                            height="200"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>

            <a
                className={css.button}
                href="https://vimeo.com/user216011992"
                target="_blank"
            >
                <PrimaryButton>View More</PrimaryButton>
            </a>
        </PageContainer>
    );
};

export default VideoReviews;
