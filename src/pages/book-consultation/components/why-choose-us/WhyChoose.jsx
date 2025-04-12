import React from 'react';
import styles from './style.module.css';
import BulbIg from '../../../../assets/lightbulb-05.png';
import VectorIg from '../../../../assets/Vector.png';
import HourGlassIg from '../../../../assets/hourglass-01 (1).png';
import RelationshipIg from '../../../../assets/relationship_guidance.png';
import StressIg from '../../../../assets/Streesreduction.png';
import BalanceTg from '../../../../assets/scales-01.png';

const features = [
    {
        title: 'Personalized Insights',
        description: 'Tailored advice based on your unique birth chart',
    },
    {
        title: 'Clarity & Direction',
        description: 'Make informed decisions in life and career',
    },
    {
        title: 'Timing & Opportunity',
        description: 'Find the right moment for key actions and investments',
    },
    {
        title: 'Relationship Guidance',
        description: 'Improve compatibility and personal connections',
    },
    {
        title: 'Stress Reduction',
        description: 'Gain peace of mind with clearer insights',
    },

    {
        title: 'Life Balance',
        description: 'Align with your true path and purpose',
    },
];

const IconsArr = [
    BulbIg,
    VectorIg,
    HourGlassIg,
    RelationshipIg,
    StressIg,
    BalanceTg,
];

const WhyChooseUs = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Why Choose Us?</h2>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.icon}>
                            <img
                                src={IconsArr[index]}
                                alt={feature.icon || 'feature'}
                            />
                        </span>
                        <div className={styles.card_info}>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
