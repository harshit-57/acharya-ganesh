import css from './style.module.css';
import IcChevronIcon from '../../../../assets/chevron-down.png';
import { useMemo, useState } from 'react';
import parse from 'html-react-parser';

export const TableOfContent = ({ article }) => {
    if (!article) return null;
    const getTableContents = useMemo(() => {
        const toc = [];
        parse(article?.Description, {
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

    const [show, setShow] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!getTableContents?.length) return null;

    return (
        <div className={css.container}>
            <h3 onClick={() => setShow(!show)}>
                <img
                    src={IcChevronIcon}
                    style={show ? { transform: 'rotate(0deg)' } : {}}
                    alt={''}
                />
                Table of contents
            </h3>
            {show &&
                getTableContents?.map((item, index) => (
                    <div className={css.content_table_link}>
                        {/* <img src={IcChevronIcon} alt={''} /> */}
                        <a
                            //  href={`#${item?.id}`}
                            onClick={() => handleScroll(item?.id)}
                        >
                            <p>{item?.text}</p>
                        </a>
                    </div>
                ))}
        </div>
    );
};
