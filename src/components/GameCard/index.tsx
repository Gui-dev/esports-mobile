import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './style'
import { THEME } from '../../theme'

export type GameAdsProps = {
  id: string
  name: string
  ads: string
  cover: ImageSourcePropType
}

type GameCardProps = TouchableOpacityProps & {
  data: GameAdsProps
}

export const GameCard = ({ data, ...rest }: GameCardProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={data.cover}
      >
        <LinearGradient
          style={styles.footer}
          colors={THEME.COLORS.FOOTER}
        >
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text style={styles.ads}>
            {data.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
