import React from 'react';
import { Box } from '@mui/material';
import { TopTitleSection } from './TopTitleSection/TopTitleSection';
import { NewSection } from './NewSection/NewSection'
import { FooterSection } from './FooterSection/FooterSection';

export const RenovationLoan: React.FC = () => {
  return (
    <>
      <Box p={0} m={0}>
        <TopTitleSection />
        <NewSection />
        <FooterSection />
      </Box>
    </>
  );
};
