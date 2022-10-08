import React from 'react'
import { StatusBar } from 'react-native'
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter'

import { Background } from './src/components/Background'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'

import './src/services/notificationConfig'

export default function App () {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  if (!fontsLoaded) {
    return (
      <Background>
        <Loading />
      </Background>
    )
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </Background>
  )
}
