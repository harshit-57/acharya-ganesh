import {
    Grid,
    styled,
    useTheme,
    Box,
    Button,
    InputAdornment,
    TextField,
    Icon,
} from '@mui/material';

import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import PaginationTable from './components/TestimonialTable';
import AlertDialog from '../../components/Alert';
import { toast } from 'react-toastify';
import { PrintExcel, getRoleAndpermission } from '../../utils/utils';
import moment from 'moment';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { APIHelper } from '../../../util/APIHelper';

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

const ManageTestimonial = () => {
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
    const [sortBy, setSortBy] = useState('ws.PublishedOn');
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    useEffect(() => {
        fetchStories();
    }, [currentPage, searchQuery, pageSize, sortBy, sort]);
   

    const fetchStories = async () => {
        try {
            setLoading(true);
            let response;
            if (searchQuery && searchQuery?.length >= 3) {
                response = await APIHelper.getTestimonials({
                    page: currentPage,
                    pageSize: pageSize,
                    search: searchQuery,
                    sort: sort,
                    sortBy: sortBy,
                });
                console.log(response);
                
            } else {
                response = await APIHelper.getTestimonials({
                    page: currentPage,
                    pageSize: pageSize,
                    search: searchQuery,
                });
                console.log(response);
            }
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
                `TestimonialData-${moment(new Date()).format('YYYY-MM-DD')}.xlsx`
            );
            toast.success('Exported successfully');
        } catch (err) {
            console.log(err);
            setExportLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
           
            setShowDeleteAlert(false);
            toast.success('Deleted successfully');
            // fetchStories();
        } catch (err) {
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
                                {/* <Button
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
                                            '/admin/content-editor/story/new',
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
                                    + Add Web Story
                                </Button> */}

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
                            <div style={{ marginRight: '20px' }}>
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
                            />
                        </div>
                    </Grid>
                </Grid>
            </ContentBox>

            {showDeleteAlert && (
                <AlertDialog
                    modal={showDeleteAlert}
                    toggle={() => setShowDeleteAlert(!showDeleteAlert)}
                    title="Delete Web Story"
                    description="Are you want to sure delete the web story?"
                    confirmFunc={() => handleDelete()}
                />
            )}
        </Fragment>
    );
};

export default ManageTestimonial;
