import React, { useState, useRef } from 'react';
import styles from './style.module.css';
import ConsultationFormBg from '../../../../assets/book_consultatio_form.png';

const FormCompnent = () => {
  const [formData, setFormData] = useState({
    dateAndTime: '',
    name: '',
    email: '',
    phoneNo: '',
    placeOfBirth: '',
    dateOfBirth: '',
    stateOfBirthPlace: '',
    timeOfBirth: '',
    gender: '',
    services: '',
    consultationCallType: ''
  });

  const dateTimeRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const handleFocus = () => {
    if (dateTimeRef.current) {
      dateTimeRef.current.style.display = 'none';
    }
  };

  const handleBlur = () => {
    if (dateTimeRef.current && !formData.dateAndTime) {
      dateTimeRef.current.style.display = 'block';
    }
  };

  return (
    <form style={{ backgroundImage: `url(${ConsultationFormBg})` }} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <select
          name="services"
          value={formData.services}
          onChange={handleChange}
        >
          <option value="">Services</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.dateTimeContainer}>
          <input
            type="datetime-local"
            name="dateAndTime"
            value={formData.dateAndTime}
            onChange={handleChange}

            className={styles.dateTimeInput}
          />
         
        </div>
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="tel"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          placeholder="Phone No"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
          placeholder="Place of Birth"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of Birth"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="stateOfBirthPlace"
          value={formData.stateOfBirthPlace}
          onChange={handleChange}
          placeholder="State of Birth Place"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="time"
          name="timeOfBirth"
          value={formData.timeOfBirth}
          onChange={handleChange}
          placeholder="Time of Birth"
        />
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
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="consultationCallType"
          value={formData.consultationCallType}
          onChange={handleChange}
          placeholder="Consultation Call Type/Phone Call"
        />
      </div>
      <div className={styles.formGroup}>
      <input type="text" disabled placeholder="12,980"></input>
      </div>
      <button type="submit" className={styles.submitButton}>
         <span>PROCEED TO PAY</span>
         <span>₹&nbsp;12,980</span>
        </button>
    </form>
  );
};

export default FormCompnent;