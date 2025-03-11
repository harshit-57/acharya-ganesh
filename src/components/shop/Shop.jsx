import css from './style.module.css';
import ImgGemstone from '../../assets/Gemstone.webp';
import ImgPanna from '../../assets/Panna.webp';
import ImgMukhi from '../../assets/Mukhi.webp';

export const Shop = () => {
    return (
        <div className={css.recent_container}>
            <h3>Buy Gemstones</h3>
            <div className={css.recent_shop}>
                <img src={ImgGemstone} alt={''} />
                <div>
                    <p>
                        Labradorite 7.1 Ratti
                        <br />
                        <a href={'https://acharyaganesh.shop'}>
                            {' '}
                            acharyaganesh.shop
                        </a>
                    </p>
                    <a
                        className={css.btn_shop}
                        href={
                            'https://acharyaganesh.shop/products/gemstones-2?_pos=1&_sid=d9be6a450&_ss=r'
                        }
                        target={'_blank'}
                    >
                        Buy Now
                    </a>
                </div>
            </div>
            <h3>Buy Panna</h3>
            <div className={css.recent_shop}>
                <img src={ImgPanna} alt={''} />
                <div>
                    <p>
                        Panna 5.72 Ratti
                        <br />
                        <a href={'https://acharyaganesh.shop'}>
                            acharyaganesh.shop
                        </a>
                    </p>
                    <a
                        className={css.btn_shop}
                        href={
                            'https://acharyaganesh.shop/products/panna?_pos=1&_psq=panna&_ss=e&_v=1.0'
                        }
                        target={'_blank'}
                    >
                        Buy Now
                    </a>
                </div>
            </div>
            <h3>Buy Rudraksha</h3>
            <div className={css.recent_shop}>
                <img src={ImgMukhi} alt={''} />
                <div>
                    <p>
                        1 Mukhi Rudraksha
                        <br />
                        <a href={'https://acharyaganesh.shop'}>
                            acharyaganesh.shop
                        </a>
                    </p>
                    <a
                        className={css.btn_shop}
                        href={
                            'https://acharyaganesh.shop/products/1-mukhi-rudraksha'
                        }
                        target={'_blank'}
                    >
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};
