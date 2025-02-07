import {
    Card,
    Fab,
    Grid,
    Icon,
    lighten,
    styled,
    useTheme,
} from '@mui/material';

const ContentBox = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
}));

const FabIcon = styled(Fab)(() => ({
    width: '40px !important',
    height: '40px !important',
    boxShadow: 'none !important',
    zIndex: 'auto',
}));

const H3 = styled('h3')(({ textcolor }) => ({
    margin: 0,
    color: textcolor,
    fontWeight: '500',
    fontSize: '16px',
}));

const H2 = styled('h3')(({ theme }) => ({
    margin: 0,
    flexGrow: 1,
    marginLeft: '10px',
}));

const Span = styled('span')(({ textcolor }) => ({
    fontSize: '13px',
    color: textcolor,
    marginLeft: '4px',
}));

const IconBox = styled('div')(() => ({
    width: 16,
    height: 16,
    color: '#fff',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: '300px ',
    justifyContent: 'center',
    '& .icon': { fontSize: '14px' },
}));

const UsersData = (props) => {
    const {
        total_registered_users,
        total_active_users,
        total_blocked_users,
        loading,
    } = props;
    const { palette } = useTheme();
    const textGreen = palette.success.main;
    const textError = palette.error.main;
    const bgError = lighten(palette.error.main, 0.85);

    return (
        <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={4} md={4}>
                <Card elevation={3} sx={{ p: 2, border: '1px solid #e5e5e5' }}>
                    <ContentBox>
                        <H3 textcolor="grey">Total Registered Users</H3>
                    </ContentBox>

                    <ContentBox sx={{ pt: 2 }}>
                        <FabIcon size="medium" sx={{ background: '#e5e5e5' }}>
                            <Icon sx={{ color: '#34314c' }}>group</Icon>
                        </FabIcon>
                        <H2>{loading ? 'Loading' : total_registered_users}</H2>
                    </ContentBox>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card elevation={3} sx={{ p: 2, border: '1px solid #e5e5e5' }}>
                    <ContentBox>
                        <H3 textcolor={textGreen}>Total Active Users</H3>
                    </ContentBox>
                    <ContentBox sx={{ pt: 2 }}>
                        <FabIcon size="medium" sx={{ background: '#e5e5e5' }}>
                            <Icon sx={{ color: '#34314c' }}>group</Icon>
                        </FabIcon>
                        <H2>{loading ? 'Loading' : total_active_users}</H2>
                    </ContentBox>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card elevation={3} sx={{ p: 2, border: '1px solid #e5e5e5' }}>
                    <ContentBox>
                        <H3 textcolor={textError}>Total Blocked Users</H3>
                    </ContentBox>
                    <ContentBox sx={{ pt: 2 }}>
                        <FabIcon size="medium" sx={{ background: '#e5e5e5' }}>
                            <Icon sx={{ color: '#34314c' }}>group</Icon>
                        </FabIcon>
                        <H2>{loading ? 'Loading' : total_blocked_users}</H2>
                    </ContentBox>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UsersData;
