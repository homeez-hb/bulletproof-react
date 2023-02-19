import React from 'react'
import { Box, Button, Typography } from '@mui/material'

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
        },
        display: {
            xs: 'none',
            md: 'block'
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
        },
        display: {
            xs: 'block',
            md: 'none'
        }
    }
}

export const FooterSection = () => {
    return (
        <Box py={10} sx={{ textAlign: 'center' }}>

            <Typography sx={classes.FooterTextStyle}>FOOTER TEXT 123FOOTER TEXT 123FOOTER TEXT 123</Typography>

            <Typography sx={classes.SectionSubtitleMobileStyle}>LOREM IPSUM <span>OLOREM IPSUM</span> today</Typography>

            <Button variant="contained">Apply now</Button>
        </Box>
    )
}
