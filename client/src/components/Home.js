import React, { useState } from 'react';
import NavBar from './NavBar';
import JotsContainer from './JotsContainer';
import JotForm from './JotForm';
import { MainSection, LeftPanel, RightPanel } from '../styles/Containers';

const Home = (props) => {
  return (
    <>
      <NavBar />
      <MainSection>
        <LeftPanel>
          <JotsContainer />
        </LeftPanel>
        <RightPanel>
          <JotForm />
        </RightPanel>
      </MainSection>
    </>
  );
};

export default Home;