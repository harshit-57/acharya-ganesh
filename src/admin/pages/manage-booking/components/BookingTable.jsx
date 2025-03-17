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
import { formatPrice } from '../../../../util/helper';

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
                        width: '3000px',
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
                                Service
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Name
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Email
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Phone
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Address
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                DOB
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Time
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                State
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Gender
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Consultation Type
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Price
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((booking, index) => (
                            <TableRow key={index}>
                                <StyledTableCell align="center">
                                    {booking?.Id}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {moment(booking.Date).format('DD/MM/YYYY')}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.StartTime
                                        ? moment(
                                              booking.StartTime,
                                              'HH:mm:ss'
                                          ).format('hh:mm A')
                                        : '-'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.EndTime
                                        ? moment(
                                              booking.EndTime,
                                              'HH:mm:ss'
                                          ).format('hh:mm A')
                                        : '-'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Status == 0 ? (
                                        <Chip
                                            label="Pending"
                                            color="info"
                                            variant="outlined"
                                        />
                                    ) : booking?.Status == 1 ? (
                                        <Chip
                                            label="Booked"
                                            color="warn"
                                            variant="outlined"
                                        />
                                    ) : booking?.Status == 2 ? (
                                        <Chip
                                            label="Rejected"
                                            color="danger"
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
                                    {booking?.Service}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Email}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Phone}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Address}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {moment(booking.DOB).format('DD/MM/YYYY')}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Time}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.State}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.Gender}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {booking?.ConsultType}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {formatPrice(booking?.Price)}
                                </StyledTableCell>

                                <StyledTableCell align="center">
                                    {moment(booking.CreatedAt).format('ll')}
                                </StyledTableCell>
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
