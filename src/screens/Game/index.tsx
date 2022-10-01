import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'

import logoImg from './../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme'
import { styles } from './style'
import { api } from '../../services/api'

type RouteParams = {
  id: string
  title: string
  bannerUrl: string
}

export const Game = () => {
  const route = useRoute()
  const { goBack } = useNavigation()
  const game = route.params as RouteParams
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const handleNavigationGoBack = () => {
    goBack()
  }

  useEffect(() => {
    const loadGameAd = async () => {
      const { data } = await api.get(`/games/${game.id}/ads`)
      setDuos(data)
    }
    loadGameAd()
  }, [game.id])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleNavigationGoBack}>
              <Entypo name="chevron-thin-left" size={24} color={THEME.COLORS.CAPTION_300} />
            </TouchableOpacity>
            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right} />
          </View>

          <Image
            source={{ uri: game.bannerUrl }}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />

          <FlatList
            style={styles.contentList}
            contentContainerStyle={
              [duos.length > 0 ? styles.contentDuoCard : styles.emptyListContent]
            }
            data={duos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <DuoCard
                  key={item.id}
                  data={item}
                  onConnect={() => { }}
                />
              )
            }}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.emptyListText}>
                  Não há anúncios publicados{`${'\n'}`}
                  para este jogo ainda
                </Text>
              )
            }}
            horizontal
          />

        </ScrollView>
      </SafeAreaView>
    </Background>
  )
}
