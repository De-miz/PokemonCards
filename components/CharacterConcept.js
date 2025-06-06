import { View, Text, StyleSheet } from "react-native";


export default function CharacterConcept ({message, additionalContentStyle}) {
    return (
        <View style={additionalContentStyle}>
            <Text style={styles.text}><Text style={{fontWeight: "bold"}}>Concept:</Text> <Text>{message}</Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})