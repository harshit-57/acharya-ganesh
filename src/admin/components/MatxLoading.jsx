import { CircularProgress, Box, styled } from '@mui/material';

const StyledLoading = styled('div')({
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

const Loading = ({ style }) => {
    return (
        <StyledLoading style={style || {}}>
            <Box className="wrapper">
                <img src="/src/assets/brand_logo.png" alt="" />
                <CircularProgress
                    // sx={{ color: '#1B5293' }}
                    className="circleProgress"
                />
            </Box>
        </StyledLoading>
    );
};

export default Loading;
