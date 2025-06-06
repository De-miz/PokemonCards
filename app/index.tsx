import { View, SafeAreaView, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import PokemonCard from '@/components/PokemonCard';
import {core_styles} from '@/assets/css/core_styles';
import {data} from '@/constants/pokemon_data';


export default function Home () {
    return (

        // <SafeAreaView>
        <>
            <Text style={core_styles.floatingHeader}>Pokemon Cards</Text>
            <FlatList 
             style={core_styles.mainBackground} 
            data={data} 
            renderItem={({item}) => {
                let dropDownFromTop = data.indexOf(item) === 0 ? styles.spaceFromTop : {};
                return (<PokemonCard character_name={item.name} concept_message={item.concept} image_name={item.image} hp={item.hp} style={dropDownFromTop} />)
            }}
            />
        </>
        // </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    spaceFromTop: {
        marginTop: 100
    }
})