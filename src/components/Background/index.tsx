import React, { ReactNode } from 'react'
import { ImageBackground } from 'react-native'

import backgroundImg from './../../assets/background-galaxy.png'

import { styles } from './style'

type BackgroundProps = {
  children: ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
