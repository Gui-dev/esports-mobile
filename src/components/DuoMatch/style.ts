import { StyleSheet } from 'react-native'

import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8
  },
  buttonClose: {
    alignSelf: 'flex-end',
    margin: 16
  },
  label: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    marginTop: 24,
    marginBottom: 8
  },
  discordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    height: 48,
    width: 231,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 8
  },
  discord: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT
  }
})
