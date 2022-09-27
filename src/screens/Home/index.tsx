import React from 'react'
import { FlatList, Image, ScrollView, View } from 'react-native'

import logoImg from './../../assets/logo-nlw-esports.png'
import { styles } from './style'

import { GAMES } from './../../utils/games'
import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'

export const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre o seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={GAMES}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentGameList}
          renderItem={({ item }) => {
            return (
              <GameCard
                data={item}
              />
            )
          }}
        />

      </ScrollView>
    </View>
  )
}
