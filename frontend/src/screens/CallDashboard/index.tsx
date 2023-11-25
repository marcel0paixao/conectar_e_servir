import React, {useEffect, useState} from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import cardStyles from "../../../assets/styles/cards/mediumCard";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import axios from "axios";

export default function CallDashboard(){
    const navigation = useNavigation<StackTypes>();

    const handleFinish = async () => {
        await fetch("http://localhost:8000/updateCall", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 34,
                status: 'finished',
                date: new Date(),
                calledUser: 2,
                callerUser: 1
            })
            })
            .then((response) => {
            if (response.ok) navigation.navigate('Home');
            else console.log(response.status);
        })
        navigation.navigate('Home')
    }

    const handleReject = async () => {
        await fetch("http://localhost:8000/updateCall", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 34,
                status: 'finished',
                date: new Date(),
                calledUser: null,
                callerUser: 1
            })
            })
    }

    return (
        <AppLayout footer>
            <View>
                <Text style={styles.title}>Solicitação de ajuda</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.inputLabel}>Ajudante disposto</Text>
                </View>
                <View style={{...cardStyles.cardContainer, marginHorizontal: 20, width: '90%', height: 160}}>
                    <View style={cardStyles.cardInfo}>
                        <Image style={cardStyles.cardImage} source={require('../../../assets/images/person.webp')} />
                        <View style={cardStyles.cardText}>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={{...cardStyles.cardTitle, marginTop: 15}}>Ana da Silva</Text>
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
                            <TouchableOpacity style={{...styles.button, width: '250', paddingHorizontal: 15, marginLeft: 10}} onPress={() => navigation.navigate('CreateCall')}>
                                <Text style={{color: 'white'}}>Ver localização</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{...styles.button, width: '250', paddingHorizontal: 15, marginLeft: 10}} onPress={handleReject}>
                                <Text style={{color: 'red'}}>Recusar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={handleFinish}>
                  <Text style={globalStyles.buttonText}>Finalizar solicitação</Text>
                </TouchableOpacity>
            </View>
        </AppLayout>
    );
}