import {
    Box,
    Chip,
    Icon,
    IconButton,
    Link,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const PaginationTable = ({
    data,
    totalItems,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    sort,
    setSort,
    sortBy,
    setSortBy,
    showDeleteAlert,
    setShowDeleteAlert,
    selectedData,
    setSelectedData,
}) => {
    const theme = useTheme();
    const primaryColor = theme?.palette?.primary?.main;

    const StyledTable = styled(Table)(() => ({
        whiteSpace: 'pre',
        '& thead': {
            '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
        },
        '& tbody': {
            '& tr': { '& td': { paddingLeft: 0 } },
        },
        '& .MuiTableRow-root:nth-child(even)': {
            backgroundColor: '#fff',
            color: primaryColor || 'inherit',
        },
    }));
    const StyledTableHead = styled(TableCell)(() => ({
        fontSize: '15px',
        fontWeight: 600,
        color: 'white',
        backgroundColor: primaryColor || 'inherit',
        '&:first-of-type': {
            borderTopLeftRadius: '15px', // Curved edge on the top-left corner
        },
        '&:last-of-type': {
            borderTopRightRadius: '15px', // Curved edge on the top-right corner
        },
    }));

    const StyledTableCell = styled(TableCell)(() => ({
        // color: `#676A79`,
    }));

    const handleChangePage = (_, newPage) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(1);
    };

    // const { roleAndPermission } = useAuth();

    const navigate = useNavigate();

    return (
        <Box>
            <Box width="100%" overflow="auto">
                <StyledTable
                    style={{
                        width: '2000px',
                        overflowX: 'auto',
                        wordBreak: 'break-word',
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableHead
                                align="left"
                                style={{ paddingLeft: '40px', width: '100px' }}
                            >
                                <Icon>image</Icon>
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Course Name
                            </StyledTableHead>

                            <StyledTableHead align="center">
                                Course Slug
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Price
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Categories
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Tags
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Status
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Published On
                                {sort === 'desc' ? (
                                    <IconButton onClick={() => setSort('asc')}>
                                        <Icon sx={{ color: 'white' }}>
                                            <Tooltip title="Sort Date">
                                                <Icon color="secondary">
                                                    arrow_downward
                                                </Icon>
                                            </Tooltip>
                                        </Icon>
                                    </IconButton>
                                ) : (
                                    <IconButton onClick={() => setSort('desc')}>
                                        <Icon sx={{ color: 'white' }}>
                                            <Tooltip title="Sort Date">
                                                <Icon color="secondary">
                                                    arrow_upward
                                                </Icon>
                                            </Tooltip>
                                        </Icon>
                                    </IconButton>
                                )}
                            </StyledTableHead>
                            {/* <StyledTableHead align="center">Transactions</StyledTableHead> */}
                            <StyledTableHead align="center">
                                Action
                            </StyledTableHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((course, index) => (
                            <TableRow key={index}>
                                <StyledTableCell
                                    align="left"
                                    style={{
                                        paddingLeft: '30px',
                                        width: '100px',
                                    }}
                                >
                                    {course?.Images?.length ? (
                                        <img
                                            src={course.Images[0]?.ImageUrl}
                                            alt={
                                                course.Images?.length
                                                    ? course.Images[0]?.ImageAlt
                                                    : 'course'
                                            }
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                objectFit: 'cover',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    ) : (
                                        <Icon>photo</Icon>
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Link
                                        sx={{
                                            cursor: 'pointer',
                                            wordBreak: 'break-word',
                                        }}
                                        onClick={() =>
                                            navigate(`/course/${course.Slug}`)
                                        }
                                    >
                                        {course?.Name ? course.Name : 'NA'}
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {course?.Slug ? course?.Slug : 'NA'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography
                                        component={'div'}
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Typography
                                            variant="span"
                                            sx={{
                                                textDecoration: 'line-through',
                                                color: 'red',
                                                fontSize: '12px',
                                            }}
                                        >
                                            ₹ {course?.Regular_Price}
                                        </Typography>
                                        ₹ {course?.Sale_Price}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {course?.Categories?.length
                                        ? course.Categories?.map(
                                              (c) => c?.CategoryName
                                          )?.join(', ')
                                        : 'NA'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {course?.Tags?.filter((t) => t?.TagName)
                                        .length
                                        ? course?.Tags?.filter(
                                              (t) => t?.TagName
                                          )
                                              ?.map((t) => t?.TagName)
                                              ?.join(', ')
                                        : 'NA'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {course?.Status === 1 ? (
                                        <Chip
                                            label={'Published'}
                                            color="primary"
                                        />
                                    ) : course?.Status === 2 ? (
                                        <Chip
                                            label={'Draft'}
                                            color="secondary"
                                        />
                                    ) : (
                                        <Chip label={'Pending'} color="info" />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {moment(course.PublishedOn).format('ll')}
                                </StyledTableCell>
                                <TableCell align="center">
                                    <IconButton
                                        // disabled={
                                        //     !getRoleAndpermission(
                                        //         roleAndPermission,
                                        //         'Company Management',
                                        //         'edit'
                                        //     )
                                        // }
                                        onClick={() => {
                                            navigate(
                                                `/admin/content-editor/course/${course.Slug}`,
                                                { state: course }
                                            );
                                        }}
                                    >
                                        <Tooltip title="Edit">
                                            <Icon color="primary">edit</Icon>
                                        </Tooltip>
                                    </IconButton>

                                    <IconButton
                                        // disabled={
                                        //     !getRoleAndpermission(
                                        //         roleAndPermission,
                                        //         'Company Management',
                                        //         'delete'
                                        //     )
                                        // }
                                        onClick={() => {
                                            setShowDeleteAlert(
                                                !showDeleteAlert
                                            );
                                            setSelectedData(course);
                                        }}
                                    >
                                        <Tooltip title="Delete">
                                            <Icon color="primary">delete</Icon>
                                        </Tooltip>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </Box>
            <TablePagination
                sx={{ px: 2 }}
                page={page - 1}
                component="div"
                rowsPerPage={rowsPerPage}
                count={totalItems}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                backIconButtonProps={{ 'aria-label': 'Previous Page' }}
            />
        </Box>
    );
};

export default PaginationTable;
