import {
    Box,
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
                                Id
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
                                Service
                            </StyledTableHead>
                            <StyledTableHead align="center">
                                Message
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
                        {data.map((support, index) => (
                            <TableRow key={index}>
                                <StyledTableCell align="center">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {support.Name || '-'}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="content-three-line">
                                        {support.Email || '-'}
                                    </p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="content-three-line">
                                        {support.Phone || '-'}
                                    </p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="content-three-line">
                                        {support.Service || '-'}
                                    </p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="content-three-line">
                                        {support.Message || '-'}
                                    </p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {moment(support.CreatedAt).format('ll')}
                                </StyledTableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <Link href={`mailto:${support?.Email}`}>
                                            <Tooltip title="Reply">
                                                <Icon color="primary">
                                                    mail
                                                </Icon>
                                            </Tooltip>
                                        </Link>
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
