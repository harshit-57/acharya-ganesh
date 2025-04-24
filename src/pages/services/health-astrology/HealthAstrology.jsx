import css from './style.module.css';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';
import Blog from '../../../components/blog/Blog';
import CitationBox from '../../../components/citation-box/CitationBox';
import { Images } from '../../../util/constants';
export const HealthAstrology = () => {
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${Images.default.ImgBlogHeaderAlt})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content_container}>
                <div className={css.content_wrapper}>
                    <div
                        className={css.column}
                        style={{ textAlign: 'center', fontSize: '18px' }}
                    >
                        <h1 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Discover Your Health Issues with Our Medical
                            Astrology
                        </h1>
                        <p style={{ textAlign: 'start' }}>
                            With very few exceptions, all living things are
                            susceptible to illnesses and medical conditions.
                            When Medical Astrology plays a major role in this,
                            health astrology also plays a role in identifying
                            health issues in an individual’s life. Because the
                            planets and the 12 astrological signs have an impact
                            on different bodily parts, illnesses, meals, and
                            herbal remedies, Acharya Ganesh’s Medical Astrology
                            can assist you in healing your friends.
                        </p>
                        <br />
                        <h1 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Services at Acharya Ganesh
                        </h1>
                        <p style={{ textAlign: 'start' }}>
                            Welcome to Acharya Ganesh, your premier destination
                            for exploring the mystical realms of astrology and
                            uncovering the secrets of the cosmos. Our astrology
                            services are designed to offer profound insights
                            into your life’s journey, empowering you with the
                            wisdom to navigate your path with clarity and
                            purpose. Dive into our world, where ancient wisdom
                            meets modern understanding, and discover how the
                            stars and planets align to influence your destiny.
                        </p>
                    </div>
                    <div className={css.row}>
                        <img
                            style={{
                                borderRadius: '30px',
                                border: '1px solid black',
                                padding: '30px',
                            }}
                            src={
                                'https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2025/01/Health-Astrology-Service-Page-1.webp?resize=600%2C600&ssl=1'
                            }
                            alt=""
                        />
                        <p
                            style={{
                                border: '1px solid black',
                                borderRadius: '25px',
                                padding: '20px',
                            }}
                        >
                            <h2
                                style={{
                                    textAlign: 'center',
                                    color: '#9a5c23',
                                    paddingBottom: '20px',
                                }}
                            >
                                Heal Your Health Issues with Our Health
                                Astrology
                            </h2>
                            Astrology is the best way for healing and personal
                            development. We can learn about someone’s
                            personality, strengths, weaknesses, and life path by
                            examining the positions of the planets and stars at
                            the moment of their birth. People can use our Health
                            Horoscopes as a guide on their path to healing,
                            change, and self-discovery. We go one step further
                            and address particular emotional and mental health
                            issues with the use of astrological insights. People
                            can develop a deeper awareness of who they are and
                            how they relate to the world around them by working
                            with Acharya Ganesh.
                        </p>
                    </div>
                    <div
                        className={css.column}
                        style={{ textAlign: 'start', fontSize: '18px' }}
                    >
                        <h2 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Our Work of Medical Astrology in Health Issues
                        </h2>
                        <p style={{ textAlign: 'justify' }}>
                            Horoscopes are a tool used in astrology therapy,
                            which is the science of predicting good health. A
                            horoscope in astrology has twelve houses. The twelve
                            health house in astrology of horoscopes encompass
                            every facet of human existence, including health.
                            Health problems result from any malefic planets that
                            have negative influences on these houses. To be
                            clearer, in Vedic astrology, the horoscope stands
                            for health. Achrya Ganesh, a qualified medical
                            astrologer, can cure you based on their knowledge
                            and experience.
                        </p>
                    </div>
                    <div className={css.row}>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/sun.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Sun</h2>
                            <p style={{ fontWeight: '400' }}>
                                Stomach, heart, head, back, a man’s right eye, a
                                woman’s left eye, energy, joint, sinus,
                                migraine, elevated temperature, etc.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/moon.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Moon</h2>
                            <p style={{ fontWeight: '400' }}>
                                Asthma, sleeplessness, blood, bodily fluids,
                                brain, left and right eyes of men and women.
                                When it is in line with Saturn, it can result in
                                diabetes, vomiting, and dry coughing.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/mars.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Mars</h2>
                            <p style={{ fontWeight: '400' }}>
                                Asthma, sleeplessness, blood, bodily fluids,
                                brain, left and right eyes of men and women.
                                When it is in line with Saturn, it can result in
                                diabetes, vomiting, and dry coughing.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/mercury.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Mercury</h2>
                            <p style={{ fontWeight: '400' }}>
                                thyroid, skin, face, and nervous system. It
                                directly affects conditions like ear issues,
                                mental illnesses, etc.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/jupiter.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Jupiter</h2>
                            <p style={{ fontWeight: '400' }}>
                                Pancreas, kidneys, and liver. A weak Jupiter can
                                result in a cardiac tumor, excessive weight
                                gain, fatty liver, and cognitive loss, among
                                other things.​
                            </p>
                        </div>
                    </div>

                    <div className={css.row}>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/venus.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Venus</h2>
                            <p style={{ fontWeight: '400' }}>
                                It directly affects the face, cheeks, esophagus,
                                ovarian cysts, throat, and throat glands.
                                Impotence may also result from a weak Venus.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/saturn.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Saturn</h2>
                            <p style={{ fontWeight: '400' }}>
                                This is associated with the legs, bones,
                                muscles, teeth, hair, joints, arthritis, stomach
                                issues, and physical weakness.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/rahu.webp?fit=128%2C128&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Rahu</h2>
                            <p style={{ fontWeight: '400' }}>
                                Rahu can lead to issues with stammering,
                                breathing, ulcers, cataracts, cancer, and more.​
                            </p>
                        </div>
                        <div
                            className={css.column}
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ height: '120px', width: '120px' }}
                                src="https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/ketu.webp?fit=64%2C64&ssl=1"
                                alt=""
                            />
                            <h2 style={{ fontWeight: '500' }}>Ketu</h2>
                            <p style={{ fontWeight: '400' }}>
                                This planet is the abdomen’s “karaka.”
                                Additionally, it is to blame for cuts and skin
                                decaying from bug bites. Unknown illnesses are
                                brought in by Ketu, and these could
                                progressively erode our resistance. In addition,
                                it may result in nausea, weakness, and other
                                symptoms.​
                            </p>
                        </div>
                    </div>

                    <div
                        className={css.column}
                        style={{ textAlign: 'center', fontSize: '18px' }}
                    >
                        <h1 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Self-awareness and personal development
                        </h1>
                        <p style={{ textAlign: 'center' }}>
                            We assist people in better comprehending their own
                            personalities, assets, and limitations. Increased
                            self-acceptance, self-awareness, and personal
                            development may result from this. People can deal
                            with their obstacles and talents by learning how
                            their astrological influences work. We provide
                            Astrological remedies for health problems that can
                            treat you as soon as possible.
                        </p>
                    </div>
                    <div className={css.row}>
                        <div
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                            }}
                        >
                            <h2>Emotional healing</h2>
                            <p>
                                We also offer advice on how to get over
                                emotional scars and traumas from the past, as
                                well as assistance in exploring one’s own
                                emotional patterns and needs. People who are
                                aware of their astrological influences can learn
                                healthy coping mechanisms and break bad habits.
                            </p>
                        </div>
                        <div
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                            }}
                        >
                            <h2>Relationship restoration</h2>
                            <p>
                                We are able to assist families and couples in
                                resolving disputes, enhancing communication, and
                                strengthening their emotional bonds. Couples and
                                families can learn how to better support one
                                another and forge stronger bonds by being aware
                                of one other’s astrological influences.
                            </p>
                        </div>
                    </div>
                    <div className={css.row}>
                        <div
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                            }}
                        >
                            <h2>Spiritual development</h2>
                            <p>
                                We possess professional competence in the area
                                of spiritual growth. A person might get a
                                greater sense of meaning and purpose in life by
                                realizing how the self and the universe are
                                interconnected. People can find ways to connect
                                with their higher self and explore their
                                spiritual path by hiring Acharya Ganesh.
                            </p>
                        </div>
                        <div
                            style={{
                                border: '1px solid black',
                                borderRadius: '15px',
                                padding: '20px',
                                textAlign: 'center',
                            }}
                        >
                            <h2>Better decision-making</h2>
                            <p>
                                We offer advice and medical astrology books on
                                significant life decisions, including profession
                                selection, romantic partnerships, and
                                significant life transitions. People can make
                                better judgments and steer clear of frequent
                                traps by developing a greater grasp of the
                                astrological influences in their lives.
                                Astrology may assist people in realizing their
                                strengths and weaknesses and in making decisions
                                that are in line with their actual path and
                                purpose.
                            </p>
                        </div>
                    </div>

                    <div
                        className={css.column}
                        style={{ textAlign: 'start', fontSize: '18px' }}
                    >
                        <h1 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Why Choose Acharya Ganesh?
                        </h1>
                        <p style={{ textAlign: 'justify' }}>
                            For spiritual development, emotional healing, and
                            personal advancement, medical astrology can be a
                            very effective instrument. By working with Acharya
                            Ganesh, you can learn more about your unique
                            astrological influences and apply that understanding
                            to overcome obstacles, strengthen bonds with others,
                            and develop a deeper sense of self and personal
                            fulfillment. We assist people in realizing their
                            full potential and leading more purposeful lives.
                            Acharya Ganesh offers a special and potent method
                            for healing and transformation, regardless of
                            whether you are having relationship problems,
                            experiencing emotional difficulties, or just wanting
                            to become more self-aware.
                        </p>
                    </div>
                    <Blog />
                    <CitationBox />
                </div>
            </div>
            <Spacer vertical={'20px'} />
            <Footer />
        </PageContainer>
    );
};
