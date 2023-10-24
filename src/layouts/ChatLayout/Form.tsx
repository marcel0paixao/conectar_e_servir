import React, { Dispatch, SetStateAction } from "react";
import { View } from "../../../components/Themed";
import { TextInput, TouchableOpacity, Text } from "react-native";
import formStyles from "../../../assets/styles/form/styles";
import styles from "../../../assets/styles/layouts/chatStyles";

interface Props {
    setMessageInput: Dispatch<SetStateAction<string>>;
    handleSubmitMessage: () => void;
    messageInput: string;
}

export default function Form({setMessageInput, handleSubmitMessage, messageInput}: Props) {
    return (
        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 10}}>
            <TextInput
                style={formStyles.input}
                placeholder="Escreva uma mensagem"
                onChangeText={setMessageInput}
                value={messageInput}
                placeholderTextColor={'white'} />

            <TouchableOpacity style={styles.button} onPress={() => handleSubmitMessage()} >
              <Text style={{color: 'white', textAlign: 'center', marginTop: 15}}>&#62;</Text>
            </TouchableOpacity>
        </View>
    )
}