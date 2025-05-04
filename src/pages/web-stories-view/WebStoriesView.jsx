import { useEffect, useState } from 'react';
import css from './style.module.css';
import Stories from 'react-insta-stories';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper';
import parse from 'html-react-parser';
import { htmlToText } from 'html-to-text';
import { Icon, Link } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { Images } from '../../util/constants';

export const WebStoriesView = () => {
    const [searchParams] = useSearchParams();
    const { state } = useLocation();
    const { slug } = useParams();
    const [ws, setWs] = useState(null);

    useEffect(() => {
        if (searchParams?.get('preview')) {
            setWs(state?.data);
            return;
        }
        getCourse();
    }, [slug]);

    const getCourse = async () => {
        try {
            const response = await APIHelper.getWebStories({ slug: slug });
            setWs(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };

    const stories = ws?.Images?.length
        ? ws?.Images
              // ?.sort((a, b) => a.ImageOrder - b.ImageOrder)
              ?.map((img) => ({
                  content: ({ action, isPaused }) => {
                      const handlePlayPause = (e) => {
                          e.stopPropagation();
                          isPaused ? action('play') : action('pause');
                      };

                      return (
                          <div
                              className={`${css.story_content_container} ${css.zoom_out}`}
                          >
                              <button
                                  className={css.story_play_pause_button}
                                  onClick={handlePlayPause}
                                  style={{ zIndex: 1000 }}
                              >
                                  <img
                                      src={
                                          isPaused
                                              ? Images.default.IcPlay
                                              : Images.default.IcPause
                                      }
                                      alt={isPaused ? 'Play' : 'Pause'}
                                  />
                              </button>
                              <img
                                  className={css.story_media}
                                  src={img?.ImageUrl || ''}
                                  alt={`Story Image ${img?.Id}`}
                              />
                              {htmlToText(img?.ImageText)?.trim() ? (
                                  <div
                                      className={`${css.story_text_container} ${css[currentAnimation]} html-content`}
                                  >
                                      {parse(img?.ImageText)}
                                  </div>
                              ) : img?.ImageLink ? (
                                  <div
                                      className={`${css.story_link_container} ${css[currentAnimation]}`}
                                  >
                                      <Link
                                          href={img?.ImageLink || ''}
                                          // target={
                                          //     '_blank'
                                          // }
                                      >
                                          {/* <Icon className={css.link_icon}>
                                              {img?.ImageLinkIcon || ''}
                                          </Icon> */}
                                          <KeyboardArrowUp
                                              className={css.link_icon}
                                          />
                                          <p className={css.link_text}>
                                              {img?.ImageLinkText || 'See More'}
                                          </p>
                                      </Link>
                                  </div>
                              ) : null}
                          </div>
                      );
                  },
                  url: img?.ImageUrl || ws?.CoverImageUrl || '',
              }))
        : [
              {
                  content: ({ action, isPaused }) => {
                      const handlePlayPause = (e) => {
                          e.stopPropagation();
                          isPaused ? action('play') : action('pause');
                      };

                      return (
                          <div
                              className={`${css.story_content_container} ${css.zoom_out}`}
                          >
                              <button
                                  className={css.story_play_pause_button}
                                  onClick={handlePlayPause}
                              >
                                  <img
                                      src={
                                          isPaused
                                              ? Images.default.IcPlay
                                              : Images.default.IcPause
                                      }
                                      alt={isPaused ? 'Play' : 'Pause'}
                                  />
                              </button>
                              <img
                                  className={css.story_media_main}
                                  src={ws?.CoverImageUrl || ''}
                                  alt={ws?.CoverImageAlt || 'Story Image'}
                              />
                          </div>
                      );
                  },
                  url: ws?.CoverImageUrl || '',
              },
          ];

    const randomAnimation = () => {
        const animations = [
            'fade_zoom_in',
            'zoom_out',
            'slide_in_left',
            'slide_in_right',
            'bounce',
            // 'rotate_in',
            'flip_in',
        ];
        return animations[Math.floor(Math.random() * animations.length)];
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
                    style={{
                        opacity: currentIndex <= 0 ? 0.2 : 1,
                    }}
                >
                    <img src={Images.default.LeftArrow} alt={'<'} />
                </button>
                <button
                    onClick={onNext}
                    className={css.next_button}
                    style={{
                        opacity: currentIndex >= stories.length - 1 ? 0.2 : 1,
                    }}
                >
                    <img src={Images.default.LeftArrow} alt={'>'} />
                </button>
                <Stories
                    stories={stories?.length ? stories : []}
                    defaultInterval={ws?.TimeDuration * 10}
                    width={'100%'}
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
                    onNext={onNext}
                    onPrevious={onPrev}
                />
            </div>
        </div>
    );
};
