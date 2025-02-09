import React, { useEffect, useState } from 'react';
import { Card, Grid, styled, useTheme, MenuItem, Box } from '@mui/material';
import { Fragment } from 'react';
import UsersData from './components/UsersData';
import LineChart from './components/LineChart';
import StatCards from './components/StatCards';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const CardHeader = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '1rem',
    color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}));

const Dashboard = () => {
    const { palette } = useTheme();
    const [dashboardData, setDashboardData] = useState({
        totalUsers: 0,
        totalActiveUsers: 0,
        totalBlockedUsers: 0,
        totalRevenue: 0,
        totalActiveRevenue: 0,
        totalBlockedRevenue: 0,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                // const res = await call('get', 'api/v1/admin/dashboard', null, null);
                // setDashboardData(res.data.data);
                // setLoading(false);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const yearMenuItem = () => {
        let items = [];
        const currentYear = new Date().getFullYear(); // Get the current year
        for (let i = currentYear; i >= 2021; i--) {
            items.push(
                <MenuItem key={i} value={i}>
                    {i}
                </MenuItem>
            );
        }
        return items;
    };

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <StatCards />
                        <h2>Users</h2>
                        <UsersData
                            total_registered_users={dashboardData?.totalUsers}
                            total_active_users={dashboardData?.totalActiveUsers}
                            total_blocked_users={
                                dashboardData?.totalBlockedUsers
                            }
                            loading={loading}
                        />

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Card
                                sx={{
                                    px: 3,
                                    py: 2,
                                    mb: 1,
                                    border: '1px solid #e5e5e5',
                                }}
                            >
                                <CardHeader>
                                    <Title>User Data Analytics</Title>
                                    {/* <Box>
                    <Select
                      sx={{ mr: 2 }}
                      size="small"
                      defaultValue="monthly"
                      onChange={handleUserDuration}
                    >
                      <MenuItem value="daily">Daily</MenuItem>
                      <MenuItem value="weekly">Weekly</MenuItem>
                      <MenuItem value="monthly">Monthly</MenuItem>
                    </Select>
                    <Select
                      size="small"
                      defaultValue={new Date().getFullYear()}
                      onChange={handleUserYear}
                    >
                      {yearMenuItem()}
                    </Select>
                  </Box> */}
                                </CardHeader>
                                <LineChart
                                    dataX={[
                                        'Jan',
                                        'Feb',
                                        'Mar',
                                        'Apr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Aug',
                                        'Sep',
                                        'Oct',
                                        'Nov',
                                        'Dec',
                                    ]}
                                    dataY={[
                                        100, 120, 170, 167, 180, 135, 200, 195,
                                        205, 190, 230, 235,
                                    ]}
                                    height="350px"
                                    color={[
                                        palette.primary.main,
                                        palette.primary.light,
                                    ]}
                                    name="User Registered"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default Dashboard;
