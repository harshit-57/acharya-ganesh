import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import ToggleSwitch from '../../components/toggle/ToggleSwitch';
import { InputField } from '../../components/input-field/InputField';
import CheckboxComponent from '../../components/checkbox/Checkbox';

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
        When delving into astrology, it's fascinating to uncover how each planetary alignment and house placement can uniquely influence an individual's life...
      </div>
    </div>`;

    const [ReactQuill, setReactQuill] = useState(null);
    const [text, updateText] = useState('');
    const [files, setFiles] = useState([]);
    const quillRef = useRef(null);
    const [customSize, setCustomSize] = useState('None');
    const [color, setColor] = useState('#ffffff'); // Default color
    const [bgColor, setBgColor] = useState('#000');
    const [textColor, setTextColor] = useState('#000');
    const [customLink, setCustomLink] = useState('');
    const [iconName, setIconName] = useState('');
    const [isTableContent, setIsTableContent] = useState(false);
    const handleBgColor = (event) => {
        const newColor = event.target.value;
        setBgColor(newColor);
    };
    const handleTextColor = (event) => {
        const newColor = event.target.value;
        setTextColor(newColor);
    };
    const insertText = () => {
        if (quillRef.current) {
            const editor = quillRef.current.getEditor();
            const cursorPosition = editor.getSelection()?.index || 0;
            editor.clipboard.dangerouslyPasteHTML(cursorPosition, textInput);
            editor.setSelection(cursorPosition + textInput.length);
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
        ],
    };

    useEffect(() => {
        import('react-quill')
            .then((module) => setReactQuill(() => module.default))
            .catch((error) => console.error('Quill import failed:', error));
    }, []);

    useEffect(() => {
        if (ReactQuill) {
            insertText();
        }
    }, [ReactQuill]);

    if (!ReactQuill) return <p>Loading editor...</p>;

    return (
        <div className={styles.container}>
            <div className={styles.left_content}>
                <div className={styles.title}>
                    Understanding Capricorn in 9th House: A Comprehensive Guide
                </div>
                <div className={styles.permalink}>
                    <label>Permalink:</label>
                    <InputField
                        style={{
                            background: '#fff',
                            color: '#000',
                        }}
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
                        onChange={updateText}
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
                            <input
                                type="text"
                                value={customLink}
                                onChange={(e) => setCustomLink(e.target.value)}
                                placeholder="Transparent"
                            />
                            <span className={styles.edit_icon}>
                                <i className="fas fa-edit"></i>
                            </span>
                        </div>

                        <p className={styles.margins}>Icon</p>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div style={{ width: '49%' }}>
                                    <select
                                        style={{
                                            borderRadius: '9999px', // Fully rounded
                                            padding: '15px 16px', // Inner padding
                                            border: '1px solid #ccc', // Light border
                                            fontSize: '16px', // Font size to match the image
                                            appearance: 'none', // Remove default arrow
                                            background: 'white', // White background
                                            fontFamily: 'inherit', // Match the font style
                                            outline: 'none', // Remove focus outline
                                            width: '100%', // Full width if required
                                        }}
                                    >
                                        <option>Font Awesome Solid</option>
                                    </select>
                                </div>
                                <div
                                    // className={styles.permalink}
                                    style={{ width: '49%' }}
                                >
                                    <InputField
                                        style={{
                                            background: '#fff',
                                            color: '#000',
                                        }}
                                        type="text"
                                        value={iconName}
                                        placeholder="Enter Icon name"
                                        onChange={(e) =>
                                            setIconName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <span
                                    className={styles.icon_name_info_container}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="#2C2520"
                                            stroke-opacity="0.7"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className={styles.icon_name_info}>
                                        Enter icon name from the list.
                                    </span>
                                    <span
                                        className={
                                            styles.icon_name_info_example
                                        }
                                    >
                                        Examples: <u>star</u>, <u>edit</u>,{' '}
                                        <u>code</u>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <p className={styles.margins}>Custom Size</p>
                        <div className={styles.costomize_container}>
                            {['None', '2x1', '1x2', '2x2'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setCustomSize(size)}
                                    style={{
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '12px',
                                        backgroundColor:
                                            customSize === size
                                                ? 'white'
                                                : 'transparent',
                                        boxShadow:
                                            customSize === size
                                                ? '0 2px 6px rgba(0, 0, 0, 0.1)'
                                                : 'none',
                                        fontWeight:
                                            customSize === size
                                                ? 'bold'
                                                : 'normal',
                                        color:
                                            customSize === size
                                                ? '#000'
                                                : '#AAA',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        width: '100%',
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '16px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                }}
                            >
                                Background Color
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                // border: '1px solid #DADADA',
                                borderRadius: '12px',
                                padding: '8px 12px',
                                width: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '50px',
                                    borderRadius: '8px',
                                    backgroundColor: bgColor || 'transparent',
                                    border: bgColor
                                        ? 'none'
                                        : '1px dashed #ccc',
                                }}
                            ></div>

                            <input
                                type="text"
                                value={bgColor}
                                onChange={handleBgColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '16px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                }}
                            >
                                Text Color
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                // border: '1px solid #DADADA',
                                borderRadius: '12px',
                                padding: '8px 12px',
                                width: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '50px',
                                    borderRadius: '8px',
                                    backgroundColor: textColor || 'transparent',
                                    border: textColor
                                        ? 'none'
                                        : '1px dashed #ccc',
                                }}
                            ></div>

                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>Yoast SEO</span>
                    </div>
                    <div className={styles.pond_width}>
                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Focus Keyphrases
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginLeft: '10px' }}
                                >
                                    <path
                                        d="M6.672 6.6C6.86008 6.06533 7.23132 5.61449 7.71996 5.32731C8.20861 5.04013 8.78312 4.93515 9.34174 5.03097C9.90037 5.12679 10.4071 5.41722 10.7721 5.85082C11.1371 6.28443 11.3368 6.83322 11.336 7.4C11.336 9 8.936 9.8 8.936 9.8M9 13H9.008M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                                        stroke="#23201D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                            <div className={styles.button_group}>
                                <button className={styles.action_button}>
                                    Use AI
                                </button>
                                <button className={styles.action_button}>
                                    Insert Variable
                                </button>
                            </div>
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>SEO Title</p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                            <div className={styles.button_group}>
                                <button className={styles.action_button}>
                                    Use AI
                                </button>
                                <button className={styles.action_button}>
                                    Insert Variable
                                </button>
                            </div>
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>Slug</p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>Meta Description</p>
                            <textarea
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '10px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                                rows={5}
                            />
                            <div className={styles.button_group}>
                                <button className={styles.action_button}>
                                    Use AI
                                </button>
                                <button className={styles.action_button}>
                                    Insert Variable
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>SEO Meta Tags</span>
                    </div>
                    <div className={styles.pond_width}>
                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Page Title
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />

                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className={styles.icon_name_info_example}>
                                    Leave blank to use the default.
                                </span>
                            </span>
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>Description</p>
                            <textarea
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '10px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                                rows={5}
                            />
                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className={styles.icon_name_info}>
                                    Learn More
                                </span>
                            </span>
                        </div>

                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Robots
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />

                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className={styles.icon_name_info_example}>
                                    Examples: <u>noIndex</u>, <u>noFollow</u>,{' '}
                                    <u>none</u>
                                </span>
                                <span className={styles.icon_name_info}>
                                    Learn More
                                </span>
                            </span>
                        </div>

                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Schema.org Type
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />

                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span className={styles.icon_name_info_example}>
                                    Leave blank to use the default.
                                </span>
                                <span className={styles.icon_name_info_example}>
                                    Examples: <u>FAQPage</u>, <u>QAPage</u>,{' '}
                                    <u>Person</u>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>Disable TOP Table Of Contents</span>
                    </div>
                    <div className={styles.pond_width}>
                        <div className={styles.focus_title_container}>
                            <div style={{ marginTop: '10px' }}>
                                <ToggleSwitch
                                    label="Disable"
                                    isChecked={isTableContent}
                                    onToggle={() =>
                                        setIsTableContent(!isTableContent)
                                    }
                                    onColor="#4CAF50"
                                    offColor="#F3F3F3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.left_content}>
                <div className={styles.content_container}>
                    <div>
                        <div className={styles.additional_header}>
                            <span>Publish</span>
                        </div>

                        <div>
                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.75 3.23578V6.85C13.75 7.34005 13.75 7.58507 13.8454 7.77224C13.9293 7.93688 14.0631 8.07074 14.2278 8.15463C14.4149 8.25 14.66 8.25 15.15 8.25H18.7642M19 9.9897V16.3C19 17.7701 19 18.5052 18.7139 19.0667C18.4622 19.5606 18.0607 19.9622 17.5667 20.2139C17.0052 20.5 16.2701 20.5 14.8 20.5H9.2C7.72986 20.5 6.99479 20.5 6.43327 20.2139C5.93935 19.9622 5.53778 19.5606 5.28611 19.0667C5 18.5052 5 17.7701 5 16.3V7.2C5 5.72986 5 4.99479 5.28611 4.43327C5.53778 3.93935 5.93935 3.53778 6.43327 3.28611C6.99479 3 7.72986 3 9.2 3H12.0103C12.6524 3 12.9734 3 13.2755 3.07253C13.5433 3.13683 13.7994 3.24289 14.0342 3.38682C14.2992 3.54915 14.5262 3.77615 14.9802 4.23015L17.7698 7.01985C18.2238 7.47385 18.4508 7.70085 18.6132 7.96575C18.7571 8.20062 18.8632 8.45667 18.9275 8.72452C19 9.02662 19 9.34765 19 9.9897Z"
                                            stroke="#23201D"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span>Status :</span>
                                    <span className={styles.boldValue}>
                                        Published
                                    </span>
                                </div>
                                <span className={styles.publish_cell_edit}>
                                    Edit
                                </span>
                            </div>

                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.24124 13.0518C3.11674 12.8546 3.05448 12.756 3.01963 12.604C2.99346 12.4898 2.99346 12.3097 3.01963 12.1955C3.05448 12.0434 3.11674 11.9449 3.24124 11.7477C4.27015 10.1185 7.33276 6 12 6C16.6672 6 19.7299 10.1185 20.7588 11.7477C20.8833 11.9449 20.9455 12.0434 20.9804 12.1955C21.0065 12.3097 21.0065 12.4898 20.9804 12.604C20.9455 12.756 20.8833 12.8546 20.7588 13.0518C19.7299 14.6809 16.6672 18.7995 12 18.7995C7.33276 18.7995 4.27015 14.6809 3.24124 13.0518Z"
                                            stroke="#23201D"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 15.1425C13.5148 15.1425 14.7427 13.9145 14.7427 12.3997C14.7427 10.885 13.5148 9.65699 12 9.65699C10.4852 9.65699 9.25726 10.885 9.25726 12.3997C9.25726 13.9145 10.4852 15.1425 12 15.1425Z"
                                            stroke="#23201D"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <span>Visibility :</span>
                                    <span className={styles.boldValue}>
                                        Public
                                    </span>
                                </div>
                                <span className={styles.publish_cell_edit}>
                                    Edit
                                </span>
                            </div>

                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20 10.1111H4M15.5556 3V6.55556M8.44444 3V6.55556M8.26667 20.7778H15.7333C17.2268 20.7778 17.9735 20.7778 18.544 20.4871C19.0457 20.2315 19.4537 19.8235 19.7094 19.3218C20 18.7513 20 18.0046 20 16.5111V9.04445C20 7.55097 20 6.80423 19.7094 6.2338C19.4537 5.73204 19.0457 5.32409 18.544 5.06843C17.9735 4.77778 17.2268 4.77778 15.7333 4.77778H8.26667C6.77319 4.77778 6.02646 4.77778 5.45603 5.06843C4.95426 5.32409 4.54631 5.73204 4.29065 6.2338C4 6.80423 4 7.55097 4 9.04444V16.5111C4 18.0046 4 18.7513 4.29065 19.3218C4.54631 19.8235 4.95426 20.2315 5.45603 20.4871C6.02646 20.7778 6.77319 20.7778 8.26667 20.7778Z"
                                            stroke="#23201D"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <span>Published On :</span>
                                    <span className={styles.boldValue}>
                                        Jan 22, 2025 at 09:46
                                    </span>
                                </div>
                                <span className={styles.publish_cell_edit}>
                                    Edit
                                </span>
                            </div>

                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3 13.9469L11.678 18.2859C11.7961 18.3449 11.8551 18.3744 11.917 18.3861C11.9719 18.3963 12.0281 18.3963 12.083 18.3861C12.1449 18.3744 12.2039 18.3449 12.322 18.2859L21 13.9469M3 9.44688L11.678 5.10788C11.7961 5.04885 11.8551 5.01933 11.917 5.00772C11.9719 4.99743 12.0281 4.99743 12.083 5.00772C12.1449 5.01933 12.2039 5.04885 12.322 5.10788L21 9.44688L12.322 13.7859C12.2039 13.8449 12.1449 13.8744 12.083 13.8861C12.0281 13.8963 11.9719 13.8963 11.917 13.8861C11.8551 13.8744 11.7961 13.8449 11.678 13.7859L3 9.44688Z"
                                            stroke="#23201D"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <span>Template :</span>
                                    <span className={styles.boldValue}>
                                        Default
                                    </span>
                                </div>
                                <span className={styles.publish_cell_edit}>
                                    Edit
                                </span>
                            </div>

                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <CheckboxComponent
                                        checked={true}
                                        label={''}
                                        onChange={() => {}}
                                    />

                                    <span>SEO Analysis :</span>
                                    <span className={styles.boldValue}>
                                        Good
                                    </span>
                                </div>
                            </div>

                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <CheckboxComponent
                                        checked={true}
                                        label={''}
                                        onChange={() => {}}
                                    />

                                    <span>Readability Analysis :</span>
                                    <span className={styles.boldValue}>
                                        Good
                                    </span>
                                </div>
                            </div>

                            <div className={styles.publish_cell_container}>
                                <div className={styles.publish_cell}>
                                    <CheckboxComponent
                                        checked={true}
                                        label={''}
                                        onChange={() => {}}
                                    />

                                    <span>Inclusive Language :</span>
                                    <span className={styles.boldValue}>
                                        Good
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                            className={styles.buttons}
                        >
                            <button className={styles.action_button}>
                                Save Drafts
                            </button>
                            <button className={styles.preview_changes}>
                                Preview Changes
                            </button>
                        </div>
                    </div>
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
                            <input
                                type="text"
                                value={customLink}
                                onChange={(e) => setCustomLink(e.target.value)}
                                placeholder="Transparent"
                            />
                            <span className={styles.edit_icon}>
                                <i className="fas fa-edit"></i>
                            </span>
                        </div>

                        <p className={styles.margins}>Icon</p>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div style={{ width: '49%' }}>
                                    <select
                                        style={{
                                            borderRadius: '9999px', // Fully rounded
                                            padding: '15px 16px', // Inner padding
                                            border: '1px solid #ccc', // Light border
                                            fontSize: '16px', // Font size to match the image
                                            appearance: 'none', // Remove default arrow
                                            background: 'white', // White background
                                            fontFamily: 'inherit', // Match the font style
                                            outline: 'none', // Remove focus outline
                                            width: '100%', // Full width if required
                                        }}
                                    >
                                        <option>Font Awesome Solid</option>
                                    </select>
                                </div>
                                <div
                                    // className={styles.permalink}
                                    style={{ width: '49%' }}
                                >
                                    <InputField
                                        style={{
                                            background: '#fff',
                                            color: '#000',
                                        }}
                                        type="text"
                                        value={iconName}
                                        placeholder="Enter Icon name"
                                        onChange={(e) =>
                                            setIconName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <span
                                    className={styles.icon_name_info_container}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="#2C2520"
                                            stroke-opacity="0.7"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className={styles.icon_name_info}>
                                        Enter icon name from the list.
                                    </span>
                                    <span
                                        className={
                                            styles.icon_name_info_example
                                        }
                                    >
                                        Examples: <u>star</u>, <u>edit</u>,{' '}
                                        <u>code</u>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <p className={styles.margins}>Custom Size</p>
                        <div className={styles.costomize_container}>
                            {['None', '2x1', '1x2', '2x2'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setCustomSize(size)}
                                    style={{
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '12px',
                                        backgroundColor:
                                            customSize === size
                                                ? 'white'
                                                : 'transparent',
                                        boxShadow:
                                            customSize === size
                                                ? '0 2px 6px rgba(0, 0, 0, 0.1)'
                                                : 'none',
                                        fontWeight:
                                            customSize === size
                                                ? 'bold'
                                                : 'normal',
                                        color:
                                            customSize === size
                                                ? '#000'
                                                : '#AAA',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        width: '100%',
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '16px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                }}
                            >
                                Background Color
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                // border: '1px solid #DADADA',
                                borderRadius: '12px',
                                padding: '8px 12px',
                                width: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '50px',
                                    borderRadius: '8px',
                                    backgroundColor: bgColor || 'transparent',
                                    border: bgColor
                                        ? 'none'
                                        : '1px dashed #ccc',
                                }}
                            ></div>

                            <input
                                type="text"
                                value={bgColor}
                                onChange={handleBgColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '16px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                }}
                            >
                                Text Color
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                // border: '1px solid #DADADA',
                                borderRadius: '12px',
                                padding: '8px 12px',
                                width: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '50px',
                                    borderRadius: '8px',
                                    backgroundColor: textColor || 'transparent',
                                    border: textColor
                                        ? 'none'
                                        : '1px dashed #ccc',
                                }}
                            ></div>

                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>Yoast SEO</span>
                    </div>
                    <div className={styles.pond_width}>
                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Focus Keyphrases
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginLeft: '10px' }}
                                >
                                    <path
                                        d="M6.672 6.6C6.86008 6.06533 7.23132 5.61449 7.71996 5.32731C8.20861 5.04013 8.78312 4.93515 9.34174 5.03097C9.90037 5.12679 10.4071 5.41722 10.7721 5.85082C11.1371 6.28443 11.3368 6.83322 11.336 7.4C11.336 9 8.936 9.8 8.936 9.8M9 13H9.008M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                                        stroke="#23201D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                            <div className={styles.button_group}>
                                <button className={styles.action_button}>
                                    Use AI
                                </button>
                                <button className={styles.action_button}>
                                    Insert Variable
                                </button>
                            </div>
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>SEO Title</p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                            <div className={styles.button_group}>
                                <button className={styles.action_button}>
                                    Use AI
                                </button>
                                <button className={styles.action_button}>
                                    Insert Variable
                                </button>
                            </div>
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>Slug</p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>Meta Description</p>
                            <textarea
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '10px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                                rows={5}
                            />
                            <div className={styles.button_group}>
                                <button className={styles.action_button}>
                                    Use AI
                                </button>
                                <button className={styles.action_button}>
                                    Insert Variable
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>SEO Meta Tags</span>
                    </div>
                    <div className={styles.pond_width}>
                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Page Title
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />

                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className={styles.icon_name_info_example}>
                                    Leave blank to use the default.
                                </span>
                            </span>
                        </div>

                        <div className={styles.seo_title_container}>
                            <p className={styles.margins}>Description</p>
                            <textarea
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '10px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                                rows={5}
                            />
                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className={styles.icon_name_info}>
                                    Learn More
                                </span>
                            </span>
                        </div>

                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Robots
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />

                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className={styles.icon_name_info_example}>
                                    Examples: <u>noIndex</u>, <u>noFollow</u>,{' '}
                                    <u>none</u>
                                </span>
                                <span className={styles.icon_name_info}>
                                    Learn More
                                </span>
                            </span>
                        </div>

                        <div className={styles.focus_title_container}>
                            <p
                                className={styles.margins}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Schema.org Type
                            </p>
                            <input
                                type="text"
                                value={textColor}
                                onChange={handleTextColor}
                                placeholder="Transparent"
                                style={{
                                    borderRadius: '9999px', // Fully rounded
                                    padding: '15px 16px', // Inner padding
                                    border: '1px solid #ccc', // Light border
                                    fontSize: '16px', // Font size to match the image
                                    appearance: 'none', // Remove default arrow
                                    background: 'white', // White background
                                    fontFamily: 'inherit', // Match the font style
                                    outline: 'none', // Remove focus outline
                                    width: '100%', // Full width if required
                                }}
                            />

                            <span className={styles.icon_name_info_container}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="#2C2520"
                                        stroke-opacity="0.7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span className={styles.icon_name_info_example}>
                                    Leave blank to use the default.
                                </span>
                                <span className={styles.icon_name_info_example}>
                                    Examples: <u>FAQPage</u>, <u>QAPage</u>,{' '}
                                    <u>Person</u>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.additional_header}>
                        <span>Disable TOP Table Of Contents</span>
                    </div>
                    <div className={styles.pond_width}>
                        <div className={styles.focus_title_container}>
                            <div style={{ marginTop: '10px' }}>
                                <ToggleSwitch
                                    label="Disable"
                                    isChecked={isTableContent}
                                    onToggle={() =>
                                        setIsTableContent(!isTableContent)
                                    }
                                    onColor="#4CAF50"
                                    offColor="#F3F3F3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatusRow = ({ icon, label, value, editable }) => (
    <div className={styles.status_row}>
        <div className="flex">
            <span>{icon}</span>
            <span className={styles.label}>{label}:</span>
            <span className={styles.value}>{value}</span>
        </div>
        {editable && <button>Edit</button>}
    </div>
);

const CheckboxRow = ({ label, status }) => (
    <div className={styles.checkbox_row}>
        <input type="checkbox" checked={status} readOnly />
        <span>
            {label}:{' '}
            <span className={styles.status}>
                {status ? 'Good' : 'Needs Improvement'}
            </span>
        </span>
    </div>
);

const ActionButton = ({ label, type }) => (
    <button
        className={`action-button ${
            type === 'primary' ? 'primary' : 'secondary'
        }`}
    >
        {label}
    </button>
);
export default Edit;
