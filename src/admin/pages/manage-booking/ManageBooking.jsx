import { Grid, styled, Box, Button, Select, MenuItem } from '@mui/material';

import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import PaginationTable from './components/BookingTable';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ADMINAPIHELPER, APIHelper } from '../../../util/APIHelper';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayJs from 'dayjs';
import moment from 'moment';
import { PrintExcel } from '../../utils/utils';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const H2 = styled('h2')(({ theme }) => ({
    fontSize: '24px',
    fontWeight: '600',
    color: '01052D',
    marginTop: '0px',
    marginBottom: '30px',
}));

const ManageBooking = () => {
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchDate, setSearchDate] = useState(null);
    const [bookingStatus, setBookingStatus] = useState('');
    const [sort, setSort] = useState('ASC');
    const [sortBy, setSortBy] = useState('sl."Date"');

    useEffect(() => {
        fetchBookings();
    }, [currentPage, searchDate, bookingStatus, pageSize, sortBy, sort]);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            let response;
            response = await ADMINAPIHELPER.getBookings(
                {
                    page: currentPage,
                    pageSize: pageSize,
                    date: searchDate
                        ? moment(searchDate?.$d)?.add(1, 'day')?.toDate()
                        : undefined,
                    status: bookingStatus,
                    sort: sort,
                    sortBy: sortBy,
                },
                token
            );

            setBookings(response.data?.data);
            setTotalCount(response.data?.total);
            setLoading(false);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    };

    const [exportLoading, setExportLoading] = useState(false);

    const exportData = async () => {
        setExportLoading(true);
        try {
            const res = await ADMINAPIHELPER.getBookings(
                {
                    page: 1,
                    pageSize: totalCount,
                },
                token
            );

            setExportLoading(false);
            PrintExcel(
                res?.data?.data,
                `BookingData-${moment(new Date()).format('YYYY-MM-DD')}.xlsx`
            );
            toast.success('Exported successfully');
        } catch (err) {
            console.log(err);
            setExportLoading(false);
        }
    };

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <H2>Manage Booking</H2>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: '15px' }}>
                                {/* <Button
                                    // disabled={
                                    //     !getRoleAndpermission(
                                    //         roleAndPermission,
                                    //         'Booking Management',
                                    //         'add'
                                    //     )
                                    // }
                                    variant="contained"
                                    size="small"
                                    onClick={() => {
                                        setSelectedData(null);
                                        setShowBookingModal(true);
                                    }}
                                    sx={{
                                        px: 3,
                                        py: 0.9,
                                    }}
                                >
                                    + Add Booking
                                </Button> */}
                                <Button
                                    // disabled={
                                    //     !getRoleAndpermission(
                                    //         roleAndPermission,
                                    //         'Booking Management',
                                    //         'export'
                                    //     )
                                    // }
                                    variant="contained"
                                    size="small"
                                    onClick={exportData}
                                    sx={{
                                        px: 3,
                                        py: 0.9,
                                    }}
                                >
                                    {exportLoading ? 'Loading...' : 'Export'}
                                </Button>
                            </Box>
                            <div
                                style={{
                                    marginRight: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                }}
                            >
                                <Select
                                    value={bookingStatus}
                                    onChange={(e) =>
                                        setBookingStatus(e.target.value)
                                    }
                                    displayEmpty
                                    renderValue={
                                        bookingStatus !== ''
                                            ? undefined
                                            : () => 'Select Status'
                                    }
                                >
                                    <MenuItem value={''}>
                                        Select Status
                                    </MenuItem>
                                    <MenuItem value={0}>Pending</MenuItem>
                                    <MenuItem value={1}>Booked</MenuItem>
                                    <MenuItem value={2}>Rejected</MenuItem>
                                </Select>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label="Search By Date"
                                        sx={{
                                            width: '100%',
                                        }}
                                        value={
                                            searchDate
                                                ? dayJs(searchDate)
                                                : null
                                        }
                                        onChange={(value) => {
                                            setSearchDate(value);
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <PaginationTable
                                data={bookings}
                                totalItems={totalCount}
                                page={currentPage}
                                setPage={setCurrentPage}
                                rowsPerPage={pageSize}
                                setRowsPerPage={setPageSize}
                                sort={sort}
                                setSort={setSort}
                            />
                        </div>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default ManageBooking;
