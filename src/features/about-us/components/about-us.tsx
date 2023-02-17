import { Box } from '@mui/material';
import React from 'react';

import { GuidanceSection } from './GuidanceSection/GuidanceSection';
import { HeroSection } from './HeroSection/HeroSection';
import { HomeRenosSection } from './HomeRenosSection/HomeRenosSection';
import { HowWeStarted } from './HowWeStarted/HowWeStarted';
import { StartUpSection } from './StartUpSection/StartUpSection';
import { VideoSection } from './VideoSection/VideoSection';
// import { useTranslation } from 'react-i18next';

export const AboutUs: React.FC = () => {
  // TYPOGRAPHY AND TRANSLATION EXAMPLE
  // const { t } = useTranslation();
  // <Typography variant="h3" fontWeight="400" component="span" color="primary">
  //   {t('AboutUs.with_xyz')}
  // </Typography>
  return (
    <Box p={0} m={0}>
      <HeroSection />
      <HomeRenosSection />
      <VideoSection />
      <HowWeStarted />
      <StartUpSection />
      <GuidanceSection />
    </Box>
  );
};
