import React, { useCallback } from 'react'
import { StatusBar, View } from 'react-native'
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

import { Background } from './src/components/Background'

SplashScreen.preventAutoHideAsync()

export default function App () {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Background>
      <View onLayout={onLayoutRootView}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </View>
    </Background>
  )
}
