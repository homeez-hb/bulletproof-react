import React from 'react'
import { Box, Button, Hidden, Typography } from '@mui/material'

const classes = {
    FooterTextStyle: {
        fontSize: '36px',
        color: '#3F3F3F',
        fontFamily: 'Poppins',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '50px',
        xs: {
            fontSize: '36px',
        }
    },
    SectionSubtitleMobileStyle: {
        fontSize: '30px',
        fontFamily: 'Poppins',
        color: '#3F3F3F',
        marginBottom: '24px',
        lineHeight: '123.5%',
        textAlign: 'center',
        '& span': {
            color: '#EE3126'
        }
    }
}

export const FooterSection = () => {
    return (
        <Box py={10} sx={{ textAlign: 'center' }}>
            <Hidden lgDown>
                <Typography sx={classes.FooterTextStyle}>FOOTER TEXT 123FOOTER TEXT 123FOOTER TEXT 123</Typography>
            </Hidden>

            <Hidden smUp>
                <Typography sx={classes.SectionSubtitleMobileStyle}>LOREM IPSUM <span>OLOREM IPSUM</span> today</Typography>
            </Hidden>


            <Button variant="contained">Apply now</Button>
        </Box>
    )
}
