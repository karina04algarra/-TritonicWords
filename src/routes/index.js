import React from 'react';
import { createAppContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    COVER,
    LEVELS,
    SUBLEVELS,
    DEMO,
    COMMONTRIADS,
    LEARNMORE,
    SHOWERROR,
    REPEATRIAD,
    SUBLEVELCOMPLETED,
    ADVANCEDTRIADS
} from '../consts';

import Cover from '../views/Cover';
import Levels from '../views/Levels';
import Sublevels from '../views/Sublevels';
import Demo from '../views/Demo';
import CommonTriads from '../views/CommonTriads';
import LearnMore from '../views/LearnMore';
import ShowError from '../views/ShowError';
import RepeatTriad from '../views/RepeatTriad';
import SublevelCompleted from '../views/SublevelCompleted';
import AdvancedTriads from '../views/AdvancedTriads';

const AppNavigator = createNativeStackNavigator({
    [COVER] : Cover,
    [LEVELS] : Levels,
    [SUBLEVELS] : Sublevels,
    [DEMO] : Demo,
    [COMMONTRIADS] : CommonTriads,
    [LEARNMORE] : LearnMore,
    [SHOWERROR] : ShowError,
    [REPEATRIAD] : RepeatTriad,
    [SUBLEVELCOMPLETED] : SublevelCompleted,
    [ADVANCEDTRIADS] : AdvancedTriads
});

export default createAppContainer(AppNavigator);