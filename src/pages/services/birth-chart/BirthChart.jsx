import css from './style.module.css';
import ImgBlogHeader from '../../../assets/blog_header_bg.png';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';

export const BirthChart = () => {
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgBlogHeader})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content_container}>
                <div className={css.content_wrapper}>
                    <div className={css.column}>
                        <h1 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Muhurat
                        </h1>
                        <h4 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Know Your Health Horoscope By Your Date of Birth
                            Chart
                        </h4>
                    </div>
                    {/* <div className={css.row}>
                        <p style={{ textAlign: 'center' }}>
                            In the intriguing world of Indian astrology, the
                            Muhurat is essential. This cosmic
                            blueprint, created using the exact date, time, and
                            location of one’s birth, depicts the positions of
                            the planets and stars at that specific moment. It’s
                            like a heavenly snapshot, capturing the universe’s
                            arrangement to reveal information about one’s
                            personality, life path, and destiny. At Acharya
                            Ganesh, we are skilled astrologers who can answer
                            your questions based on your muhurat. Using your
                            muhurat as a guide, we can learn about your
                            strengths, weaknesses, and unique qualities,
                            allowing you to connect more intimately with
                            yourself and others.
                        </p>
                    </div>
                    <div className={css.row}>
                        <p>
                            Muhurat is a powerful tool that
                            provides a complete blueprint of your life based on
                            the position of celestial bodies at the time of your
                            birth. By examining the unique aspects of your
                            astrology chart, we can identify key patterns in
                            your personality, career, relationships, health, and
                            overall life journey. This insightful reading not
                            only helps you understand yourself better but also
                            guides you in making better decisions and unlocking
                            your true potential. Our expert astrologers at
                            Acharya Ganesh are dedicated to providing you with
                            transformative readings that empower you to live a
                            life aligned with your destiny.
                        </p>
                        <p>
                            Our service involves a deep, personalized analysis
                            of your muhurat, covering important areas such
                            as your sun sign, moon sign, rising sign, and
                            planetary positions. From there, we identify how
                            these aspects influence your life’s journey and
                            offer remedies, guidance, and actionable advice that
                            you can incorporate into your daily life. Whether
                            you're looking for career guidance, relationship
                            insights, or ways to improve your health, our Birth
                            Chart Astrology service provides you with a holistic
                            view of your path and how to walk it with
                            confidence.
                        </p>
                    </div> */}
                    <div className={css.row}>
                        <p>
                            <h4
                                style={{
                                    color: '#9a5c23',
                                    textAlign: 'center',
                                }}
                            >
                                What is Our Muhurat?
                            </h4>
                            Muhurat visually represents the planets when a child
                            is born. It is an astronomical muhurat that is made
                            based on an individual’s specific date, time, and
                            birth location. This chart depicts the various
                            positions of planets and constellations at the
                            moment of the child’s birth. At Acharya Ganesh, we
                            use Kundli to forecast future events and analyze
                            past experiences. The positioning of the Sun, Moon,
                            and other planets can signal favorable times for new
                            initiatives or warn of potential difficulties. For
                            example, a strong placement of Jupiter, the planet
                            of growth and expansion, may indicate periods of
                            prosperity and success. On the other hand, a
                            challenging Saturn position may indicate times when
                            patience and perseverance are tested.
                        </p>

                        <p>
                            <h4
                                style={{
                                    color: '#9a5c23',
                                    textAlign: 'center',
                                }}
                            >
                                How We Define Health Astrology By Date of Birth?
                            </h4>
                            Our natal planets in the muhurat are stable,
                            although the planets in the sky are constantly
                            moving over our various Houses. Each planet has its
                            own orbit, but because we follow the sun’s 365-day
                            cycle, we experience a full solar cycle of all the
                            Houses each year. In other words, everyone will feel
                            the energies of each dwelling throughout their
                            lives. Even if you are not a Cancer, because Cancer
                            is related with the Fourth House of Home and Family,
                            these aspects of your life will eventually demand
                            your attention. At Acharya Ganesh, once we
                            understand how each planet and sign interact, we
                            look to the Houses to see where that energy is
                            manifesting. The planets within the Houses show the
                            full scope of our experience and the nuances of our
                            personality.
                        </p>
                    </div>
                    <div className={css.row}>
                        <p>
                            <h4
                                style={{
                                    color: '#9a5c23',
                                    textAlign: 'center',
                                }}
                            >
                                How We Define Health Astrology By Date of Birth?
                            </h4>
                            Our natal planets in the muhurat are stable,
                            although the planets in the sky are constantly
                            moving over our various Houses. Each planet has its
                            own orbit, but because we follow the sun’s 365-day
                            cycle, we experience a full solar cycle of all the
                            Houses each year. In other words, everyone will feel
                            the energies of each dwelling throughout their
                            lives. Even if you are not a Cancer, because Cancer
                            is related with the Fourth House of Home and Family,
                            these aspects of your life will eventually demand
                            your attention. At Acharya Ganesh, once we
                            understand how each planet and sign interact, we
                            look to the Houses to see where that energy is
                            manifesting. The planets within the Houses show the
                            full scope of our experience and the nuances of our
                            personality.
                        </p>

                        <p>
                            <h4
                                style={{
                                    color: '#9a5c23',
                                    textAlign: 'center',
                                }}
                            >
                                What are the first things we look at in your
                                muhurat?
                            </h4>
                            At Acharya Ganesha, when we enter your birth
                            information into a computer, you will likely see a
                            circle appear with a description of what it implies.
                            Astrology by date of birth may be displayed in
                            seconds using cutting-edge computer software. This
                            circle will be divided into 12 pie-shaped parts,
                            with various symbols strewn throughout. These are
                            highly essential because they shape the core
                            components of who you are and how you interact with
                            the world daily. Your Sun sign corresponds to your
                            essential personality and identity. That is
                            determined by the Sun’s zodiac sign at the moment of
                            your birth. Your Moon sign represents your inner
                            emotional life and soul.
                        </p>
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            1st House
                        </h2>
                        This portion of the muhurat is also known as the
                        ascendant, or rising. It represents the energy we put
                        out into the world, the first thing people notice about
                        us is our identity and how we show ourselves.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            2nd House
                        </h2>
                        The second house symbolizes our legacy, material things,
                        relationship with money, and values.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            The 3rd House
                        </h2>
                        This area of the muhurat represents communication, early
                        childhood education, siblings, roommates, and the
                        community.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            4th House
                        </h2>
                        The fourth house of the muhurat represents our
                        relationship with our family, home life, ancestors, and
                        aspirations.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            5th House
                        </h2>
                        The fifth house represents the potential for taking
                        chances in gambling, investing, developing creativity,
                        and pursuing casual romantic connections, hobbies, and
                        children.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            6th House
                        </h2>
                        The sixth house represents our health, daily routines,
                        habits, wellbeing, coworkers, and employees. Also, how
                        can we help others?
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            7th House
                        </h2>
                        The seventh house in the muhurat represents
                        interpersonal interactions, contracts, marital
                        alliances, and opens enemies.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            8th House
                        </h2>
                        The eighth house represents sex, death debts.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            9th House
                        </h2>
                        The ninth house is the sector of our charts dedicated to
                        exploration, travel, philosophy, adventure, higher
                        education, morals, and the law.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            10th House
                        </h2>
                        This section of the chart reflects our public image and
                        position, as well as our career and achievements.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            11th House
                        </h2>
                        It showcases the humanitarian and charity work that is
                        being done, as well as our friendships, social lives,
                        hopes, and dreams.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            12th House
                        </h2>
                        It represents clandestine concerns, mental health,
                        covert adversaries, everything hidden from the public
                        eye, loneliness, and our subconsciousness.
                    </div>
                    <div className={css.column}>
                        <h1 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            The placements of planets by Date of Muhurat
                        </h1>
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            Sun Sign with Rising Sign
                        </h2>
                        Your Sun sign reflects your basic nature, while the
                        rising sign (ascendant) indicates how others perceive
                        you.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            Moon Sign
                        </h2>
                        Your emotions are influenced by the Moon’s position at
                        the time of your birth. Knowing your Moon sign helps us
                        better understand your emotions and instincts.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            Planetary Placement
                        </h2>
                        Every planet in your chart plays a part. Venus
                        symbolizes love, Mercury represents communication, while
                        Mars represents energy. Where they appear in your chart
                        reveals more about you.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            Houses and Aspects
                        </h2>
                        Our health horoscope by date of muhurat is divided into
                        12 houses, which reflect different aspects of your life.
                        The angles between planets (aspects) exhibit distinct
                        behaviors. For example, if two planets are close
                        together, it is a conjunction, indicating a combination
                        of energy. If they form a right angle (square), it may
                        indicate a difficulty.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            Backward Planets
                        </h2>
                        When planets move backward, it means their energy is
                        directed inward. Finding retrograde planets in your
                        chart helps you gain a better understanding of yourself.
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#9a5c23', textAlign: 'left' }}>
                            Dominant Elements and Modalities
                        </h2>
                        Personality traits are influenced by dominant elements
                        (fire, earth, air, water) and modalities (cardinal,
                        fixed, mutable). Identifying which ones dominate helps
                        provide a more complete picture of who you are.
                    </div>

                    <div className={css.column}>
                        <h1 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Why Hire Acharya Ganesh to Get a Horoscope by Birth
                            Chart?
                        </h1>
                        <Spacer vertical={'20px'} />
                        At the heart of astrology, the cosmic warrior is the
                        long-held concept that the human spirit reflects the
                        universe: both are magnificently diverse and infinitely
                        mysterious. Ultimately, muhurat is the art of
                        stargazing. Your inquisitive nature will constantly
                        shine a light on the darkness. So, if you want your
                        muhurat horoscope, Acharya Ganesh is the sole option to
                        meet your needs. We have the professional knowledge and
                        experience to deliver the best horoscope 24/7. So please
                        visit our website or contact us directly.
                    </div>
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};
