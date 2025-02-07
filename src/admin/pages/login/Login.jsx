import React, { useState } from 'react';
import { ADMINAPIHELPER } from '../../../util/APIHelper';
import Logo from '../../../assets/brand_logo.png';
import { PageContainer } from '../../../components/page-container/PageContainer';
import css from './style.module.css';
import { useNavigate } from 'react-router-dom';
import BgImage from '../../../assets/solar_system.jpg';
import { PrimaryButton } from '../../../components/primary-button/PrimaryButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleValidation = () => {
        let isError = true;
        if (!email) {
            setEmailError('Email is required');
            isError = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            isError = false;
        } else {
            setEmailError('');
        }
        if (!password) {
            setPasswordError('Password is required');
            isError = false;
        } else {
            setPasswordError('');
        }
        return isError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            setLoading(true);
            try {
                const response = await ADMINAPIHELPER.login({
                    email,
                    password,
                });
                console.log(response.data);
                setLoading(false);
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem(
                        'admin',
                        JSON.stringify(response.data.data)
                    );
                    navigate('/admin/dashboard');
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
    };

    return (
        <PageContainer>
            <div
                className={css.container}
                style={{ backgroundImage: `url(${BgImage})` }}
            >
                <div className={css.row}>
                    <div className={css.column}>
                        <div className={css.card}>
                            <div className={css.cardHeader}>
                                <img className={css.logo} src={Logo} />
                                <h4>Login</h4>
                            </div>
                            <div className={css.cardBody}>
                                <form>
                                    <div className={css.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className={css.input}
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        {emailError && (
                                            <div className={css.error}>
                                                {emailError}
                                            </div>
                                        )}
                                    </div>
                                    <div className={css.formGroup}>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className={css.input}
                                            id="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        {passwordError && (
                                            <div className={css.error}>
                                                {passwordError}
                                            </div>
                                        )}
                                    </div>
                                    <PrimaryButton
                                        className={css.button}
                                        onClick={handleSubmit}
                                    >
                                        {loading ? 'Loading...' : 'Login'}
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default Login;
