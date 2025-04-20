import React, { useState } from 'react';
import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import ImgSectionBg from '../../../../assets/testimonial_bg.png';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';

const VideoReviews = () => {
    const videos = [
        // 'https://player.vimeo.com/video/968714275',
        // 'https://player.vimeo.com/video/968719006',
        // 'https://player.vimeo.com/video/968723190',
        // 'https://player.vimeo.com/video/968725669',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/1.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/2.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/3.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/4.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/5.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/6.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/7.mp4',
        'https://acharyaganesh.com/wp-content/uploads/2025/02/811.mp4',
    ];

    const [showMore, setShowMore] = useState(false);

    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>Our Students Reviews</h2>
            <div className={css.section_container}>
                {(showMore ? videos : videos?.slice(0, 4)).map(
                    (video, index) => (
                        <div key={index} className={css.videoWrapper}>
                            <video
                                controls
                                loading="lazy"
                                width="100%"
                                height="200"
                                allow="fullscreen"
                                controlsList="nodownload"
                                // className={css.video}
                                // poster={`https://acharyaganesh.com/wp-content/uploads/2025/02/1.jpg`}
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                            {/* <iframe
                                src={video}
                                width="100%"
                                height="200"
                                frameBorder="0"
                                allow="fullscreen"
                                allowFullScreen
                            ></iframe> */}
                        </div>
                    )
                )}
            </div>

            <a className={css.button} onClick={() => setShowMore(!showMore)}>
                <PrimaryButton>
                    {showMore ? 'View Less' : 'View More'}
                </PrimaryButton>
            </a>
        </PageContainer>
    );
};

export default VideoReviews;
