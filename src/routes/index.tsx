import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import colors from '../styles/colors';

import StackRoutes from './stack.routes'

const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
)

export default Routes