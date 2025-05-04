import css from './style.module.css';
import { Images } from '../../../util/constants';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';
import Blog from '../../../components/blog/Blog';
import CitationBox from '../../../components/citation-box/CitationBox';
export const AstroVastu = () => {
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
                    <div className={css.column}>
                        <h4 style={{ color: '#fcbf50', textAlign: 'center' }}>
                            Unlock Harmony
                        </h4>
                        <h1 style={{ color: '#FCBF50', textAlign: 'center' }}>
                            and Success with Astro-Vastu
                        </h1>
                    </div>
                    <div className={css.row}>
                        <p style={{ textAlign: 'center' }}>
                            Welcome! You’ve entered a space where age-old
                            knowledge and today’s way of life come together
                            beautifully. Our Astro-Vastu services are designed
                            to beautify your space and align it perfectly with
                            the cosmic energies based on your birth chart.
                            Imagine living and working in an environment that
                            resonates with your energies, enhances your quality
                            of life, and propels you toward your dreams and
                            goals. This is not just a service; it’s a
                            transformative experience tailored just for you.
                        </p>
                    </div>
                    <div className={css.row}>
                        <p>
                            Astro-Vastu is a revolutionary method that merges
                            traditional Vastu Shastra principles with
                            astrology’s personalized insights. By analyzing the
                            unique combinations in your birth chart, Astro-Vastu
                            customizes your home, office, or commercial space to
                            ensure a harmonious flow of positive energy. This
                            alignment enhances focus, performance, and overall
                            well-being, enabling you to reach your full
                            potential. Our esteemed team of astrologers at
                            Acharya Ganesh spearheads the Astro-Vastu service,
                            bringing years of expertise and knowledge to create
                            an environment that supports your aspirations and
                            minimizes obstacles. The approach is simple yet
                            profoundly effective – aligning the energies of your
                            surroundings with the optimistic elements of your
                            natal chart, ensuring that you reap maximum benefits
                            while minimizing the downsides.
                        </p>
                        <p>
                            We at Acharya Ganesh adopt a non-invasive approach
                            to harmonize your space. By understanding your date
                            of birth, time, and place of birth, a detailed
                            analysis is conducted to uncover the unique aspects
                            of your life and personality. Based on this
                            analysis, specific remedies and adjustments are
                            recommended without major structural changes. The
                            solutions may include strategically placing
                            paintings, vases, stones, artifacts, or color
                            changes in certain areas of your space. These
                            remedies are aimed at neutralizing negative energies
                            and enhancing positive vibrations. Structural
                            changes are only suggested in rare cases, ensuring
                            that your comfort and convenience remain paramount.
                        </p>
                    </div>
                    <div className={css.column}>
                        <h2 style={{ color: '#fcbf50', textAlign: 'center' }}>
                            Who Should Opt for
                        </h2>
                        <h4 style={{ color: '#FCBF50', textAlign: 'center' }}>
                            Astro-Vastu?
                        </h4>
                    </div>
                    <div className={css.row}>
                        <p style={{ textAlign: 'center' }}>
                            Astro-Vastu is for anyone and everyone seeking
                            improvement in their personal and professional
                            lives. Whether you are grappling with health issues,
                            financial constraints, relationship troubles, or
                            career challenges, Astro-Vastu offers hope and a
                            path to improvement.
                        </p>
                    </div>
                    <div className={css.row}>
                        <ul class="elementor-icon-list-items">
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-text">
                                    <b>
                                        Individuals Facing Life Challenges:
                                        <span>&nbsp;</span>
                                    </b>
                                    If health, finances, or relationships have
                                    been a constant source of stress,
                                    Astro-Vastu can help redirect the energies
                                    in your favor.
                                </span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon"></span>
                                <span class="elementor-icon-list-text">
                                    <b>
                                        Corporate Leaders and Professionals:
                                        <span>&nbsp;</span>
                                    </b>
                                    For those struggling with career
                                    progression, workplace stress, or
                                    interpersonal issues, our services offer a
                                    sanctuary, transforming your work
                                    environment into a source of strength and
                                    clarity.
                                </span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-text">
                                    <b>
                                        Entrepreneurs and Business Owners:
                                        <span>&nbsp;</span>
                                    </b>
                                    Small business owners, from retail shops to
                                    service-based enterprises, facing hurdles in
                                    business growth, financial stability, or
                                    staff management, can find solace and
                                    solutions in Astro-Vastu.
                                </span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon"></span>
                                <span class="elementor-icon-list-text">
                                    <b>
                                        Self-employed Professionals:
                                        <span>&nbsp;</span>
                                    </b>
                                    Doctors, chartered accountants, lawyers, and
                                    other professionals looking to expand their
                                    clientele and enhance their practice’s
                                    energy will find Astro-Vastu particularly
                                    beneficial.
                                </span>
                            </li>
                        </ul>
                        <img
                            src={
                                'https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2025/01/Astro-Vastu-Service-Page-1.webp?resize=600%2C600&ssl=1'
                            }
                            alt={'astro-vastu'}
                        />
                    </div>
                    <div className={css.row}>
                        <p>
                            Our Commitment to You At our core, we believe in
                            creating spaces that reflect and enhance your life’s
                            unique blueprint. With Acharya Ganesh’s guidance,
                            our Astro-Vastu service is more than just a
                            consultation; it’s a journey towards a more
                            balanced, prosperous, and harmonious existence. We
                            respect your space and preferences, ensuring all
                            remedies are feasible, non-intrusive, and aligned
                            with your personal and professional dynamics.
                        </p>
                        <p>
                            Embrace the Change Astro-Vastu is the key if you’re
                            ready to transform your living and working
                            environments into sources of positive energy and
                            success. Let us guide you through this journey of
                            alignment and discovery. By harmonizing your spaces
                            with your astrological blueprint, we unlock doors to
                            improved well-being, smoother relationships, career
                            growth, and financial stability.
                        </p>
                    </div>
                    <div className={css.row}>
                        <p>
                            <span
                                style={{
                                    color: '#fcbf50',
                                    textAlign: 'center',
                                    fontSize: '24px',
                                    fontWeight: '500',
                                }}
                            >
                                How can I support you
                            </span>{' '}
                            <br />
                            At Acharya Ganesh, your well-being, needs, and
                            personal growth are our core focus. Our main goal is
                            to assist in your transformation journey, enabling
                            you to reach your highest potential. By consulting
                            with Acharya Ganesh and following the recommended
                            remedies, you’ll notice significant, measurable
                            changes in your life.
                        </p>
                        <p>
                            Reach out to Acharya Ganesh today and discover the
                            positive impact he can bring into your life through:
                            Profound understanding of a wide range of subjects.
                            Comprehensive expertise and professional knowledge.
                            Remedies that are effective, practical, affordable,
                            and quick to show results. Holistic solutions and a
                            practical approach for all-round wellness. Real,
                            measurable, and significant improvements in your
                            life. Unwavering support throughout your personal
                            transformation journey.
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
