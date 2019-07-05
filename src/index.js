import React from 'react';

import Routes from './routes';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);
YellowBox.ignoreWarnings(['Failed prop type']);
// import { Container } from './styles';

const App = () => <Routes />;

export default App;
