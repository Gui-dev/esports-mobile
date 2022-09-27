import React from 'react'
import { Text, View, ViewProps } from 'react-native'

import { styles } from './style'

type HeadingProps = ViewProps & {
  title: string
  subtitle: string
}

export const Heading = ({ title, subtitle, ...rest }: HeadingProps) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
