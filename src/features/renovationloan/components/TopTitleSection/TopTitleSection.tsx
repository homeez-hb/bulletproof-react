import { Box, Grid, Typography } from '@mui/material';
import React from 'react';


const classes = {
    heroTitleImage: {
        marginLeft: 'auto',
        display: 'block',
        width: '100%',
        height: {
            xs: 'auto',
            md: 'calc(100vh - 64px)'
        }

    },
    TopTitle: {
        fontSize: { xs: '36px', lg: '48px' },
        color: '#3F3F3F',
        fontFamily: 'Poppins',
        fontWeight: '300',
        marginBottom: '15px',
        // "@media (max-width: 767px)": {
        //     fontSize: '20px',
        // },

    },
    SubTitleTop: {
        fontSize: '18px',
        color: '#3F3F3F',
        fontFamily: 'Poppins',
        fontWeight: '300'
    },
};
export const TopTitleSection = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Box pl={{ xs: 3, lg: 8 }} pt={{ xs: 15, lg: 20 }}>
                        <Typography variant="h1" component="h1" sx={classes.TopTitle}>
                            PAGE TITLE
                        </Typography>
                        <Typography variant='subtitle1' component='p' style={classes.SubTitleTop}>
                            page subtitlepage subtitlepage subtitlepage <br></br> subtitlepage subtitlepage subtitle
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Box component='img' alt="TitleImg" src="/images/herobanner.png" sx={classes.heroTitleImage}></Box>
                </Grid>
            </Grid>

        </>
    );
};
