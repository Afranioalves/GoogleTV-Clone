import { useCallback, useState, useEffect } from 'react';
import {
    View, 
    Text, 
    ScrollView, 
    ImageBackground, 
    Image, 
    Pressable} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/details.style';

import Section from '../components/section';
import Movie from '../components/movie';
import Aquaman from '../../assets/img/aquaman.jpg'
import Venom from '../../assets/img/venom.jpg'
import Adam from '../../assets/img/adam_black.jpg'
import Cover from '../../assets/img/cover3.png'
import * as NavigationBar from 'expo-navigation-bar';
import Header from '../components/header';

SplashScreen.preventAutoHideAsync();

const Details = (props)=>{
  const {navigate} = props.navigation
  NavigationBar.setBackgroundColorAsync("#1F1F1F");
 
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
           <ImageBackground source={Venom} style={styles.background}>
                <ImageBackground source={Cover} style={styles.cover} resizeMode='cover'>
                    <Header title={null}/>
                    <Pressable style={styles.btn_trailer}>
                        <Text style={styles.text_trailer}>Trailer</Text>
                    </Pressable>
                </ImageBackground>
           </ImageBackground>
            <StatusBar  style='light' />
        </View>
    )

}

export default Details