import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    marginRight: 24
  },
  cover: {
    justifyContent: 'flex-end',
    height: 320,
    width: 240,
    borderRadius: 8,
    overflow: 'hidden'
  },
  footer: {
    justifyContent: 'flex-end',
    height: 102,
    width: '100%',
    padding: 16
  },
  name: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT
  },
  ads: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_300
  }
})
