import css from './style.module.css';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import { InputField } from '../../components/input-field/InputField';
import { useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
import { Images } from '../../util/constants';
const MainContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [errorData, setErrorData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrorData({ ...errorData, [name]: '' });
        setFormData({ ...formData, [name]: value });
    };

    const handleValidation = () => {
        let error = false;
        const errors = {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        };

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            error = true;
        }
        // if (!formData.email.trim()) {
        //     errors.email = 'Email is required';
        //     error = true;
        // } else
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            error = true;
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
            error = true;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number is invalid';
            error = true;
        }
        // if (!formData.service.trim()) {
        //     errors.service = 'Service is required';
        //     error = true;
        // }
        // if (!formData.message.trim()) {
        //     errors.message = 'Message is required';
        //     error = true;
        // }
        setErrorData(errors);
        return error;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!handleValidation()) {
            try {
                const response = await APIHelper.createLead({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                });
                if (response?.data?.success) {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                    setErrorData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                    alert('Form submitted successfully!');
                } else {
                    alert('Error submitting form. Please try again later.');
                }
            } catch (error) {
                console.error('Error submitting in form:', error);
            }
        }
        setIsLoading(false);
    };

    return (
        <div className={css.column}>
            <div
                style={{
                    backgroundImage: `url(${Images.default.ImgContactFormBg})`,
                }}
                className={css.contact_form}
            >
                <div className={css.input_wrapper}>
                    <InputField
                        value={formData.name}
                        className={css.input}
                        placeholder={'Name'}
                        type={'text'}
                        name={'name'}
                        onChange={handleChange}
                        error={errorData.name}
                    />
                    <InputField
                        value={formData.email}
                        className={css.input}
                        placeholder={'Email'}
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        error={errorData.email}
                    />
                </div>
                <div className={css.input_wrapper}>
                    <InputField
                        value={formData.phone}
                        className={css.input}
                        placeholder={'Phone No'}
                        type={'text'}
                        name={'phone'}
                        onChange={handleChange}
                        error={errorData.phone}
                        maxLength={10}
                    />
                    {/* <InputField
                                    className={css.input}
                                    placeholder={'services'}
                                /> */}
                    <div className={css.input_container}>
                        <select
                            className={css.select}
                            name={'service'}
                            value={formData.service}
                            onChange={handleChange}
                            style={
                                formData.service
                                    ? {}
                                    : {
                                          color: '#b5afa8',
                                      }
                            }
                        >
                            <option value={''}>Select Service</option>
                            <option value="Astrology">Astrology</option>
                            <option value="Vastu">Vastu</option>
                            <option value="Astro-Vastu">Astro-Vastu</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Courses">Courses</option>
                            <option value="Other">Other</option>
                        </select>
                        {errorData.service && (
                            <p className={css.error}>{errorData.service}</p>
                        )}
                    </div>
                </div>
                <div className={css.input_wrapper}>
                    <div className={css.input_container}>
                        <textarea
                            name={'message'}
                            placeholder={'Please Write Any Note Here...'}
                            onChange={handleChange}
                        ></textarea>
                        {errorData.message && (
                            <p className={css.error}>{errorData.message}</p>
                        )}
                    </div>
                </div>
                <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default MainContactForm;
