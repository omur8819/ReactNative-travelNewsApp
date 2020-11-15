import React from 'react';
import { View, 
         Text, 
         Image, 
         StyleSheet, 
         Dimensions, 
         TouchableOpacity, 
         Linking } from 'react-native';

const NewsCard = ({props}) => {
    return (
        <View style={myStyle.container}>
            <Image 
            source={{uri: props.imageUrl}}
            style={myStyle.image}
          />
            <Text style={myStyle.title}>{props.title}</Text>
            <Text style={myStyle.desc}>{props.description}</Text>
            <TouchableOpacity
                style={myStyle.button}
                onPress={() => Linking.openURL(props.inspect)}>
                <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 4}}>Inspect The New</Text>
            </TouchableOpacity>

        </View>
    )
}

export default NewsCard;


const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        margin: 15,
        borderWidth: 5,
        borderColor: 'wheat',
        borderRadius: 10,
    },
    image: {
        width: Dimensions.get("window").width*0.80,
        height: Dimensions.get("window").height*0.35,
        borderRadius: 5
        
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 3,
        fontSize: 25
    },
    desc: {
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#e6ee9c',
        width: 200,
        height: 30,
        alignSelf: 'center',
        borderRadius: 10,



    },
})