import { useEffect, useState } from 'react';
import css from './style.module.css';
import Stories from 'react-insta-stories';
import IcPlay from '../../assets/play.svg';
import IcPause from '../../assets/pause.svg';
import LeftArrow from '../../assets/left-arrow.png';
import { useParams } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper';
import parse from 'html-react-parser';
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

    const stories = ws?.Images?.length
        ? ws?.Images?.sort((a, b) => a.ImageOrder - b.ImageOrder)?.map(
              (img) => {
                  return {
                      content: ({ action, isPaused }) => {
                          return (
                              <div
                                  className={`${css.story_content_container} ${css.zoom_out}`}
                              >
                                  <img
                                      className={css.story_play_pause_button}
                                      src={isPaused ? IcPlay : IcPause}
                                      alt={''}
                                      onClick={() =>
                                          isPaused
                                              ? action('play')
                                              : action('pause')
                                      }
                                  />
                                  <img
                                      className={
                                          img?.ImageText
                                              ? css.story_media
                                              : css.story_media_main
                                      }
                                      src={
                                          img?.ImageUrl ||
                                          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=8f5362c1ddb3ce7c507902636a92e2c0e8b20e015b03a062e0c0524ac47319d3&ipo=images'
                                      }
                                      alt={''}
                                  />
                                  {img?.ImageText && (
                                      <div
                                          className={`${css.story_text_container} ${css[currentAnimation]}`}
                                      >
                                          {/* <h2>Capricon</h2>
                             <p>
                                 Get your daily horoscope and discover what the
                                 stars have in store for you. From love and
                                 relationships to career and success, our daily
                                 horoscope has got you covered.
                             </p> */}
                                          {parse(img?.ImageText)}
                                      </div>
                                  )}
                              </div>
                          );
                      },
                      url:
                          img?.ImageUrl ||
                          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=8f5362c1ddb3ce7c507902636a92e2c0e8b20e015b03a062e0c0524ac47319d3&ipo=images',
                  };
              }
          )
        : [
              // ws?.CoverImageUrl ||
              //     'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=8f5362c1ddb3ce7c507902636a92e2c0e8b20e015b03a062e0c0524ac47319d3&ipo=images',
              {
                  content: ({ action, isPaused }) => {
                      return (
                          <div
                              className={`${css.story_content_container} ${css.zoom_out}`}
                          >
                              <img
                                  className={css.story_play_pause_button}
                                  src={isPaused ? IcPlay : IcPause}
                                  alt={''}
                                  onClick={() =>
                                      isPaused
                                          ? action('play')
                                          : action('pause')
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
          ];

    const randomAnimation = () => {
        const animations = [
            'fade_zoom_in',
            'zoom_out',
            'slide_in_left',
            'slide_in_right',
            'bounce',
            'rotate_in',
            'flip_in',
        ];
        const randomIndex = Math.floor(Math.random() * animations.length);
        return animations[randomIndex];
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentAnimation, setCurrentAnimation] = useState(randomAnimation());

    const onNext = () => {
        if (currentIndex < stories.length - 1)
            setCurrentIndex(currentIndex + 1);
    };
    const onPrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    return (
        <div
            className={css.container}
            style={{
                backgroundImage: `url(${
                    stories?.length ? stories[currentIndex]?.url : ''
                })`,
            }}
        >
            <div className={css.wrapper}>
                <button
                    onClick={onPrev}
                    className={css.prev_button}
                    style={{ opacity: currentIndex <= 0 ? 0.2 : 1 }}
                >
                    <img src={LeftArrow} alt={''} />
                </button>
                <button
                    onClick={onNext}
                    className={css.next_button}
                    style={{
                        opacity: currentIndex >= stories.length - 1 ? 0.2 : 1,
                    }}
                >
                    <img src={LeftArrow} alt={''} />
                </button>
                <Stories
                    stories={stories?.length ? stories : []}
                    defaultInterval={ws?.TimeDuration * 10}
                    width={432}
                    height={'100%'}
                    preloadCount={1}
                    currentIndex={currentIndex}
                    onStoryStart={() => {
                        setCurrentAnimation(randomAnimation());
                    }}
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
