import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    width: '100%'
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT
  },
  subtitle: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_400
  }
})
