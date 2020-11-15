import React from 'react';
import {SafeAreaView, View, Text, Image, FlatList, Dimensions, StyleSheet} from 'react-native';
import news_data from './components/news_data.json';
import NewsCard from './components/NewsCard';



const Main = () => {
    const renderFunction = ({item}) => {
        return(
           <NewsCard 
              props = {item}
           />
        );
      }
    return(
        <SafeAreaView>
            <FlatList
                ListHeaderComponent={<Text style={myStyle.header}>NEWS</Text>}

                data={news_data}
                renderItem={renderFunction}
                keyExtractor={(item, index) => index.toString()}
                //numColumns={2}
            />
        </SafeAreaView>

  )
}

export default Main;

const myStyle = StyleSheet.create({
    header: {
      fontSize: 50, 
          fontWeight: 'bold', 
          textAlign: 'center', 
          borderWidth: 5, 
          borderRadius: 15, 
          color: 'wheat', 
          borderColor: 'wheat',
          margin: 15,
      
    },
  
  })



