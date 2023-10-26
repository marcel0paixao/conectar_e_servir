import React, { PropsWithChildren, useEffect, useRef, useState } from "react"
import { View, Text } from "react-native"
import styles from "../../../assets/styles/chat/styles";
import { FlatList } from "react-native-gesture-handler";
import ChatLayout from "../../layouts/ChatLayout";

export type Message = {
    message: string,
    data: string,
    user_id: Number,
    left: boolean
}

export default function Chat({}: PropsWithChildren) {
  const [messageInput, setMessageInput] = useState<string>('');  
  const [messages, setMessages] = useState<Array<Message>>([
    {
      message: 'Estou necessitando dou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: false
    },
    {
      message: 'Estou necessitando d de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: true
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: true
    },
    {
      message: 'Estou necessitando de',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: false
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de umEstou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: false
    },
    {
      message: 'Estou',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: false
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: true
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: true
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: false
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: false
    },
    {
      message: 'Estou necessitando de ajuda para trocar o step do meu carro, estou no lugar X em baixo de um Xo de um Xo de um Xo de um Xo de um Xo de um Xo de um X',
      data: '24/10/2023 13:50:23',
      user_id: 1,
      left: true
    },
  ])


  const handleSubmitMessage = () => {
    let messageObj = {
        message: messageInput,
        data: '24/10/2023 13:50:23',
        user_id: 1,
        left: false
    }
    setMessages([...messages, messageObj]);
    setMessageInput('');
  }

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // if (flatListRef.current) {
    //     flatListRef.current.scrollToIndex({ index: messages.length - 1 });
    //   }
  }, []);

  return (
    <ChatLayout setMessageInput={setMessageInput} handleSubmitMessage={handleSubmitMessage} messageInput={messageInput}>
        <View style={styles.messagesContainer}>
            <FlatList data={messages} ref={flatListRef} keyExtractor={(item) => item.id} renderItem={item => 
                <View style={item.item.left ? styles.messageBox : {...styles.messageBox, marginLeft: 'auto'}}>
                    <Text style={styles.messageText}>{item.item.message}</Text>
                </View>
            } />
        </View>
    </ChatLayout>
  );
}

