import {
    Box,
    Card,
    Grid,
    Icon,
    IconButton,
    Radio,
    styled,
    Tooltip,
} from '@mui/material';
import { H2 } from '../../../components/Typography';
import { ADMINAPIHELPER, APIHelper } from '../../../../util/APIHelper';
import { useEffect, useState } from 'react';
import AlertDialog from '../../../components/Alert';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': { color: theme.palette.text.secondary },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}));

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}));

const ThemeCards = () => {
    const token = localStorage.getItem('accessToken');
    const [themes, setThemes] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [newTheme, setNewTheme] = useState(null);

    const [showAlert, setShowAlert] = useState(false);

    const getThemes = async () => {
        try {
            const response = await APIHelper.getThemes();
            setThemes(response.data.data);
            setSelectedTheme(
                response.data.data?.find((theme) => theme.Status === 1)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const changeTheme = async (theme) => {
        try {
            const response = await ADMINAPIHELPER.changeTheme(
                { id: theme.Id },
                token
            );
            if (response.data.success) {
                setSelectedTheme(theme);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setShowAlert(false);
            setNewTheme(null);
        }
    };

    useEffect(() => {
        getThemes();
    }, []);

    if (!themes?.length) return null;

    return (
        <Grid container spacing={3} sx={{ my: '24px' }}>
            {themes?.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <Radio
                                checked={selectedTheme?.Id === item.Id}
                                onClick={() => {
                                    setNewTheme(item);
                                    setShowAlert(true);
                                }}
                            />

                            <Box ml="12px">
                                <H2
                                    style={{
                                        color: item?.Colors?.caption,
                                        fontWeight: 800,
                                    }}
                                >
                                    {item.Name}
                                </H2>
                                <Heading>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1,
                                            mt: 1,
                                            maxWidth: 'fit-content',
                                        }}
                                    >
                                        {Object.entries(item?.Colors || {}).map(
                                            ([key, color]) => (
                                                <Box
                                                    key={key}
                                                    sx={{
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: '50%',
                                                        backgroundColor: color,
                                                        border: '1px solid #ddd',
                                                    }}
                                                    title={key} // Tooltip for accessibility
                                                />
                                            )
                                        )}
                                    </Box>
                                </Heading>
                            </Box>
                        </ContentBox>

                        {/* <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip> */}
                    </StyledCard>
                </Grid>
            ))}
            {showAlert && (
                <AlertDialog
                    modal={showAlert}
                    toggle={() => setShowAlert(!showAlert)}
                    title="Change Website Theme"
                    description="Are you want to sure to change the website theme?"
                    confirmFunc={() => changeTheme(newTheme)}
                />
            )}
        </Grid>
    );
};

export default ThemeCards;
