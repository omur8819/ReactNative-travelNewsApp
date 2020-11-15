import React from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';

const NewsCard = ({props}) => {
    return (
        <View style={myStyle.container}>
            <Image 
            source={{uri: props.imageUrl}}
            style={myStyle.image}
          />
            <Text style={myStyle.title}>{props.title}</Text>
            <Text style={myStyle.desc}>{props.description}</Text>
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
        height: Dimensions.get("window").height*0.25,
        resizeMode:"contain",
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
})