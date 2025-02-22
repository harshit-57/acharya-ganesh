import { memo } from 'react';
import { Hidden, Switch, Box, styled, useTheme } from '@mui/material';
import { themeShadows } from '../../MatxTheme/themeColors';
import { convertHexToRGB } from '../../../utils/utils';
import { sidenavCompactWidth, sideNavWidth } from '../../../utils/constant';
import Brand from '../../Brand';
import Sidenav from '../../Sidenav';
import useSettings from '../../../hooks/useSettings';
import useAuth from '../../../hooks/useAuth';

const SidebarNavRoot = styled(Box)(({ color, width, bg, image }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: width,
    boxShadow: themeShadows[8],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    zIndex: 111,
    overflow: 'hidden',
    color,
    transition: 'all 250ms ease-in-out',
    backgroundImage: `linear-gradient(to bottom, rgba(${bg}, 1), rgba(${bg}, 0.7)), url(${image})`,
    '&:hover': {
        width: sideNavWidth,
        '& .sidenavHoverShow': { display: 'block' },
        '& .compactNavItem': {
            width: '100%',
            maxWidth: '100%',
            '& .nav-bullet': { display: 'block' },
            '& .nav-bullet-text': { display: 'none' },
        },
    },
}));

const NavListBox = styled(Box)({
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
});

const Layout1Sidenav = () => {
    const theme = useTheme();
    const { admin } = useAuth();
    const { settings, updateSettings } = useSettings();
    const leftSidebar = settings?.layout1Settings?.leftSidebar;
    const { mode, bgImgURL } = leftSidebar;

    const getSidenavWidth = () => {
        switch (mode) {
            case 'compact':
                return sidenavCompactWidth;

            default:
                return sideNavWidth;
        }
    };

    const primaryRGB = convertHexToRGB(
        theme?.palette?.background?.default || '#001763'
    );

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: { leftSidebar: { ...sidebarSettings } },
        });
    };

    const handleSidenavToggle = () => {
        updateSidebarMode({ mode: mode === 'compact' ? 'full' : 'compact' });
    };

    return (
        <SidebarNavRoot
            color={theme?.palette?.text?.primary}
            image={bgImgURL}
            bg={primaryRGB}
            width={getSidenavWidth()}
        >
            <NavListBox>
                <Brand>
                    <Hidden smDown>
                        <Switch
                            onChange={handleSidenavToggle}
                            checked={leftSidebar?.mode !== 'full'}
                            color="primary"
                            size="small"
                        />
                    </Hidden>
                </Brand>
                <Sidenav />
            </NavListBox>
            {leftSidebar?.mode === 'full' && (
                <Box
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        padding: '10px 0',
                        borderTop: `1px solid ${theme.palette.divider}`,
                        backgroundColor: theme.palette.background.default,
                    }}
                >
                    {admin?.RoleName || 'Super Admin'}
                </Box>
            )}
        </SidebarNavRoot>
    );
};

export default memo(Layout1Sidenav);
