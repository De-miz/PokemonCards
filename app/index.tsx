import { View, SafeAreaView, ScrollView, FlatList, Text } from 'react-native';
import PokemonCard from '@/components/PokemonCard';
import {core_styles} from '@/assets/css/core_styles';
import {data} from '@/constants/pokemon_data';


export default function Home () {
    return (
        // <ScrollView>
        //     <SafeAreaView>
        //         <View style={core_styles.mainBackground}>
                    
        //             <PokemonCard character_name={"Wartortle"} concept_message={"The quick brown fox."} image_name={require('../assets/images/bulbasaur.png')} />
        //         </View>
        //     </SafeAreaView>
        // </ScrollView>

        // <SafeAreaView>
        <>
            <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: 'gray'}}>Pokemon Cards</Text>
            <FlatList 
             style={core_styles.mainBackground} 
            data={data} 
            renderItem={({item}) => {
                return (<PokemonCard character_name={item.name} concept_message={item.concept} image_name={item.image} hp={item.hp} />)
            }}
            />
        </>
        // </SafeAreaView>
    )
}

