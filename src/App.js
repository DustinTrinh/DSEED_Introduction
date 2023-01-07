import React from 'react';
import './App.css';
import { Fragment } from 'react';
import LandingPage from './Components/LandingSection/JS/LandingPage';
import NavBar from './Components/LandingSection/JS/NavBar';
import OverviewCarousel from './Components/OverviewSection/JS/OverviewCarousel';
import EcosystemTimeline from './Components/TimelineSection/JS/EcosystemTimeline';
import Participants from './Components/ParticipantsSection/JS/Participants';
import FooterSection from './Components/FooterSection/JS/FooterSection';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <LandingPage/>
      <OverviewCarousel/>
      <EcosystemTimeline/>
      <Participants/>
      <FooterSection/>
    </Fragment>
  );
}

export default App;
