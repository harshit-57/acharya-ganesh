import { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import { Typography } from '@mui/material';

const formats = [
    'header',
    'font',
    'size',
    'color',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'code-block',
    'align',
];

const Editor = ({ placeholder, content, setContent, style, className }) => {
    const [ReactQuill, setReactQuill] = useState(null);
    const [modules, setModules] = useState({
        toolbar: [
            [{ header: [false, 1, 2, 3, 4, 5, 6] }, { font: [] }],
            // [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            [
                {
                    color: [],
                },
                // { background: [] },
            ],
            ['link', 'image', 'video', 'code-block'],
            [{ align: [] }],
            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('react-quill')
                .then((module) => {
                    // const Quill = module.Quill || window.Quill;
                    // if (!window.Quill) window.Quill = Quill;

                    // import('quill-image-resize-module-react')
                    //     .then((ImageResize) => {
                    //         Quill.register(
                    //             'modules/imageResize',
                    //             ImageResize.default
                    //         );
                    //         setModules((prev) => ({
                    //             ...prev,
                    //             imageResize: {
                    //                 parchment: Quill.import('parchment'),
                    //                 modules: ['Resize', 'DisplaySize'],
                    //             },
                    //         }));
                    //     })
                    //     .catch((err) =>
                    //         console.error('Failed to load ImageResize:', err)
                    //     );

                    // import('@xeger/quill-image-actions')
                    //     .then((ImageActions) => {
                    //         Quill.register(
                    //             'modules/imageActions',
                    //             ImageActions.default
                    //         );
                    //         setModules((prev) => ({
                    //             ...prev,
                    //             imageActions: {
                    //                 modules: ['Resize', 'DisplaySize'],
                    //             },
                    //         }));
                    //     })
                    //     .catch((err) =>
                    //         console.error('Failed to load ImageActions:', err)
                    //     );

                    // import('@xeger/quill-image-formats')
                    //     .then((ImageFormats) => {
                    //         Quill.register(
                    //             'modules/imageFormats',
                    //             ImageFormats.default
                    //         );
                    //         setModules((prev) => ({
                    //             ...prev,
                    //             imageFormats: {
                    //                 modules: ['Resize', 'DisplaySize'],
                    //             },
                    //         }));
                    //     })
                    //     .catch((err) =>
                    //         console.error('Failed to load ImageFormats:', err)
                    //     );

                    setReactQuill(() => module.default);
                })
                .catch((err) =>
                    console.error('Failed to load React Quill:', err)
                );
        }
    }, []);
    const handleChange = (html) => {
        // const scrollPosition = window.scrollY; // Save current scroll position
        setContent && setContent(html);
        // setTimeout(() => {
        //     window.scrollTo(0, scrollPosition); // Restore scroll position
        // }, 0);
    };

    if (!ReactQuill)
        return (
            <Typography
                variant="div"
                component="div"
                className={`editor ${className || ''}`}
                style={{
                    padding: '1rem',
                }}
            >
                Loading editor...
            </Typography>
        );

    return (
        <ReactQuill
            style={style || {}}
            className={`html-content editor ${className || ''}`}
            theme="snow"
            onChange={handleChange}
            value={content || ''}
            modules={modules}
            formats={formats}
            bounds={'#root'}
            placeholder={placeholder || 'Write your content here...'}
        />
    );
};

export default Editor;
