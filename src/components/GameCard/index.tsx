import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './style'
import { THEME } from '../../theme'

export type GameAdsProps = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

type GameCardProps = TouchableOpacityProps & {
  data: GameAdsProps
}

export const GameCard = ({ data, ...rest }: GameCardProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}
      >
        <LinearGradient
          style={styles.footer}
          colors={THEME.COLORS.FOOTER}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
