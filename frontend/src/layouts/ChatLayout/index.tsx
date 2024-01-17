import { View } from "../../../components/Themed";
import styles from "../../../assets/styles/layouts/chatStyles";
import Header from "./Header";
import Form from "./Form";
import { Dispatch, SetStateAction } from "react";

interface Props {
    children: React.ReactNode,
    setMessageInput: Dispatch<SetStateAction<string>>;
    handleSubmitMessage: () => void;
    messageInput: string;
}

export default function ChatLayout({children, setMessageInput, handleSubmitMessage, messageInput}: Props) {
    return (
        <View style={styles.container}>
            {/* <Header /> */}
            {children}
            <Form setMessageInput={setMessageInput} handleSubmitMessage={handleSubmitMessage} messageInput={messageInput} />
        </View>
    )
}