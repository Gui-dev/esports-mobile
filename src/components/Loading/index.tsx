import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { THEME } from '../../theme'

import { styles } from './style'

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  )
}