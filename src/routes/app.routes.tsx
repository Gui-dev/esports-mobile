import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Game } from '../screens/Game'

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
    </Navigator>
  )
}
