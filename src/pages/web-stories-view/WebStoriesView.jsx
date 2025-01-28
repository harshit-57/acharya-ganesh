import { useEffect, useState } from 'react';
import css from './style.module.css';
import Stories from 'react-insta-stories';
import IcPlay from '../../assets/play.svg';
import IcPause from '../../assets/pause.svg';
import { useParams } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper';
export const WebStoriesView = () => {
    const { slug } = useParams();
    const [ws, setWs] = useState(null);
    useEffect(() => {
        getCourse();
    }, [slug]);
    const getCourse = async () => {
        try {
            const response = await APIHelper.getWebStories({ id: slug });
            setWs(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };
    const stories = [
        // ws?.CoverImageUrl ||
        //     'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=8f5362c1ddb3ce7c507902636a92e2c0e8b20e015b03a062e0c0524ac47319d3&ipo=images',
        {
            content: ({ action, isPaused }) => {
                return (
                    <div className={css.story_content_container}>
                        <img
                            className={css.story_play_pause_button}
                            src={isPaused ? IcPlay : IcPause}
                            alt={''}
                            onClick={() =>
                                isPaused ? action('play') : action('pause')
                            }
                        />
                        <img
                            className={css.story_media_main}
                            src={
                                ws?.CoverImageUrl ||
                                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=8f5362c1ddb3ce7c507902636a92e2c0e8b20e015b03a062e0c0524ac47319d3&ipo=images'
                            }
                            alt={''}
                        />
                    </div>
                );
            },
            url:
                ws?.CoverImageUrl ||
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=8f5362c1ddb3ce7c507902636a92e2c0e8b20e015b03a062e0c0524ac47319d3&ipo=images',
        },
        {
            content: ({ action, isPaused }) => {
                return (
                    <div className={css.story_content_container}>
                        <img
                            className={css.story_play_pause_button}
                            src={isPaused ? IcPlay : IcPause}
                            alt={''}
                            onClick={() =>
                                isPaused ? action('play') : action('pause')
                            }
                        />
                        <img
                            className={css.story_media}
                            src={
                                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hitc.com%2Fstatic%2Fuploads%2F2023%2F10%2Fa24bf0b9-2502-4925-9a9a-53cfd58035de.jpg&f=1&nofb=1&ipt=907f6b509122e8d5b59b860b9549ea85ffe3128f3dd466f07b83bcb1ee2da2b3&ipo=images'
                            }
                            alt={''}
                        />
                        <div className={css.story_text_container}>
                            <h2>Capricon</h2>
                            <p>
                                Get your daily horoscope and discover what the
                                stars have in store for you. From love and
                                relationships to career and success, our daily
                                horoscope has got you covered.
                            </p>
                        </div>
                    </div>
                );
            },
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hitc.com%2Fstatic%2Fuploads%2F2023%2F10%2Fa24bf0b9-2502-4925-9a9a-53cfd58035de.jpg&f=1&nofb=1&ipt=907f6b509122e8d5b59b860b9549ea85ffe3128f3dd466f07b83bcb1ee2da2b3&ipo=images',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // const getColors = () => {
    //     stories[currentIndex];
    // };
    // useEffect(() => {
    //     getColors();
    // }, [currentIndex]);

    return (
        <div
            className={css.container}
            style={{ backgroundImage: `url(${stories[currentIndex]?.url})` }}
        >
            <div className={css.wrapper}>
                <Stories
                    stories={stories}
                    defaultInterval={5000}
                    width={432}
                    height={768}
                    // preloadCount={1}
                    currentIndex={currentIndex}
                    onStoryStart={() => {}}
                    onStoryEnd={() => {
                        if (currentIndex < stories.length - 1)
                            setCurrentIndex(currentIndex + 1);
                    }}
                    onNext={() => {
                        if (currentIndex < stories.length - 1)
                            setCurrentIndex(currentIndex + 1);
                    }}
                    onPrevious={() => {
                        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
                    }}
                />
            </div>
        </div>
    );
};
const renderer = ({ story, action, isPaused, config }) => {
    return <div>Hello!</div>;
};

const tester = (story) => {
    return {
        // Use this renderer only when the story type is video
        condition: story.type === 'video',
        priority: 3,
    };
};
