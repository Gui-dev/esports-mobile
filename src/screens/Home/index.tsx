import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import logoImg from './../../assets/logo-nlw-esports.png'
import { styles } from './style'

import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { GameCard, GameAdsProps } from '../../components/GameCard'
import { api } from '../../services/api'

export const Home = () => {
  const [games, setGames] = useState<GameAdsProps[]>([])
  const { navigate } = useNavigation()

  useEffect(() => {
    const loadGames = async () => {
      const { data } = await api.get('/games')
      setGames(data)
    }
    loadGames()
  }, [])

  const handleOpenScreenGame = ({ id, title, bannerUrl }: GameAdsProps) => {
    navigate('Game', { id, title, bannerUrl })
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
        >
          <Image source={logoImg} style={styles.logo} />
          <Heading
            title="Encontre o seu duo!"
            subtitle="Selecione o game que deseja jogar..."
          />

          <FlatList
            data={games}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentGameList}
            renderItem={({ item }) => {
              return (
                <GameCard
                  data={item}
                  onPress={() => handleOpenScreenGame(item)}
                />
              )
            }}
          />

        </ScrollView>
      </SafeAreaView>
    </Background>
  )
}
