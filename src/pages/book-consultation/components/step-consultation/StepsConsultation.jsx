import styles from './style.module.css';

import Card from './component/card/card';
import Heading from './component/heading/Header';
import { useNavigate } from 'react-router-dom';
import ConsultingstepBg from '../../../../assets/book_consultation_Steps_bg.png';

const steps = [
    {
        step: 1,
        title: 'Choose the service that best suits your needs',
        description:
            'Select the service based on the type of consultation you’re seeking.',
    },
    {
        step: 2,
        title: 'Choose your preferred time slot',
        description: 'Select a time slot that best accommodates your schedule.',
    },
    {
        step: 3,
        title: 'Enter your details to proceed',
        description:
            'Please provide your details so we can tailor the experience specifically to your needs',
    },
    {
        step: 4,
        title: 'Complete the payment to confirm your booking',
        description: 'Make the payment to finalize and confirm your booking.',
    },
    {
        step: 5,
        title: 'Get confirmation once the process is complete',
        description: 'Receive confirmation within 24 hours of booking.',
    },
    {
        step: 6,
        title: 'Get in touch with one of our expert astrologers',
        description:
            'Connect with one of our skilled astrologers for personalized guidance and insights.',
    },
];

const BookingSteps = () => {
    const navigate = useNavigate();

    const handleClick = () => {
       
        window.location.href = 'https://pages.razorpay.com/pl_PfNM4Uhu1DX5XG/view';
    };

    const handleClick2 = () => {
       
        window.location.href = 'https://pages.razorpay.com/pl_PfNU3x751fwMO9/view';
    };
    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${ConsultingstepBg})` }}
        >
            <Heading text="Steps For Booking A Consultation" />
            <div className={styles.grid}>
                {steps.map(({ step, title, description }) => (
                    <Card
                        key={step}
                        step={step}
                        title={title}
                        description={description}
                    />
                ))}
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClick}>
                    MEET IN PERSON
                </button>

                <button className={styles.button} onClick={handleClick2}>
                    MEET ONLINE
                </button>
            </div>
        </div>
    );
};

export default BookingSteps;
