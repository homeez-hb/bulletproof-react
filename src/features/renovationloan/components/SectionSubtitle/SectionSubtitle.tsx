import React from 'react'
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const classes = {
    // disabledStyle: {
    //     borderRadius: '26px !important',
    //     boxShadow: 'none',
    //     marginBottom: 3,
    //     backgroundColor: '#F0F0F0 !important',
    //     '&::before': {
    //         display: 'none',
    //     }
    // },
    AccordionStyle: {
        borderRadius: '26px !important',
        backgroundColor: '#F0F0F0',
        boxShadow: 'none',
        marginBottom: 3,
        '&::before': {
            display: 'none',
        },
        '& .Mui-expanded p': {
            color: '#EE3126'
        },

    },
    According: {
        '& .Mui-expanded': {
            backgroundColor: '#fff',
            borderRadius: '26px !important',
        },
        '& .Mui-expanded svg': {
            color: '#EE3126'
        }
    },
    Listtexstylet: {
        '& span': {
            fontSize: '16px',
            fontFamily: 'Poppins',
            color: '#3F3F3F',
            '&::before': {
                content: '""',
                width: '8px',
                height: '8px',
                background: '#000',
                position: 'absolute',
                left: '0',
                top: '50%',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translateY(-50%)',
            }
        }
    },
    SectionSubtitleStyle: {
        fontSize: '30px',
        fontFamily: 'Poppins',
        color: '#3F3F3F',
        marginBottom: '24px',
        lineHeight: '123.5%',
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
            display: 'block',
            width: '100%',
            color: '#EE3126'
        },
        display: {
            xs: 'block',
            md: 'none'
        }
    },

}

export const SectionSubtitle = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Box px={{ xs: 2, lg: 8 }} pt={{ lg: 15, xs: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8} md={6}>
                    <Box component="img" alt="TitleImg" src="/images/sectionsubtitle.png" sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={4} md={6}>

                    <Typography sx={classes.SectionSubtitleMobileStyle}>Title<span>SUBTITLE</span></Typography>

                    <Typography sx={classes.SectionSubtitleStyle}>SECTION SUBTITLE <br></br> ABCD</Typography>

                    <Box sx={classes.According}>
                        <Accordion sx={classes.AccordionStyle} defaultExpanded={true} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Poppins', fontWeight: '400', }}>ACTIVE CARD TITLE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box component="img" alt="TitleImg" src="/images/sectionsubtitle.png" sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}></Box>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'transparent',
                                        position: 'relative',
                                        overflow: 'auto',
                                        maxHeight: 300,
                                        '& ul': { padding: 0 },
                                    }}
                                >
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point1"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point2"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point3"
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={classes.AccordionStyle} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Poppins', fontWeight: '400', }}>INACTIVE CARD TITLE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box component="img" alt="TitleImg" src="/images/sectionsubtitle.png" sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}></Box>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'transparent',
                                        position: 'relative',
                                        overflow: 'auto',
                                        maxHeight: 300,
                                        '& ul': { padding: 0 },
                                    }}
                                >
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point1"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point2"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point3"
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={classes.AccordionStyle} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Poppins', fontWeight: '400', }}>INACTIVE CARD TITLE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box component="img" alt="TitleImg" src="/images/sectionsubtitle.png" sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}></Box>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'transparent',
                                        position: 'relative',
                                        overflow: 'auto',
                                        maxHeight: 300,
                                        '& ul': { padding: 0 },
                                    }}
                                >
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point1"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point2"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText sx={classes.Listtexstylet}
                                            primary="Point3"
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
