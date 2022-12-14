import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 28,
    paddingHorizontal: 32
  },
  logo: {
    height: 40,
    width: 72
  },
  right: {
    height: 20,
    width: 20
  },
  cover: {
    marginTop: 32,
    height: 160,
    width: 311,
    borderRadius: 8
  },
  contentList: {
    width: '100%'
  },
  contentDuoCard: {
    alignItems: 'flex-start',
    paddingRight: 64,
    paddingBottom: 32,
    paddingLeft: 32
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.CAPTION_300
  }
})
