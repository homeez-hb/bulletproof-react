import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { IconOne, IconTow, IconThree } from '../../SvgIcons';
import { SectionSubtitle } from '../SectionSubtitle/SectionSubtitle';
const classes = {
    SectionTitle: {
        fontSize: '30px',
        color: '#3F3F3F',
        fontFamily: 'Poppins',
        fontWeight: '300',
        marginBottom: '50px',
        display: {
            xs: 'none',
            md: 'block'
        }
    },
    SectionStyle: {
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F3F0 5.52%, #F7F3F0 97.29%, #FFFFFF 100%)',
        paddingTop: '50px',
        paddingBottom: '80px'
    },
    IconBox: {
        background: '#F36F67',
        padding: '15px',
        width: '80px',
        height: '80px',
        borderRadius: '100%',
        margin: 'auto'
    },
    SectionBox: {
        background: '#fff',
        padding: '15px',
        borderRadius: '6px',
    },
    SectionBoxTitle: {
        fontSize: '18px',
        color: '#3F3F3F',
        fontFamily: 'Poppins',
        fontWeight: '500',
        textAlign: 'center',
        margin: '30px 0px'
    },
    SectionBoxDescription: {
        fontSize: '16px',
        color: '#3F3F3F',
        fontFamily: 'Poppins',
        fontWeight: '400',
        textAlign: 'center',
    },
    SectionSubtitleMobileStyle: {
        fontSize: '30px',
        fontFamily: 'Poppins',
        color: '#3F3F3F',
        marginBottom: '24px',
        lineHeight: '123.5%',
        textAlign: 'center',
        '& span': {
            display: 'block',
            width: '100%',
            color: '#EE3126'
        },
        display: {
            xs: 'block',
            md: 'none'
        }
    }

}
export const NewSection = () => {
    return (
        <>
            <Box style={classes.SectionStyle}>
                <Box pt={10} sx={{ textAlign: 'center' }}>

                    <Typography sx={classes.SectionSubtitleMobileStyle}>Lorem ipsum<span>SUBTITLE</span></Typography>
                    <Typography variant="h1" component="h1" sx={classes.SectionTitle}>
                        NEW SECTION TITLE
                    </Typography>


                </Box>

                <Box px={{ xs: 2, lg: 8 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={4} md={4}>
                            <Box style={classes.SectionBox}>
                                <Box style={classes.IconBox}>
                                    <IconOne />
                                </Box>
                                <Typography variant='subtitle1' component='p' sx={classes.SectionBoxTitle}>ITEM 1</Typography>
                                <Typography variant='subtitle1' component='p' sx={classes.SectionBoxDescription}>OCBC Renovation Loan offers a loan tenure from 1 to 5 years</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} md={4}>
                            <Box style={classes.SectionBox}>
                                <Box style={classes.IconBox}>
                                    <IconTow />
                                </Box>
                                <Typography variant='subtitle1' component='p' sx={classes.SectionBoxTitle}>ITEM 2</Typography>
                                <Typography variant='subtitle1' component='p' sx={classes.SectionBoxDescription}>OCBC Renovation Loan offers a loan tenure from 1 to 5 years</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} md={4}>
                            <Box style={classes.SectionBox}>
                                <Box style={classes.IconBox}>
                                    <IconThree />
                                </Box>
                                <Typography variant='subtitle1' component='p' sx={classes.SectionBoxTitle}>ITEM 3</Typography>
                                <Typography variant='subtitle1' component='p' sx={classes.SectionBoxDescription}>OCBC Renovation Loan offers a loan tenure from 1 to 5 years</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <SectionSubtitle />
            </Box>
        </>
    )
}
