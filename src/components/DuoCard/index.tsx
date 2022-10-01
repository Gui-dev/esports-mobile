import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GameController } from 'phosphor-react-native'

import { DuoInfo } from '../DuoInfo'

import { THEME } from './../../theme'
import { styles } from './style'

export type DuoCardProps = {
  id: string
  name: string
  hourEnd: string
  hourStart: string
  yearsPlaying: number
  weekDays: Array<string>
  useVoiceChannel: Boolean
}

type DuoInfoProps = {
  data: DuoCardProps
  onConnect: () => void
}

export const DuoCard = ({ data, onConnect }: DuoInfoProps) => {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />
      <DuoInfo
        label="Tempo de Jogo"
        value={`${data.yearsPlaying} anos`}
      />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamda de áudio"
        value={`${data.useVoiceChannel ? 'SIM' : 'Não'}`}
        colorValue={`${data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}`}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle} >Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
