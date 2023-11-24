import React, { useState } from "react"
import { View, Text, TextInput, Image, TouchableOpacity, Button } from "react-native"
import styles from "../../../assets/styles/cards/mediumCard";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import { FlatList } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation<StackTypes>();
  const [helps, setHelps] = useState([
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'Ana da Silva',
      description: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    }
  ])

  return (
    <AppLayout>
      <FlatList style={styles.cardListContainer} data={helps} renderItem={(item) => 
        <View style={styles.cardContainer}>
          <View style={styles.cardInfo}>
            <Image style={styles.cardImage} source={require('../../../assets/images/person.webp')} />
            <View style={styles.cardText}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.cardTitle}>{item.item.name}</Text>
                <Text style={styles.cardDistance}>{item.item.distancia}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.cardDescription}>{item.item.description}</Text>
                <Text style={styles.time}>Há 1 min</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity style={{...styles.actionButton, ...styles.declineButton}} onPress={() => setHelps(helps.filter(help => help !== item.item))}>
              <Text style={{color: '#c33'}}>Recusar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.actionButton, ...styles.acceptButton}} onPress={() => navigation.navigate('Chat')}>
              <Text style={{color: 'green'}}>Aceitar</Text>
            </TouchableOpacity>
          </View>
        </View>
      } />
      <TouchableOpacity style={styles.callButon} onPress={() => navigation.navigate('CreateCall')}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 40, marginTop: 8}}>+</Text>
      </TouchableOpacity>
    </AppLayout>
  );
}

