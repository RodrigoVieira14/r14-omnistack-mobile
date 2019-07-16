import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Box from './pages/Box';
import BoxesAll from './pages/BoxesAll';

const Routes = createAppContainer(
    createSwitchNavigator({
        BoxesAll,
        Main,
        Box,
    }) 
);


 
export default Routes;