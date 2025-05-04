import { useState } from 'react';
import styles from './style.module.css';
import FAQItem from './component/item/FaqItem';
import { Images } from '../../../../util/constants';

const FAQSection = () => {
    const [showMore, setShowMore] = useState(false);

    const initialFAQs = [
        'What type of astrology consultations do you offer?',
        'How long is a consultation?',
        'How do I prepare for my consultation?',
        'Do you offer in-person consultations?',
    ];

    const extraFAQs = [
        'Can I get a recorded session?',
        'Do you provide emergency readings?',
        'What details do I need to share beforehand?',
        'Are your consultations refundable?',
    ];

    const faqs = [
        {
            question: 'What type of astrology consultations do you offer?',
            answer: `We offer a variety of consultations, including career guidance, relationship compatibility, life path readings, and general astrological insights. Each session is tailored to your personal needs and goals.`,
        },
        {
            question: 'How long is a consultation?',
            answer: `Most consultations last between 30 minutes to 45 minutes, depending on the type of session you choose. You’ll receive detailed insights during our time together, so you can leave with clear guidance.`,
        },
        {
            question: 'How do I prepare for my consultation?',
            answer: `Yes, we offer both online and in-person consultations, allowing you to choose the option that works best for you.`,
        },
        {
            question: 'Do you offer in-person consultations?',
            answer: `Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.`,
        },
        {
            question: 'How can I pay for my consultation?',
            answer: `Payment can be made securely online via credit card or other available payment options. You’ll receive an email with payment details once you confirm your booking.

Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.`,
        },
        {
            question: 'What if I need to reschedule my consultation?',
            answer: `If you need to reschedule, please notify me at least 24 hours in advance. We will be happy to find a new time that works for you.`,
        },
        {
            question: 'Is astrology accurate?',
            answer: `Astrology is a tool for insight and guidance. While it may not provide exact predictions, it can offer powerful clarity on life’s challenges, patterns, and opportunities, helping you make informed decisions based on your unique energies.`,
        },
        {
            question: 'Can I book a session as a gift for someone else?',
            answer: `Yes! If you’d like to gift a consultation to someone, simply book a session in their name, and we will be happy to guide them through the process.`,
        },
        {
            question: 'How do I know which consultation is right for me?',
            answer: `If you’re unsure, feel free to contact us! We are happy to discuss your needs and recommend the best option based on your current life situation.`,
        },
        {
            question: 'Will I receive a recording of the session?',
            answer: `A recording of the Zoom meeting will be available after our session, so you can revisit the insights shared whenever you need.`,
        },
    ];

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${Images.default.FAQBg})` }}
        >
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            {(showMore ? faqs : faqs?.slice(0, 4)).map((e) => {
                return <FAQItem question={e.question} answer={e.answer} />;
            })}
            <button
                className={styles.showMoreBtn}
                onClick={() => setShowMore(!showMore)}
            >
                <img src={Images.default.IcStar} alt={'*'} />
                {showMore ? 'Show Less' : 'Show More'}
                <img src={Images.default.IcStar} alt={'*'} />
            </button>
        </div>
    );
};

export default FAQSection;
