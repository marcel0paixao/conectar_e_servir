import React from "react"
import { View, Text, TextInput, Image, TouchableOpacity, Button } from "react-native"
import CheckBox from 'expo-checkbox'
import styles from "../../../assets/styles/cards/mediumCard";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import { FlatList } from "react-native-gesture-handler";

export default function Home() {
  const [remember, setRemember] = React.useState(false);
  const navigation = useNavigation<StackTypes>();
  const helps = [
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    },
    {
      name: 'pessoa 1',
      distancia: '0.6km',
      status: 'active',
      photo: 'url foto'
    }

  ]

  return (
    <AppLayout>
      <FlatList style={styles.cardListContainer} data={helps} renderItem={item => 
        <View style={styles.cardContainer}>
          <View style={styles.cardInfo}>
            <Image source={require('../../../assets/images/google.png')} width={60} height={60} />
            <Text>{item.item.name}</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity style={{...styles.actionButton, ...styles.declineButton}}>
              <Text>Recusar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.actionButton, ...styles.acceptButton}}>
              <Text>Aceitar</Text>
            </TouchableOpacity>
          </View>
        </View>
      } />
    </AppLayout>
  );
}

