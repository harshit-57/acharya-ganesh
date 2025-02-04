import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import 'quill/dist/quill.snow.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImagePreview);

const Edit = () => {
    const textInput = `
<div>
  <p><br></p>
  <div style='font-size: 24px; font-weight: 700; padding: 15px;'>
    Introduction to Capricorn in 9th House:
  </div>
  <p><br></p>
  <div style='font-size: 16px; font-weight: 400; margin: 10px'>
    When delving into astrology, it's fascinating to uncover how
    each planetary alignment and house placement can uniquely
    influence an individual's life. One such intriguing
    alignment is the placement of Capricorn in 9th House. This
    combination exudes a blend of practicality and a quest for
    higher knowledge, shaping a person's worldviews and
    philosophies. In this blog post, we'll explore the impact of
    having Capricorn in 9th House of a natal chart, diving into
    its profound implications on learning, spirituality, and
    personal growth. Let's embark on this astrological journey
    to understand what it truly means to have Capricorn in this
    adventurous house.

  </div>
</div>`;
    // const [value, setValue] = useState(abc);
    // const [textInput, updateTextInput] = useState("");

    const [ReactQuill, setReactQuill] = useState(null);
    const [text, updateText] = useState('');
    const [files, setFiles] = useState([]);
    const quillRef = useRef(null);
    const [customSize, setCustomSize] = useState('None');
    const [color, setColor] = useState('#ffffff'); // Default color

    const handleInputChange = (event) => {
        const newColor = event.target.value;
        // Regex to validate hex color code
        // if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(newColor) || newColor === '') {
        setColor(newColor);
        // }
    };

    const insertText = (t) => {
        console.log(quillRef);

        let current = quillRef.current;
        let s = current.getEditorSelection();
        const cursorPosition = s ? s.index : 0;

        if (textInput.length > 0) {
            if (t === 'html') {
                console.log(textInput);

                current.editor.clipboard.dangerouslyPasteHTML(
                    cursorPosition,
                    textInput,
                    'silent'
                );
            } else {
                current.editor.insertText(cursorPosition, textInput);
            }
            current.editor.setSelection(cursorPosition + 1);
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image', 'code-block'],
            ['clean'],
            [
                {
                    imageResize: {
                        modules: ['Resize', 'DisplaySize', 'Toolbar'],
                    },
                },
            ],
        ],
    };

    useEffect(() => {
        console.log('yha');

        import('react-quill')
            .then((module) => {
                setReactQuill(() => module.default);
            })
            .catch((error) => console.error('Quill import failed:', error));
    }, []);

    useEffect(() => {
        console.log('yha');

        setTimeout(() => {
            insertText('html');
        }, 0);
    });

    if (!ReactQuill) return <p>Loading editor...</p>;

    return (
        <div className={styles.container}>
            <div className={styles.left_content}>
                <div className={styles.title}>
                    Understanding Capricorn in 9th House: A Comprehensive Guide
                </div>
                <div className={styles.permalink}>
                    <label>Permalink:</label>
                    <input
                        type="text"
                        value="https://acharyaganesh.com/house/capricorn-in-9th-house"
                        readOnly
                    />
                    <span className={styles.edit_icon}>
                        <i className="fas fa-edit"></i>
                    </span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.save_drafts}>Save Drafts</button>
                    <button className={styles.preview_changes}>
                        Preview Changes
                    </button>
                </div>
                <div className={styles.content_container}>
                    <div className={styles.buttons}>
                        <button className={styles.form_buttons}>
                            Add Media
                        </button>
                        <button className={styles.form_buttons}>
                            Add Form
                        </button>
                        <button className={styles.form_buttons}>
                            Add Contact Form
                        </button>
                    </div>
                    <ReactQuill
                        ref={quillRef}
                        theme="snow"
                        modules={modules}
                        value={text}
                    />
                </div>
                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>Additional Settings</span>
                    </div>
                    <div className={styles.pond_width}>
                        <p className={styles.margins}>Images</p>
                        <div>
                            <FilePond
                                files={files}
                                onupdatefiles={(fileItems) =>
                                    setFiles(fileItems.map((item) => item.file))
                                }
                                allowMultiple={true}
                                maxFiles={1}
                                name="files"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                            />
                        </div>
                        <p className={styles.margins}>Custom Link</p>
                        <div className={styles.permalink}>
                            <input type="text" value="" />
                            <span className={styles.edit_icon}>
                                <i className="fas fa-edit"></i>
                            </span>
                        </div>

                        <p className={styles.margins}>Icon</p>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <select
                                    style={{
                                        borderRadius: 'calc(infinity * 1px)',
                                        padding: '16px 20px',
                                    }}
                                >
                                    <option>Font Awesome Solid</option>
                                </select>
                            </div>
                            <div
                                className={styles.permalink}
                                style={{ margin: '0px' }}
                            >
                                <input
                                    type="text"
                                    value="https://acharyaganesh.com/house/capricorn-in-9th-house"
                                    readOnly
                                />
                            </div>
                        </div>
                        <p className={styles.margins}>Custom Size</p>

                        <div>
                            {['None', '2x1', '1x2', '2x2'].map((size) => (
                                <button
                                    key={size}
                                    className={
                                        styles.custom_size_button +
                                        ' ' +
                                        (customSize === size
                                            ? styles.active
                                            : '')
                                    }
                                    onClick={() => setCustomSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <input
                            type="text"
                            value={color}
                            onChange={handleInputChange}
                            placeholder="#000000"
                            className={styles.input_box}
                        />
                        <div
                            className={styles.color_box}
                            style={{ backgroundColor: color }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
