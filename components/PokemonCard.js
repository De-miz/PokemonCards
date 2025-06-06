import { core_colors } from '@/assets/css/core_styles';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, StyleSheet, Text, View } from 'react-native';
import CharacterConcept from './CharacterConcept';
import FireButton from './FireButton';


export default function PokemonCard ({character_name, concept_message, image_name, hp, style={}}) {
    return (
        <View style={[styles.box, style]}>
            <View style={styles.horizontal_2by2_flex}>
                <Text style={styles.boxTitle}>{character_name}</Text>
                <View style={styles.horizontal_2by2_flex_with_gap}>
                    <FontAwesomeIcon icon={faHeart} color={"red"} size={22} />
                    <Text>HP: {hp}</Text>
                </View>
            </View>

            <View style={styles.imageBox} >
                <Image 
                    source={image_name} 
                    style={styles.image}
                />
            </View>

            <FireButton text={"Fire"} action={() => console.log(image_name)} />

            <CharacterConcept 
                additionalContentStyle={{marginTop: 20}} 
                message={concept_message} 
            />

        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: "white", 
        padding: 20, 
        borderRadius: 30,
        height: "auto", 
        width: "100%",
        borderWidth: 2, 
        borderColor: core_colors.primary_black, 
        marginBottom: 20,
    }, 
    horizontal_2by2_flex: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center"
    },
    horizontal_2by2_flex_with_gap: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center", 
        gap: 10,
    },
    boxTitle: {
        fontSize: 24, 
        fontFamily: "Arial", 
        fontWeight: 'bold',
        margin: 0
    }, 
    imageBox: {
        marginTop: 20,
        height: 250,
        // backgroundColor: "red",
    }, 
    image: {
        height: "100%",
        width: "100%", 
        resizeMode: "contain",
    }
})