import css from './style.module.css';
import IcChevronIcon from '../../../../assets/chevron-down.png';
import { useMemo } from 'react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

export const TableOfContent = ({ article }) => {
    if (!article) return null;
    const getTableContents = useMemo(() => {
        const toc = [];
        parse(article.Description, {
            replace: (node) => {
                if (
                    node.type === 'tag' &&
                    (node.name === 'h1' || node.name === 'h2') &&
                    node.attribs?.id
                ) {
                    toc.push({
                        id: node.attribs.id,
                        text:
                            node.children?.[0]?.data ||
                            node.children?.[0]?.children?.[0]?.data ||
                            node.children?.[0]?.children?.[0]?.children?.[0]
                                ?.data ||
                            '',
                    });
                }
            },
        });

        return toc;
    }, [article]);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={css.container}>
            <h3>Table of contents</h3>
            {getTableContents?.map((item, index) => (
                <div className={css.content_table_link}>
                    <img src={IcChevronIcon} alt={''} />
                    <a
                        //  href={`#${item?.id}`}
                        onClick={() => handleScroll(item?.id)}
                    >
                        <p>{item?.text}</p>
                    </a>
                </div>
            ))}
            {/* <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Introduction to Lakshmi Puja</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>The Significance of Lakshmi Puja</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Preparing for Lakshmi Puja 2025</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>The Rituals of Lakshmi Puja</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Preparing for Lakshmi Puja 2025</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Conclusion</p>
            </div> */}
        </div>
    );
};
