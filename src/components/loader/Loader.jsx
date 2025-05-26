import { CircularProgress, Box, styled } from '@mui/material';
import logo from '../../assets/brand_logo.png';

const StyledLoading = styled('div')({
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .wrapper': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& img': {
        width: 'auto',
        height: '25px',
    },
    '& .circleProgress': {
        position: 'absolute',
        left: -7,
        right: 0,
        top: 'calc(50% - 20px)',
    },
});

const Loader = ({ style }) => {
    return (
        <StyledLoading style={style || {}}>
            <Box className="wrapper">
                <img src={logo} alt="loading" />
                <CircularProgress
                    sx={{ color: '#9a5c23' }}
                    className="circleProgress"
                />
            </Box>
        </StyledLoading>
    );
};

export default Loader;
