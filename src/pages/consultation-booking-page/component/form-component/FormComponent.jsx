import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.css';
import { APIHelper } from '../../../../util/APIHelper';
import moment from 'moment';
import { formatPrice } from '../../../../util/helper';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Images } from '../../../../util/constants';

const Pricing = {
    online: 17700,
    offline: 12980,
};

const FormCompnent = ({ state }) => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    const [slots, setSlots] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        slot: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        state: '',
        time: '',
        gender: '',
        service: '',
        consultationType: state?.consultType || '',
        price:
            state?.consultType == 'online' ? Pricing.online : Pricing.offline,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await APIHelper.getServices();
                setServices(response?.data?.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchServices();
    }, []);

    useEffect(() => {
        const fetchSlots = async () => {
            try {
                const response = await APIHelper.getSlots({
                    date: formData.date,
                    isAvailable: true,
                });
                setSlots(response?.data?.data);
            } catch (error) {
                console.error('Error fetching slots:', error);
                return [];
            }
        };
        if (formData.date) fetchSlots();
    }, [formData.date]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleValidation = () => {
        let error = false;
        let errors = {};

        if (!formData.date) {
            errors.date = 'Date is required';
            error = true;
        }
        if (!formData.slot) {
            errors.slot = 'Slot is required';
            error = true;
        }
        if (!formData.service) {
            errors.service = 'Service is required';
            error = true;
        }
        if (!formData.name) {
            errors.name = 'Name is required';
            error = true;
        }
        // if (!formData.email) {
        //     errors.email = 'Email is required';
        //     error = true;
        // }
        if (!formData.phone) {
            errors.phone = 'Phone is required';
            error = true;
        }
        // if (!formData.address) {
        //     errors.address = 'Address is required';
        //     error = true;
        // }
        if (!formData.dob) {
            errors.dob = 'Date of Birth is required';
            error = true;
        }
        // if (!formData.state) {
        //     errors.state = 'State is required';
        //     error = true;
        // }
        if (!formData.time) {
            errors.time = 'Time is required';
            error = true;
        }
        // if (!formData.gender) {
        //     errors.gender = 'Gender is required';
        //     error = true;
        // }
        if (!formData.consultationType) {
            errors.consultationType = 'Consultation Type is required';
            error = true;
        }
        if (!formData.price) {
            errors.price = 'Price is required';
            error = true;
        }

        setErrors(errors);
        return error;
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (handleValidation()) return;
            const response = await APIHelper.createBooking(formData);
            // console.log('Response: ', response);

            if (response?.data?.data?.payment) {
                const payment = response?.data?.data?.payment;
                const paymentKey = response?.data?.data?.paymentKey;
                const bookingId = response?.data?.data?.bookingId;

                if (paymentKey) {
                    const options = {
                        key: paymentKey,
                        amount: payment,
                        currency: 'INR',
                        name: 'Acharya Ganesh',
                        description:
                            formData?.consultationType == 'online'
                                ? 'Book Your Zoom Consultation'
                                : 'Book Your Consultation',
                        order_id: payment?.id,
                        handler: async function (rz) {
                            const completePayload = {
                                bookingId: bookingId,
                                paymentId: rz.razorpay_payment_id,
                                orderId: rz.razorpay_order_id,
                                status: '1',
                            };

                            console.log('completePayload', rz);

                            const result = await APIHelper.completeBooking(
                                completePayload
                            );
                            toast.success(result?.data?.data?.message);
                            alert(result?.data?.message || 'Payment Success');
                            navigate('/book-consultation');
                        },
                        modal: {
                            ondismiss: async () => {
                                console.log('Payment Modal Dismissed');
                                const completePayload = {
                                    bookingId: bookingId,
                                    status: '2',
                                };
                                await APIHelper.completeBooking(
                                    completePayload
                                );
                                toast.error('Payment Declined');
                                alert('Payment Declined');
                            },
                        },
                        prefill: {
                            name: formData.name,
                            email: formData.email,
                            contact: formData.phone,
                        },
                        theme: {
                            color: '#3399cc',
                        },
                    };

                    const rzp = new window.Razorpay(options);
                    rzp.open();
                } else {
                    toast.error(response?.data?.message || 'Payment Failed');
                    alert(response?.data?.message || 'Payment Failed');
                }
            } else {
                toast.error(response?.data?.message);
                alert(response?.data?.message || 'Booking Failed');
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || error?.message);
            alert(error?.response?.data?.message || error?.message);
        }
    };

    return (
        <form
            style={{ backgroundImage: `url(${Images.default.ConsultationFormBg})` }}
            className={styles.form_container}
            onSubmit={handleSubmit}
        >
            <div className={styles.formGroup}>
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="">Services</option>
                    {services.map((service) => (
                        <option key={service.Id} value={service.Name}>
                            {service.Name}
                        </option>
                    ))}
                </select>
                {errors.service && (
                    <p className={styles.error}>{errors.service}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <div className={styles.dateContainer}>
                    <input
                        type={'text'}
                        name="date"
                        value={formData.date || ''}
                        onChange={(e) => {
                            setSlots([]);
                            setFormData({
                                ...formData,
                                date: e.target.value,
                                slot: '',
                            });
                            setErrors({ ...errors, date: '' });
                        }}
                        className={styles.bookingDate}
                        placeholder="Booking Date"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) =>
                            !formData.date && (e.target.type = 'text')
                        }
                        min={new Date()?.toISOString().split('T')[0]}
                    />
                    {errors.date && (
                        <p className={styles.error}>{errors.date}</p>
                    )}
                </div>
            </div>
            <div className={styles.formGroup}>
                <select
                    name="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    disabled={!formData.date}
                >
                    <option value="">
                        {!slots?.length && formData?.date
                            ? 'No Slots Available'
                            : 'Booking Slot'}
                    </option>
                    {slots.map((slot) => (
                        <option key={slot.Id} value={slot.Id}>
                            {moment(slot.StartTime, 'hh:mm:ss').format(
                                'hh:mm A'
                            )}{' '}
                            -{' '}
                            {moment(slot.EndTime, 'hh:mm:ss').format('hh:mm A')}
                        </option>
                    ))}
                </select>
                {errors.slot && <p className={styles.error}>{errors.slot}</p>}
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Place of Birth"
                />
                {errors.address && (
                    <p className={styles.error}>{errors.address}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <div className={styles.dateContainer}>
                    <input
                        type="text"
                        name="dob"
                        value={formData.dob}
                        className={styles.dobDate}
                        onChange={handleChange}
                        placeholder="Date of Birth"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) =>
                            !formData.dob && (e.target.type = 'text')
                        }
                    />
                    {errors.dob && <p className={styles.error}>{errors.dob}</p>}
                </div>
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State of Birth Place"
                />
                {errors.state && <p className={styles.error}>{errors.state}</p>}
            </div>
            <div className={styles.formGroup}>
                <input
                    type={'text'}
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="Time of Birth"
                    onFocus={(e) => (e.target.type = 'time')}
                    onBlur={(e) => !formData.time && (e.target.type = 'text')}
                />
                {errors.time && <p className={styles.error}>{errors.time}</p>}
            </div>
            <div className={styles.formGroup}>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && (
                    <p className={styles.error}>{errors.gender}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            consultationType: e.target.value,
                            price:
                                e.target.value == 'online'
                                    ? Pricing.online
                                    : Pricing.offline,
                        });
                    }}
                >
                    <option value="">Consultation Call Type</option>
                    <option value="online">Meet Online</option>
                    <option value="offline">Meet In Person</option>
                </select>
                {errors.consultationType && (
                    <p className={styles.error}>{errors.consultationType}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    disabled
                    value={formatPrice(formData.price)}
                ></input>
                {errors.price && <p className={styles.error}>{errors.price}</p>}
            </div>
            <button type="submit" className={styles.submitButton}>
                <span>PROCEED TO PAY</span>
                <span>{formatPrice(formData.price)}</span>
            </button>
        </form>
    );
};

export default FormCompnent;
