import { Box, styled } from '@mui/material';
import { MatxLogo } from './';
import { MatxLayoutSettings as settings } from './MatxLayout/settings';
import { Span } from './Typography';
import { Link } from 'react-router-dom';

const BrandRoot = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 18px 20px 29px',
}));

const StyledSpan = styled(Span)(({ mode }) => ({
    fontSize: 18,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({ children }) => {
    const leftSidebar = settings.layout1Settings.leftSidebar;
    const { mode } = leftSidebar;

    return (
        <BrandRoot>
            <Box display="flex" alignItems="center">
                <Link to="/">
                    <img
                        src="/assets/images/np-05.jpg"
                        width="30px"
                        // style={{ borderRadius: '50%' }}
                        alt=""
                    />
                </Link>
                <StyledSpan mode={mode} className="sidenavHoverShow">
                    NoblePage
                </StyledSpan>
            </Box>

            <Box
                className="sidenavHoverShow"
                sx={{ display: mode === 'compact' ? 'none' : 'block' }}
            >
                {children || null}
            </Box>
        </BrandRoot>
    );
};

export default Brand;
