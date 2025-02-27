import {
    Grid,
    styled,
    useTheme,
    Box,
    Button,
    InputAdornment,
    TextField,
    Icon,
    Select,
    MenuItem,
} from '@mui/material';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import PaginationTable from './components/CourseTable';
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

const CardHeader = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '1rem',
    color: theme.palette.text.secondary,
}));

const H2 = styled('h2')(({ theme }) => ({
    fontSize: '24px',
    fontWeight: '600',
    color: '01052D',
    marginTop: '0px',
    marginBottom: '30px',
}));

const ManageCourses = () => {
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterDropDown, setShowFilterDropDown] = useState(false);
    const [sort, setSort] = useState('desc');
    const [sortBy, setSortBy] = useState('pr.id');
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchCourses();
    }, [currentPage, searchQuery, pageSize, sortBy, sort, status]);

    const handleSortingFilter = (p1, p2) => {
        setSort(p1);
        setSortBy(p2);
        setShowFilterDropDown(false);
    };

    const fetchCourses = async () => {
        try {
            setLoading(true);
            let response;
            if (searchQuery && searchQuery?.length >= 3) {
                response = await APIHelper.getCourses({
                    page: currentPage,
                    pageSize: pageSize,
                    search: searchQuery,
                    status: status || undefined,
                    sort: sort,
                    sortBy: sortBy,
                });
            } else {
                response = await APIHelper.getCourses({
                    page: currentPage,
                    pageSize: pageSize,
                    status: status || undefined,
                    sort: sort,
                    sortBy: sortBy,
                });
            }
            setCourses(response.data?.data);
            setTotalCount(response.data?.total);
            setLoading(false);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const [exportLoading, setExportLoading] = useState(false);

    const exportData = async () => {
        setExportLoading(true);
        try {
            const res = await APIHelper.getCourses({
                page: 1,
                pageSize: totalCount,
            });
            PrintExcel(
                res?.data?.data,
                `CourseData-${moment(new Date()).format('YYYY-MM-DD')}.xlsx`
            );
            toast.success('Exported successfully');
        } catch (err) {
            console.log(err);
        } finally {
            setExportLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setLoading(true);
            if (selectedData?.Id)
                ADMINAPIHELPER.updateCourse(
                    { id: selectedData?.Id, deletedOn: new Date() },
                    token
                )
                    ?.then((response) => {
                        if (response?.data?.success) {
                            toast.success('Course deleted successfully');
                            fetchCourses();
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
                        <H2>Manage Courses</H2>

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
                                    //         'Course Management',
                                    //         'add'
                                    //     )
                                    // }
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                        navigate(
                                            '/admin/content-editor/course/new',
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
                                    + Add Course
                                </Button>

                                <Button
                                    // disabled={
                                    //     !getRoleAndpermission(
                                    //         roleAndPermission,
                                    //         'Course Management',
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
                            <div style={{ marginRight: '20px' }}>
                                <Select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    placeholder="Select Status"
                                >
                                    <MenuItem value={''}>
                                        Select Status
                                    </MenuItem>
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
                                data={courses}
                                totalItems={totalCount}
                                page={currentPage}
                                setPage={setCurrentPage}
                                rowsPerPage={pageSize}
                                setRowsPerPage={setPageSize}
                                sort={sort}
                                setSort={setSort}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                showDeleteAlert={showDeleteAlert}
                                setShowDeleteAlert={setShowDeleteAlert}
                                selectedData={selectedData}
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
                    title="Delete Course"
                    description="Are you want to sure delete the course?"
                    confirmFunc={() => handleDelete()}
                />
            )}
        </Fragment>
    );
};

export default ManageCourses;
