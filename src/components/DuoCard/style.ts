import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginRight: 16,
    padding: 20,
    width: 200,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 36,
    width: '100%',
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6
  },
  buttonTitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    marginLeft: 8
  }
})
