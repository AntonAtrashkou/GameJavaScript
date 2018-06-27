import State from './State';
import LandingPage from './LandingPage';

import './styles/normalize.css';
import './styles/index.css';

const landingPage = new LandingPage();
const state = new State();
state.initApp();