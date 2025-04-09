import {
    Grid,
    styled,
    Box,
    Button,
    InputAdornment,
    TextField,
    Icon,
} from '@mui/material';

import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import PaginationTable from './components/AdminTable';
import AlertDialog from '../../components/Alert';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ADMINAPIHELPER } from '../../../util/APIHelper';
import AdminModal from './components/AdminModal';

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

const ManageAdmin = () => {
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const [admins, setAdmins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterDropDown, setShowFilterDropDown] = useState(false);
    const [sort, setSort] = useState('desc');
    const [sortBy, setSortBy] = useState('ad."CreatedAt"');
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        fetchAdmins();
    }, [currentPage, searchQuery, pageSize, sortBy, sort]);

    const fetchAdmins = async () => {
        try {
            setLoading(true);
            let response;
            response = await ADMINAPIHELPER.getAdmins(
                {
                    page: currentPage,
                    pageSize: pageSize,
                    search: searchQuery || undefined,
                    sort: sort,
                    sortBy: sortBy,
                },
                token
            );

            setAdmins(response.data?.data);
            setTotalCount(response.data?.total);
            setLoading(false);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setLoading(true);
            if (selectedData?.Id)
                ADMINAPIHELPER.deleteAdmin({ id: selectedData?.Id }, token)
                    ?.then((response) => {
                        if (response?.data?.success) {
                            toast.success('Admin deleted successfully');
                            fetchAdmins();
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
                        <H2>Manage Admin</H2>

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
                                    onClick={() => {
                                        setSelectedData(null);
                                        setShowAdminModal(true);
                                    }}
                                    sx={{
                                        px: 3,
                                        py: 0.9,
                                    }}
                                >
                                    + Add Admin
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
                                data={admins}
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
                                showAdminModal={showAdminModal}
                                setShowAdminModal={setShowAdminModal}
                            />
                        </div>
                    </Grid>
                </Grid>
            </ContentBox>

            {showDeleteAlert && (
                <AlertDialog
                    modal={showDeleteAlert}
                    toggle={() => setShowDeleteAlert(!showDeleteAlert)}
                    title="Delete Admin"
                    description="Are you want to sure delete the admin?"
                    confirmFunc={() => handleDelete()}
                />
            )}

            {showAdminModal && (
                <AdminModal
                    modal={showAdminModal}
                    toggle={() => setShowAdminModal(!showAdminModal)}
                    selectedData={selectedData}
                    setSelectedData={setSelectedData}
                    fetchAdmins={fetchAdmins}
                />
            )}
        </Fragment>
    );
};

export default ManageAdmin;
