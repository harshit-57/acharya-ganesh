import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Icon, styled } from '@mui/material';
import { InputField } from '../../../../components/input-field/InputField';
import { ADMINAPIHELPER } from '../../../../util/APIHelper';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

export default function AdminModal(props) {
    const token = localStorage.getItem('accessToken');
    const { modal, toggle, selectedData, setSelectedData, fetchAdmins } = props;
    const { permission } = useAuth();

    const ModalDialog = React.useMemo(
        () =>
            styled(Dialog)(({ theme }) => ({
                '& .MuiDialogContent-root': {
                    padding: theme.spacing(2),
                },
                '& .MuiDialogActions-root': {
                    padding: theme.spacing(2),
                },
            })),
        []
    );

    const ModalTitle = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <Icon
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: 16,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        close
                    </Icon>
                ) : null}
            </DialogTitle>
        );
    };

    const [formData, setFormData] = React.useState({
        id: selectedData ? selectedData.id : undefined,
        name: selectedData ? selectedData.Name : '',
        email: selectedData ? selectedData.Email : '',
        password: '',
        role_id: selectedData ? selectedData.RoleId : '',
    });
    const [errors, setErrors] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);
    const [roles, setRoles] = React.useState([]);

    React.useEffect(() => {
        const fetchRoles = async () => {
            const response = await ADMINAPIHELPER.getRoles({}, token);
            setRoles(response.data?.data || []);
        };
        fetchRoles();
    }, []);

    const handleChangeData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleValidation = () => {
        let error = false;
        let err = errors;
        if (!formData.name) {
            err = { ...err, name: 'Name is required' };
            error = true;
        }
        if (!formData.email) {
            err = { ...err, email: 'Email is required' };
            error = true;
        }
        if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                formData.email
            )
        ) {
            err = { ...err, email: 'Email is invalid' };
            error = true;
        }
        if (!formData?.id && !formData.password) {
            err = { ...err, password: 'Password is required' };
            error = true;
        }
        if (
            formData.password &&
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
                formData.password
            )
        ) {
            err = {
                ...err,
                password:
                    'Password must be a minimum of 6 characters and contain at least one uppercase letter, one number, and one special character',
            };
            error = true;
        }
        if (!formData.role_id) {
            err = { ...err, role_id: 'Role is required' };
            error = true;
        }
        setErrors(err);
        return error;
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            return;
        }
        setIsLoading(true);
        if (formData.id) {
            ADMINAPIHELPER.updateAdmin(
                {
                    id: formData.id,
                    name: formData.name,
                    email: formData.email,
                    password: formData.password || undefined,
                    role_id: formData.role_id,
                },
                token
            )
                .then((response) => {
                    setIsLoading(false);
                    if (response.data?.data) {
                        setSelectedData(null);
                        toggle();
                        fetchAdmins();
                    } else {
                        toast.error(response.data?.message);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message || error.message);
                    setIsLoading(false);
                });
        } else
            ADMINAPIHELPER.createAdmin(
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role_id: formData.role_id,
                },
                token
            )
                .then((response) => {
                    setIsLoading(false);
                    if (response.data?.data) {
                        setSelectedData(null);
                        toggle();
                        fetchAdmins();
                    } else {
                        toast.error(response.data.message);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message || error.message);
                    setIsLoading(false);
                });
    };

    return (
        <ModalDialog
            width={'lg'}
            aria-labelledby="modal-dialog"
            open={modal}
            onClose={toggle}
            sx={{ width: '100%' }}
        >
            <ModalTitle id="modal-dialog-title" onClose={toggle}>
                {selectedData ? 'Edit Admin' : 'Add Admin'}
            </ModalTitle>
            <DialogContent>
                <form>
                    <Grid container padding={2}>
                        <InputField
                            style={styles.input}
                            type="text"
                            value={formData?.name}
                            name="name"
                            onChange={handleChangeData}
                            placeholder="Enter Name"
                            error={errors.name}
                        />
                    </Grid>
                    <Grid container padding={2}>
                        <InputField
                            style={styles.input}
                            type="text"
                            value={formData?.email}
                            name="email"
                            onChange={handleChangeData}
                            placeholder="Enter Email"
                            error={errors.email}
                        />
                    </Grid>
                    <Grid container padding={2}>
                        <InputField
                            style={styles.input}
                            type="text"
                            value={formData?.password}
                            name="password"
                            onChange={handleChangeData}
                            placeholder="Enter Password"
                            error={errors.password}
                        />
                    </Grid>
                    <Grid container padding={2}>
                        <select
                            style={styles.select}
                            value={formData.role_id}
                            onChange={handleChangeData}
                            name="role_id"
                        >
                            <option value="">Select Role</option>
                            {roles
                                ?.filter((role) =>
                                    permission?.Owner ? true : role.Id != 1
                                )
                                .map((role) => (
                                    <option key={role.Id} value={role.Id}>
                                        {role.Name}
                                    </option>
                                ))}
                        </select>
                        {errors.role_id && (
                            <span
                                style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    marginTop: '4px',
                                    marginLeft: '12px',
                                }}
                            >
                                {errors.role_id}
                            </span>
                        )}
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
                {/* <Button onClick={toggle}>Close</Button> */}
                <Button style={styles.button} onClick={() => handleSubmit()}>
                    Save
                </Button>
            </DialogActions>
        </ModalDialog>
    );
}

const styles = {
    input: {
        // width: '100%',
        minWidth: '500px',
        border: '1px solid #ccc',
        borderRadius: '50px',
        padding: '15px 16px',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        outline: 'none',
        fontSize: '16px',
        color: '#000',
        // textTransform: 'capitalize',
    },
    button: {
        backgroundColor: 'var(--color-caption)',
        color: '#fff',
        border: '1px solid var(--color-caption)',
    },

    select: {
        borderRadius: '50px',
        padding: '15px 16px',
        border: '1px solid #ccc',
        fontSize: '16px',
        appearance: 'none',
        background: 'white',
        fontFamily: 'inherit',
        outline: 'none',
        width: '100%',
    },
};
