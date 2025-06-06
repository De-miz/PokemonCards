import {View, Text, StyleSheet, Pressable} from "react-native";
import { core_colors } from '@/assets/css/core_styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons/faFire';


export default function FireButton ({text, action}) {
    return (
        <Pressable style={styles.button} onPress={action}>
            <FontAwesomeIcon icon={faFire} color={"orange"} size={22} />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        flexDirection: "row", 
        gap: 10,
        justifyContent: "space-between", 
        alignItems: "center",
        color: core_colors.primary_black,
        borderWidth: 4, 
        borderColor: core_colors.fire_button_border,
        borderRadius: 20, 
        paddingVertical: 10, 
        paddingHorizontal: 15,
        margin: "auto", 
        marginTop: 20,
    }, 
    text: {
        fontSize: 25, 
        fontWeight: "bold"
    }
})