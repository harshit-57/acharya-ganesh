import {
    AppBar,
    Button,
    ThemeProvider,
    Toolbar,
    styled,
    useTheme,
} from '@mui/material';
import { topBarHeight } from '../utils/constant';
import { Paragraph, Span } from './Typography';
import useSettings from '../hooks/useSettings';

const AppFooter = styled(Toolbar)(() => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: topBarHeight,
    '@media (max-width: 499px)': {
        display: 'table',
        width: '100%',
        minHeight: 'auto',
        padding: '1rem 0',
        '& .container': {
            flexDirection: 'column !important',
            '& a': { margin: '0 0 16px !important' },
        },
    },
}));

const FooterContent = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1rem',
    maxWidth: '1170px',
    margin: '0 auto',
}));

const Footer = () => {
    const theme = useTheme();
    const { settings } = useSettings();

    const footerTheme = settings.themes[settings.footer.theme] || theme;

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar color="secondary" position="static" sx={{ zIndex: 96 }}>
                <AppFooter>
                    <FooterContent>
                        <a href="/" target="_blank">
                            <Button
                                variant="contained"
                                color="primary"
                                // style={{ color: 'black' }}
                            >
                                Visit Site
                            </Button>
                        </a>
                        <Span sx={{ m: 'auto' }}></Span>
                        <Paragraph sx={{ m: 0 }}>
                            © All Rights Reserved{' '}
                            <a href="/about-us">Acharya Ganesh</a>
                        </Paragraph>
                    </FooterContent>
                </AppFooter>
            </AppBar>
        </ThemeProvider>
    );
};

export default Footer;
