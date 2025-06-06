import { StyleSheet } from "react-native";


export const core_styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
        backgroundColor: "ghostwhite", 
        fontFamily: "Arial", 
        padding: 20
    }, 
    floatingHeader: {
        position: "absolute",
        top: 0, 
        left: 0, 
        width: "100%",
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "center", 
        paddingVertical: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: 'gray',
        backgroundColor: "#ffffff94", 
        backdropFilter: "blur(5px)", 
        zIndex: 500,
    }
})


export const core_colors = {
    bg_gray: "ghostwhite", 
    primary_black: "black",
    fire_button_border: "red",
}