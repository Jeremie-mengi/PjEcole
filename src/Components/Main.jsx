import React from 'react';

import SectionAbout from './SectionAbout';
import SectionServices from './SectionServices';
import SectionCall from './SectionCall';
import SectionContact from './SectionContact';
import SectionHero from './Sectionhero';

function Main() {
  return (
    <>
    <SectionHero/>
    <SectionAbout/>
    <SectionServices/>
    <SectionCall/>
    <SectionContact/>
    </>
  );
}

export default Main;
