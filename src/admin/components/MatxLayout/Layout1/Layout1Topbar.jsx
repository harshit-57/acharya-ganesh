import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Hidden,
    Icon,
    IconButton,
    MenuItem,
    useMediaQuery,
    Box,
    styled,
    useTheme,
    Typography,
} from '@mui/material';

import { MatxMenu, MatxSearchBox } from '../../';
import { themeShadows } from '../../MatxTheme/themeColors';
import { topBarHeight } from '../../../utils/constant';

import { Span } from '../../Typography';
import useSettings from '../../../hooks/useSettings';
import useAuth from '../../../hooks/useAuth';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')({
    top: 0,
    zIndex: 96,
    height: topBarHeight,
    boxShadow: themeShadows[8],
    transition: 'all 0.3s ease',
});

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}));

const UserMenu = styled(Box)({
    padding: 4,
    display: 'flex',
    borderRadius: 24,
    cursor: 'pointer',
    alignItems: 'center',
    '& span': { margin: '0 8px' },
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': { marginRight: '10px', color: theme.palette.text.primary },
}));

const IconBox = styled('div')(({ theme }) => ({
    display: 'inherit',
    [theme.breakpoints.down('md')]: { display: 'none !important' },
}));

const Layout1Topbar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { settings, updateSettings } = useSettings();
    const { logout, admin } = useAuth();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: { leftSidebar: { ...sidebarSettings } },
        });
    };

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings;
        let mode;
        if (isMdScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close';
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
        }
        updateSidebarMode({ mode });
    };

    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex" alignItems="center">
                    <StyledIconButton onClick={handleSidebarToggle}>
                        <Icon>menu</Icon>
                    </StyledIconButton>
                    {settings?.layout1Settings?.leftSidebar?.title && (
                        <Typography
                            variant="h6"
                            color={theme?.palette?.text?.primary || '#000'}
                            textTransform={'capitalize'}
                        >
                            {settings.layout1Settings.leftSidebar.title}
                        </Typography>
                    )}
                </Box>

                <Box display="flex" alignItems="center">
                    {/* 
                    <MatxSearchBox /> 
                    <NotificationProvider>
                        <NotificationBar />
                    </NotificationProvider> 
                    */}

                    <MatxMenu
                        menuButton={
                            <UserMenu>
                                <Hidden xsDown>
                                    <Span>
                                        Hi <strong>{admin?.Name}</strong>
                                    </Span>
                                </Hidden>
                                <Avatar
                                    src={admin?.ProfileImg}
                                    sx={{ cursor: 'pointer' }}
                                />
                            </UserMenu>
                        }
                    >
                        <StyledItem onClick={logout}>
                            <Icon> power_settings_new </Icon>
                            <Span> Logout </Span>
                        </StyledItem>
                    </MatxMenu>
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    );
};

export default memo(Layout1Topbar);
