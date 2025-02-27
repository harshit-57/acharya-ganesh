import {
    Grid,
    styled,
    useTheme,
    Box,
    Button,
    InputAdornment,
    TextField,
    Icon,
    MenuItem,
    Select,
} from '@mui/material';

import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import PaginationTable from './components/TestimonialTable';
import AlertDialog from '../../components/Alert';
import { toast } from 'react-toastify';
import { PrintExcel, getRoleAndpermission } from '../../utils/utils';
import moment from 'moment';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ADMINAPIHELPER, APIHelper } from '../../../util/APIHelper';

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

const ManageTestimonial = () => {
    const token = localStorage.getItem('accessToken');
    const [searchParams] = useSearchParams();
    const { palette } = useTheme();
    const navigate = useNavigate();
    const [testimonials, setTestimonials] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterDropDown, setShowFilterDropDown] = useState(false);
    const [sort, setSort] = useState('desc');
    const [sortBy, setSortBy] = useState('test.PublishedOn');
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchTestimonials();
    }, [currentPage, searchQuery, pageSize, sortBy, sort , status]);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            let response;

            response = await APIHelper.getTestimonials({
                page: currentPage,
                pageSize: pageSize,
                search: searchQuery || undefined,
                status: status || undefined,
                sort: sort,
                sortBy: sortBy,
            });
            setTestimonials(response.data?.data);
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
            const res = await APIHelper.getTestimonials({
                page: 1,
                pageSize: totalCount,
            });

            setExportLoading(false);
            PrintExcel(
                res?.data?.data,
                `TestimonialData-${moment(new Date()).format(
                    'YYYY-MM-DD'
                )}.xlsx`
            );
            toast.success('Exported successfully');
        } catch (err) {
            console.log(err);
            setExportLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setLoading(true);
            if (selectedData?.Id)
                ADMINAPIHELPER.updateTestimonial(
                    { id: selectedData?.Id, deletedOn: new Date() },
                    token
                )
                    ?.then((response) => {
                        if (response?.data?.success) {
                            toast.success('Testimonial deleted successfully');
                            fetchTestimonials();
                        } else {
                            toast.error(response?.message);
                        }
                        setLoading(false);
                    })
                    .catch((error) => {
                        toast.error(
                            error?.response?.data?.message || error?.message
                        );
                        setLoading(false);
                    });
            setShowDeleteAlert(false);
            setSelectedData(null);
        } catch (err) {
            console.log(err);
            setLoading(false);
            toast.error('Something went wrong');
        }
    };
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <H2>Manage Testimonial</H2>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: '15px' }}>
                                <Button
                                    // disabled={
                                    //     !getRoleAndpermission(
                                    //         roleAndPermission,
                                    //         'Blog Management',
                                    //         'add'
                                    //     )
                                    // }
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                        navigate(
                                            '/admin/content-editor/testimonial/new',
                                            {
                                                state: {},
                                            }
                                        )
                                    }
                                    sx={{
                                        px: 3,
                                        py: 0.9,
                                    }}
                                >
                                    + Add Testimonial
                                </Button>

                                <Button
                                    // disabled={
                                    //     !getRoleAndpermission(
                                    //         roleAndPermission,
                                    //         'Blog Management',
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
                            <div style={{ marginRight: '20px' , display: 'flex' , alignItems: 'center' , gap: "20px" }}>
                                <Select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    displayEmpty 
                                    renderValue={status !== "" ? undefined : () => "Select Status"} 
                                    style={{height : "40px"}}
                                >
                                    <MenuItem value={""}>Select Status</MenuItem>
                                    <MenuItem value={1}>Published</MenuItem>
                                    <MenuItem value={2}>Draft</MenuItem>
                                    <MenuItem value={3}>Pending</MenuItem>
                                </Select>
                                <TextField
                                    id="search"
                                    type="search"
                                    // label="Search"
                                    placeholder="Search..."
                                    size="small"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    // sx={{ width: '50%' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {/* <SearchIcon /> */}
                                                <Icon color="primary">
                                                    search
                                                </Icon>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <PaginationTable
                                data={testimonials}
                                totalItems={totalCount}
                                page={currentPage}
                                setPage={setCurrentPage}
                                rowsPerPage={pageSize}
                                setRowsPerPage={setPageSize}
                                showDeleteAlert={showDeleteAlert}
                                setShowDeleteAlert={setShowDeleteAlert}
                                sort={sort}
                                setSort={setSort}
                                setSelectedData={setSelectedData}
                            />
                        </div>
                    </Grid>
                </Grid>
            </ContentBox>

            {showDeleteAlert && (
                <AlertDialog
                    modal={showDeleteAlert}
                    toggle={() => setShowDeleteAlert(!showDeleteAlert)}
                    title="Delete Testimonial"
                    description="Are you want to sure delete the testimonial?"
                    confirmFunc={() => handleDelete()}
                />
            )}
        </Fragment>
    );
};

export default ManageTestimonial;
