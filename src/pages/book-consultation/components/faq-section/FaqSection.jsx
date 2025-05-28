import { useState } from 'react';

import styles from './style.module.css';

import IcStar from '../../../../assets/Star 4.png';
import FAQBg from '../../../../assets/book_consultatio_faq.png';
import FAQItem from './component/item/FaqItem';

const FAQSection = () => {
    const [showMore, setShowMore] = useState(false);

    const faqs = [
        {
            question: 'What types of astrology consultations do you offer?',
            answer: 'We provide expert astrological guidance through natal chart analysis, career astrology, relationship compatibility, medical astrology, predictive astrology (dashas & transits), and more. However, we do not offer face reading or palmistry services.',
        },
        {
            question: 'How long is a consultation?',
            answer: 'Consultation durations vary based on your needs, ranging from 30-minute quick sessions to 60-minute in-depth analyses. The exact timing will be confirmed at the time of booking.',
        },
        {
            question: 'How should I prepare for my consultation?',
            answer: 'For the best experience, prepare your birth details (date, time, and place of birth) and a list of specific questions or areas you’d like to explore with us.',
        },
        {
            question: 'Do you offer in-person consultations?',
            answer: 'Yes! We provide both in-person and online consultations (via Zoom/WhatsApp) for your convenience.',
        },
        {
            question: 'How can I pay for my consultation?',
            answer: 'Payment details will be shared upon booking. For any assistance, call us at +91-7300004325 or +91-7300004326. We accept UPI, bank transfers, and other secure payment methods.',
        },
        {
            question: 'What if I need to reschedule my consultation?',
            answer: 'We completely understand—simply inform us at least 24 hours in advance by calling 7300004325 or 7300004326, and we’ll gladly reschedule your session.',
        },
        {
            question: 'Is astrology accurate?',
            answer: 'With decades of expertise and advanced astrological techniques, our consultations maintain over 95% accuracy, as reflected in our clients’ positive feedback.',
        },
        {
            question: 'Can I book a session as a gift for someone else?',
            answer: 'Absolutely! An astrology consultation makes a unique and insightful gift. Just provide the recipient’s birth details during booking, and we’ll tailor the session for them.',
        },
        {
            question: 'How do I know which consultation is right for me?',
            answer: 'If you’re unsure, our team will help you select the best option based on your needs. Contact us at +91-7300004325 or +91-7300004326, and we’ll guide you.',
        },
        {
            question: 'Will I receive a recording of the session?',
            answer: 'Yes! For Zoom consultations, a session recording (audio/video) can be provided upon request for your future reference.',
        },
    ];

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${FAQBg})` }}
        >
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            {(showMore ? faqs : faqs?.slice(0, 4)).map((e) => {
                return <FAQItem question={e.question} answer={e.answer} />;
            })}
            <button
                className={styles.showMoreBtn}
                onClick={() => setShowMore(!showMore)}
            >
                <img src={IcStar} alt={'*'} />
                {showMore ? 'Show Less' : 'Show More'}
                <img src={IcStar} alt={'*'} />
            </button>
        </div>
    );
};

export default FAQSection;
