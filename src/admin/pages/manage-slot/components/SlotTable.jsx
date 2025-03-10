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
import { htmlToText } from 'html-to-text';
import useAuth from '../../../hooks/useAuth';

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
    setSelectedData,
    showSlotModal,
    setShowSlotModal,
}) => {
    const theme = useTheme();
    const { permission } = useAuth();
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
            borderTopLeftRadius: '15px',
        },
        '&:last-of-type': {
            borderTopRightRadius: '15px',
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
                                Id
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Date
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Start Time
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                End Time
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Booking Status
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Status
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Created At
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
                            <StyledTableHead align="center">
                                Action
                            </StyledTableHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((slot, index) => (
                            <TableRow key={index}>
                                <StyledTableCell align="center">
                                    {slot?.Id}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {moment(slot.Date).format('DD/MM/YYYY')}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {slot?.StartTime
                                        ? moment(
                                              slot.StartTime,
                                              'HH:mm:ss'
                                          ).format('hh:mm A')
                                        : '-'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {slot?.EndTime
                                        ? moment(
                                              slot.EndTime,
                                              'HH:mm:ss'
                                          ).format('hh:mm A')
                                        : '-'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {slot?.BookingStatus ? (
                                        <Chip
                                            label="Booked"
                                            color="success"
                                            variant="outlined"
                                        />
                                    ) : (
                                        <Chip
                                            label="Available"
                                            color="success"
                                            variant="outlined"
                                        />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {slot?.Status === 1 ? (
                                        <Chip
                                            label={'Published'}
                                            color="primary"
                                        />
                                    ) : slot?.Status === 2 ? (
                                        <Chip
                                            label={'Draft'}
                                            color="secondary"
                                        />
                                    ) : (
                                        <Chip label={'Pending'} color="info" />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {moment(slot.CreatedAt).format('ll')}
                                </StyledTableCell>
                                <TableCell align="center">
                                    {slot?.RoleId !== 1 || permission?.Owner ? (
                                        <>
                                            {' '}
                                            <IconButton
                                                onClick={() => {
                                                    setSelectedData(slot);
                                                    setShowSlotModal(
                                                        !showSlotModal
                                                    );
                                                }}
                                            >
                                                <Tooltip title="Edit">
                                                    <Icon color="primary">
                                                        edit
                                                    </Icon>
                                                </Tooltip>
                                            </IconButton>
                                            <IconButton
                                                onClick={() => {
                                                    setSelectedData(slot);
                                                    setShowDeleteAlert(
                                                        !showDeleteAlert
                                                    );
                                                }}
                                            >
                                                <Tooltip title="Delete">
                                                    <Icon color="primary">
                                                        delete
                                                    </Icon>
                                                </Tooltip>
                                            </IconButton>
                                        </>
                                    ) : (
                                        <>-</>
                                    )}
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
