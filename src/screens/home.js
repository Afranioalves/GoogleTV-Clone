import { useCallback } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/home.style';
import SearchBar from '../components/searchBar';
import Section from '../components/section';
import Movie from '../components/movie';
import Aquaman from '../../assets/img/aquaman.jpg'
import Venom from '../../assets/img/venom.jpg'
import Adam from '../../assets/img/adam_black.jpg'
import Panther from '../../assets/img/panther.jpg'
import Player from '../../assets/img/player.jpg'
import Transformer from '../../assets/img/Transformers.jpg'
import Bumbeblee from '../../assets/img/bumble.jpg'
import Spider from '../../assets/img/spider.jpg'

SplashScreen.preventAutoHideAsync();

const Home = ()=>{
    
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
            <SearchBar />
            <Section title="Principais sugestões para si">
                <Movie poster={Aquaman} price='1 800,00 kz'/>
                <Movie poster={Venom} price='5 400,00 kz'/>
                <Movie poster={Adam} price='1 800,00 kz'/>
                <Movie poster={Aquaman} price='800,00 kz'/>
            </Section>

            <Section title="Filmes populares">
                <Movie poster={Player} price='3 300,00 kz'/>
                <Movie poster={Transformer} price='1 800,00 kz'/>
                <Movie poster={Bumbeblee}/>
                <Movie poster={Venom}/>
            </Section>

            <Section title="Filmes novos">
                <Movie  poster={Panther} price='7 800,00 kz'/>
                <Movie poster={Spider} price='1 800,00 kz'/>
                <Movie poster={Bumbeblee}/>
                <Movie poster={Adam}/>
            </Section>
            
            <StatusBar  style='light' />
        </View>
    )

}

export default Home