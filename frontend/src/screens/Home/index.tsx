import React, { useContext, useEffect, useState } from "react"
import { View, Text, TextInput, Image, TouchableOpacity, Button } from "react-native"
import styles from "../../../assets/styles/cards/mediumCard";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import { FlatList } from "react-native-gesture-handler";
import AuthContext from "../../../contexts/auth";
import axios from "axios";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  CallDashboard: { help: Help }; // Defina os tipos dos parâmetros
  // ... outras telas
};

type CallDashboardNavigationProp = StackNavigationProp<RootStackParamList, 'CallDashboard'>;

interface Props {
  navigation: CallDashboardNavigationProp;
}

export interface Help {
  id: number;
  name: string;
  description: string;
  status: 'created' | 'finished';
  callerUser: number;
  calledUser: number | null;
  date: string;
  address: string;
}


export default function Home() {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation<StackTypes>();
  const [helps, setHelps] = useState<Array<Help>>();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://192.168.0.2:8090/getCalls').then(response => setHelps(() => {
      return response.data
              .filter((resp: Help) => resp.status !== 'finished')
              .filter((resp: Help) => resp.callerUser !== user?.id)
              .filter((resp: Help) => resp.calledUser == null)
              .map((resp: Help) => {
                const help = {
                  id: resp.id,
                  name: null,
                  description: resp.description,
                  status: resp.status,
                  callerUser: resp.callerUser,
                  calledUser: null,
                  date: resp.date,
                  address: resp.address
                };
                axios.get(`http://192.168.0.2:8090/getUser/${resp.callerUser}`).then(response => {
                  help.name = response.data.username
                })

                return help;
              })
    }));
  }, [])

  useEffect(() => {
    setHelps(helps => {
      return helps?.reverse();
    })
  }, [helps])
  
  
  const handleAcceptCall = (help: Help) => {
    help.calledUser = user?.id ?? 0;
    axios.put('http://192.168.0.2:8090/updateCall', help);
    navigation.navigate('CallDashboard', {help: help});
  }

  const actualDate = new Date().getTime();

  return (
    <AppLayout>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', paddingVertical: 10}}>
        <Text style={styles.logOutTitle}>Quer entrar com uma conta diferente?</Text>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => logout()}
        >
          <Text style={styles.logOutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <FlatList style={styles.cardListContainer} data={helps} renderItem={(item) => 
        <View style={styles.cardContainer}>
          <View style={styles.cardInfo}>
            {/* <Image style={styles.cardImage} source={require('../../../assets/images/person.webp')} /> */}
            <View style={styles.cardText}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.cardTitle}>{item.item.name}</Text>
                {/* <Text style={styles.cardDistance}>{item.item.distancia}</Text> */}
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.cardDescription}>{item.item.description}</Text>
                <Text style={styles.time}>Há {Math.floor((actualDate - new Date(item.item.date).getTime()) / (1000 * 60))} mins</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity style={{...styles.actionButton, ...styles.declineButton}} onPress={() => setHelps(helps.filter(help => help !== item.item))}>
              <Text style={{color: '#c33'}}>Recusar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.actionButton, ...styles.acceptButton}} onPress={() => handleAcceptCall(item.item)}>
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

