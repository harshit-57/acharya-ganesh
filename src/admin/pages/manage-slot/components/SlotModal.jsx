import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
    Grid,
    Icon,
    IconButton,
    InputLabel,
    styled,
    Typography,
} from '@mui/material';
import { InputField } from '../../../../components/input-field/InputField';
import { ADMINAPIHELPER } from '../../../../util/APIHelper';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayJs from 'dayjs';
import moment from 'moment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function SlotModal(props) {
    const token = localStorage.getItem('accessToken');
    const { modal, toggle, selectedData, setSelectedData, fetchSlots } = props;
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
        id: selectedData ? selectedData.Id : undefined,
        date: selectedData
            ? dayJs(selectedData.Date).format('YYYY-MM-DD')
            : undefined,
        startDate: selectedData ? undefined : null,
        endDate: selectedData ? undefined : null,
        slots: selectedData
            ? [
                  {
                      startTime: selectedData.StartTime,
                      endTime: selectedData.EndTime,
                  },
              ]
            : [],
    });
    const [errors, setErrors] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChangeData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddSlot = () => {
        setFormData({
            ...formData,
            slots: [
                ...formData.slots,
                {
                    startTime: '',
                    endTime: '',
                },
            ],
        });
    };

    const handleRemoveSlot = (index) => {
        const slots = [...formData.slots];
        slots.splice(index, 1);
        setFormData({
            ...formData,
            slots,
        });
    };

    const handleChangeSlot = (index, field, value) => {
        const slots = [...formData.slots];
        slots[index][field] = value;
        setFormData({
            ...formData,
            slots,
        });
    };

    const handleValidation = () => {
        let error = false;
        let err = errors;
        if (formData?.id && formData.date < moment().format('YYYY-MM-DD')) {
            error = true;
            err.endDate = 'Date must be greater than today';
            toast.error('Date must be greater than today');
        }
        if (!formData?.id && !formData.startDate) {
            error = true;
            err.startDate = 'Start date is required';
            toast.error('Start date is required');
        }
        if (
            !formData?.id &&
            formData.startDate < moment().format('YYYY-MM-DD')
        ) {
            error = true;
            err.endDate = 'Start date must be greater than today';
            toast.error('Start date must be greater than today');
        }
        if (!formData?.id && !formData.endDate) {
            error = true;
            err.endDate = 'End date is required';
            toast.error('End date is required');
        }
        if (!formData?.id && formData.endDate < formData.startDate) {
            error = true;
            err.endDate = 'End date must be greater than start date';
            toast.error('End date must be greater than start date');
        }
        if (!formData.slots.length) {
            error = true;
            err.slots = 'Slots are required';
            toast.error('Slots are required');
        }
        if (formData.slots.length) {
            formData.slots.forEach((slot, index) => {
                if (!slot.startTime) {
                    error = true;
                    err.slots =
                        'Start time is required for slot ' + (index + 1);
                    toast.error(
                        'Start time is required for slot ' + (index + 1)
                    );
                }
                if (!slot.endTime) {
                    error = true;
                    err.slots = 'End time is required for slot ' + (index + 1);
                    toast.error('End time is required for slot ' + (index + 1));
                }
            });
        }
        // if (error) toast.error('Please fill all the required fields');
        setErrors(err);
        return error;
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            return;
        }
        setIsLoading(true);
        if (formData.id) {
            ADMINAPIHELPER.updateSlot(
                {
                    id: formData.id,
                    date: formData.startDate,
                    endDate: formData.endDate,
                    startTime: formData.slots[0].startTime,
                    endTime: formData.slots[0].endTime,
                },
                token
            )
                .then((response) => {
                    setIsLoading(false);
                    if (response.data?.data) {
                        setSelectedData(null);
                        toggle();
                        fetchSlots();
                    } else {
                        toast.error(response.data?.message);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message || error.message);
                    setIsLoading(false);
                });
        } else
            ADMINAPIHELPER.createSlots(
                {
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    slots: formData.slots,
                },
                token
            )
                .then((response) => {
                    setIsLoading(false);
                    if (response.data?.data) {
                        setSelectedData(null);
                        toggle();
                        fetchSlots();
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
                {selectedData ? 'Edit Slot' : 'Add Slot'}
            </ModalTitle>
            <DialogContent>
                <form>
                    <Grid>
                        <InputLabel sx={styles.label}>Date</InputLabel>
                        {formData?.id ? (
                            <Grid
                                container
                                spacing={2}
                                padding={2}
                                alignItems={'center'}
                            >
                                <Grid item xs={12} sm={6} md={6}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DatePicker
                                            label="Date"
                                            sx={styles.datePicker}
                                            value={
                                                formData?.date
                                                    ? dayJs(formData?.date)
                                                    : null
                                            }
                                            onChange={(value) => {
                                                setFormData({
                                                    ...formData,
                                                    date: value?.format(
                                                        'YYYY-MM-DD'
                                                    ),
                                                });
                                            }}
                                            minDate={dayJs()}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid
                                container
                                spacing={2}
                                padding={2}
                                alignItems={'center'}
                            >
                                <Grid item xs={12} sm={6} md={6}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DatePicker
                                            label="From"
                                            sx={styles.datePicker}
                                            value={
                                                formData?.startDate
                                                    ? dayJs(formData?.startDate)
                                                    : null
                                            }
                                            onChange={(value) => {
                                                setFormData({
                                                    ...formData,
                                                    startDate:
                                                        value?.format(
                                                            'YYYY-MM-DD'
                                                        ),
                                                });
                                            }}
                                            minDate={dayJs()}
                                        />
                                    </LocalizationProvider>
                                    {/* {errors?.startDate && (
                                    <Typography
                                        sx={{
                                            color: 'red',
                                            paddingLeft: '20px',
                                        }}
                                    >
                                        {errors?.startDate}
                                    </Typography>
                                )} */}
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DatePicker
                                            label="To"
                                            sx={styles.datePicker}
                                            value={
                                                formData?.endDate
                                                    ? dayJs(formData?.endDate)
                                                    : null
                                            }
                                            onChange={(value) => {
                                                setFormData({
                                                    ...formData,
                                                    endDate:
                                                        value?.format(
                                                            'YYYY-MM-DD'
                                                        ),
                                                });
                                            }}
                                            minDate={
                                                formData?.startDate
                                                    ? dayJs(formData?.startDate)
                                                    : dayJs()
                                            }
                                        />
                                    </LocalizationProvider>
                                    {/* {errors?.endDate && (
                                    <Typography
                                        sx={{
                                            color: 'red',
                                            paddingLeft: '20px',
                                        }}
                                    >
                                        {errors?.endDate}
                                    </Typography>
                                )} */}
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                    <Grid>
                        <InputLabel sx={styles.label}>Slots</InputLabel>

                        {formData?.slots?.map((slot, index) => (
                            <Grid
                                container
                                gap={2}
                                padding={2}
                                alignItems={'center'}
                            >
                                <Grid>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <TimePicker
                                            label="Start Time"
                                            sx={styles.datePicker}
                                            value={
                                                slot?.startTime
                                                    ? dayJs(
                                                          slot?.startTime,
                                                          'HH:mm:ss'
                                                      )
                                                    : null
                                            }
                                            onChange={(value) => {
                                                handleChangeSlot(
                                                    index,
                                                    'startTime',
                                                    value?.format('HH:mm:ss')
                                                );
                                            }}
                                            minDate={dayJs()}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <TimePicker
                                            label="End Time"
                                            sx={styles.datePicker}
                                            value={
                                                slot?.endTime
                                                    ? dayJs(
                                                          slot?.endTime,
                                                          'HH:mm:ss'
                                                      )
                                                    : null
                                            }
                                            onChange={(value) => {
                                                handleChangeSlot(
                                                    index,
                                                    'endTime',
                                                    value?.format('HH:mm:ss')
                                                );
                                            }}
                                            minTime={
                                                slot?.startTime
                                                    ? dayJs(slot?.startTime)
                                                    : dayJs()
                                            }
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                {!formData?.id && (
                                    <IconButton
                                        onClick={() => handleRemoveSlot(index)}
                                    >
                                        <Icon> delete </Icon>
                                    </IconButton>
                                )}
                            </Grid>
                        ))}

                        {!formData?.id && (
                            <IconButton
                                sx={styles.addButton}
                                onClick={handleAddSlot}
                            >
                                <Icon> add</Icon>
                                <Typography>Add Slot</Typography>
                            </IconButton>
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
    datePicker: {
        width: '100%',
        // minWidth: '500px',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        outline: 'none',
        fontSize: '16px',
        color: '#000',
        ['fieldset']: {
            borderRadius: '50px',
        },
    },
    button: {
        backgroundColor: 'var(--color-caption)',
        color: '#fff',
        border: '1px solid var(--color-caption)',
    },
    label: {
        padding: '0px 20px',
    },
    addButton: {
        borderRadius: '50px',
        padding: '10px',
        margin: '10px',
        gap: 1,
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
