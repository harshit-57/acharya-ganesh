import { useState, useRef, useEffect } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { UPLOADAPIHELPER } from '../../../../util/APIHelper';
import { HorizontalBorder } from '../../../../components/spacer/Spacer';
import styles from './style.module.css';
import { InputField } from '../../../../components/input-field/InputField';

registerPlugin(FilePondPluginImagePreview);

const FilePondSingle = ({
    image,
    setImage,
    type,
    index,
    isAlt,
    alt,
    setAlt,
}) => {
    const imageUpload = useRef(null);
    const [files, setFiles] = useState([]);
    const [initialImageLoaded, setInitialImageLoaded] = useState(false);

    useEffect(() => {
        if (image && typeof image === 'string' && !initialImageLoaded) {
            setFiles([{ source: image, options: { type: 'local' } }]);
            setInitialImageLoaded(true);
        } else if (!image && !initialImageLoaded) {
            setFiles([]);
            setInitialImageLoaded(true);
        }
    }, [image, initialImageLoaded]);

    const handleServerUpload = {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
            const formData = new FormData();
            formData.append('files', file);

            UPLOADAPIHELPER.upload(formData)
                .then((res) => {
                    const urls = res?.data?.urlsArray;
                    if (urls?.length) {
                        setImage(urls[0], index);
                        setFiles([file]);
                        load(urls[0]);
                    } else {
                        error('No URL returned from server');
                    }
                })
                .catch((err) => {
                    console.log('Upload error:', err);
                    error('Upload failed');
                });

            return { abort: () => console.log('Upload aborted') };
        },
        load: (source, load, error, progress, abort) => {
            fetch(source)
                .then((res) => res.blob())
                .then((blob) => load(blob))
                .catch((err) => {
                    console.log('Load error:', err);
                    error('Failed to load image');
                });
        },
        revert: (uniqueFileId, load, error) => {
            setImage(null, index);
            setFiles([]);
            load();
        },
    };

    return (
        <>
            <FilePond
                credits={false}
                files={files}
                ref={imageUpload}
                required={false}
                acceptedFileTypes={['image/*']}
                allowFileEncode
                imagePreviewHeight={
                    type === 'course'
                        ? 420
                        : type === 'blog'
                        ? 200
                        : type === 'spirituality'
                        ? 200
                        : type === 'story'
                        ? 400
                        : type === 'service'
                        ? 200
                        : 'auto'
                }
                allowRemove={true}
                allowReplace={true}
                onupdatefiles={(fileItems) => {
                    if (fileItems.length > 0) {
                        setFiles(fileItems.map((fileItem) => fileItem.file));
                    }
                }}
                onremovefile={(error) => {
                    if (!error) {
                        setImage(null, index);
                        setFiles([]);
                    }
                }}
                server={handleServerUpload}
                allowMultiple={false}
                maxFiles={1}
                name="files"
                labelIdle={`Drag & Drop ${type} image or <span class="filepond--label-action">Browse</span>`}
            />
            {isAlt && image && (
                <div className={styles.alt_wrappper}>
                    <p className={styles.alt_label}>Image Alt Text</p>
                    <InputField
                        className={styles.input}
                        type="text"
                        value={alt}
                        name="alt"
                        onChange={(e) => setAlt(e.target.value)}
                        placeholder="Placeholder Text"
                    />
                </div>
            )}
            <HorizontalBorder height="1px" color="#ddd" />
            {image ? (
                <div
                    className={styles.image_footer}
                    onClick={() => {
                        setImage(null, index);
                        imageUpload.current?.removeFiles();
                    }}
                >
                    <span>Remove {type} Image</span>
                </div>
            ) : (
                <div
                    className={styles.image_footer}
                    onClick={() => {
                        imageUpload.current?.browse();
                    }}
                >
                    <span>Add {type} Image</span>
                </div>
            )}
        </>
    );
};

export default FilePondSingle;
