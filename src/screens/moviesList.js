import { useCallback, useState, useEffect } from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import Section from '../components/section';
import Aquaman from '../../assets/img/aquaman.jpg'
import Venom from '../../assets/img/venom.jpg'
import Adam from '../../assets/img/adam_black.jpg'
import Panther from '../../assets/img/panther.jpg'
import Player from '../../assets/img/player.jpg'
import Transformer from '../../assets/img/Transformers.jpg'
import Bumbeblee from '../../assets/img/bumble.jpg'
import Spider from '../../assets/img/spider.jpg'
import styles from '../styles/movieList.style';
import Film from '../components/film';
import Header from '../components/header';
import * as NavigationBar from 'expo-navigation-bar';

const MoviesList = ({route, navigation}) =>{
    const {navigate} = navigation
    const {option} = route.params
    NavigationBar.setBackgroundColorAsync("#1F1F1F");

    const films = [
        {   
            id:1,
            name:'Black Adam',
            cover: Adam,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:2,
            name:'The Player One',
            cover: Player,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:3,
            name:'Film 1',
            cover: Transformer,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:4,
            name:'Spider Man: No way Home',
            cover: Spider,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:5,
            name:'Bumbeblee',
            cover: Bumbeblee,
            price: '1 800,00 kz',
            count:467,
            vote:5.5
        },
        {   
            id:6,
            name:'Venon',
            cover: Venom,
            price: '2 400,00 kz',
            count:45567,
            vote:7
        },
        {   
            id:2,
            name:'The Player One',
            cover: Player,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:3,
            name:'Film 1',
            cover: Transformer,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:4,
            name:'Spider Man: No way Home',
            cover: Spider,
            price: '1 800,00 kz',
            count:45567,
            vote:7.5
        },
        {   
            id:5,
            name:'Bumbeblee',
            cover: Bumbeblee,
            price: '1 800,00 kz',
            count:467,
            vote:5.5
        },
        {   
            id:6,
            name:'Venon',
            cover: Venom,
            price: '2 400,00 kz',
            count:45567,
            vote:7
        },
    ]
    const [fontsLoaded] = useFonts({
        'Euclid-Regular': require('../../assets/fonts/EuclidRegular.ttf'),
        'Euclid-Medium': require('../../assets/fonts/EuclidMedium.ttf'),
        'Euclid-Bold': require('../../assets/fonts/EuclidBold.ttf'),
      });
    
     const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View onLayout={onLayoutRootView} style={styles.container}>
            <Header back={navigate} title={option.title}/>
            <FlatList
                contentContainerStyle={styles.scrollViewContainer}
                numColumns={2}
                data={films}
                renderItem={({item, index})=>{
                    return(
                        <Film
                             poster={item.cover} 
                             key={index} 
                             price={item.price}
                             count={item.count}
                             vote={item.vote}
                             name={item.name}
                        />
                    )   
                }}
            />
        <StatusBar  style='light' />
        </View>
      )

}

export default MoviesList