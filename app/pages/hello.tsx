import { View, Text } from 'react-native';


export default function Home () {
    return (
        <View>
            <Text>Hello World! Welcome to the home page.</Text>
            <Text>click <a href='/about/'>here</a> to access the about page.</Text>
        </View>
    )
}