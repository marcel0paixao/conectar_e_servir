import React, {useContext, useEffect, useState} from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import cardStyles from "../../../assets/styles/cards/mediumCard";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import AuthContext from "../../../contexts/auth";
import { RouteProp } from '@react-navigation/native';
import { Help } from "../Home";
import axios from "axios";

type RootStackParamList = {
  CallDashboard: { help: Help }; // Defina os tipos dos parâmetros
};

type CallDashboardRouteProp = RouteProp<RootStackParamList, 'CallDashboard'>;

interface Props {
  route: CallDashboardRouteProp;
}

export default function CallDashboard({ route }: Props){
    const navigation = useNavigation<StackTypes>();
    const { help } = route.params;

    const { user } = useContext(AuthContext);

    const [call, setCall] = useState<Help>(help);
    
    const handleFinish = async () => {
        setCall((c: Help) => {
            c.status = 'finished';
            return c;
        })
        axios.put("http://localhost:8090/updateCall", call)
        .then((response) => {
            if (response) navigation.navigate('Home');
        })
    }

    const handleCancel = async () => {
        setCall((c: Help) => {
            c.calledUser = null;
            return c;
        })
        axios.put("http://localhost:8090/updateCall", call)
        .then(() => {
            if(call.calledUser !== user?.id) navigation.navigate('Home');
        }).catch(console.log)
    }

    return (
        <AppLayout footer>
            <View>
                <Text style={styles.title}>Solicitação de ajuda</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.inputLabel}>{call.callerUser == user?.id ? 'Ajudante disposto' : 'Pessoa a ser ajudada'}</Text>
                </View>
                <View style={{...cardStyles.cardContainer, marginHorizontal: 20, width: '90%', height: 160}}>
                    {call.calledUser ?
                        <>
                            <View style={cardStyles.cardInfo}>
                                <View style={cardStyles.cardText}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Text style={{...cardStyles.cardTitle, marginTop: 15}}>Nome: {call.name}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row'}}>
                                <View>
                                    <TouchableOpacity style={{...styles.button, width: '150', paddingHorizontal: 15, marginLeft: 15}} onPress={() => navigation.navigate('Chat')}>
                                        <Text style={{color: 'white'}}>Conversar</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={{...styles.button, width: '250', paddingHorizontal: 15, marginLeft: 10}} onPress={() => navigation.navigate('Map')}>
                                        <Text style={{color: 'white'}}>Ver localização</Text>
                                    </TouchableOpacity>
                                </View>
                                {call.callerUser == user?.id && <View>
                                    <TouchableOpacity style={{...styles.button, width: '250', paddingHorizontal: 15, marginLeft: 10}} onPress={handleCancel}>
                                        <Text style={{color: 'red'}}>Recusar</Text>
                                    </TouchableOpacity>
                                </View>}
                            </View>
                        </> :
                        <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10, padding: 10}}>Aguarde enquanto procuramos ajudantes para você...</Text>
                    }
                </View>
            </View>
            <View>
                {call.callerUser == user?.id ? 
                    <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={handleFinish}>
                        <Text style={globalStyles.buttonText}>Finalizar solicitação</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={handleCancel}>
                        <Text style={globalStyles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                }
            </View>
        </AppLayout>
    );
}
