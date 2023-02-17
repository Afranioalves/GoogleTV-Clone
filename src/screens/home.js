import { useCallback, useState, useEffect } from 'react';
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
import {BASE_API, BASE_IMG} from '../config/api';
import { MovieRender } from '../renders';
import * as NavigationBar from 'expo-navigation-bar';
import Menu from '../components/menu';
import TvControl from '../components/tvControl';

SplashScreen.preventAutoHideAsync();

const Home = ()=>{
  const visibility = NavigationBar.useVisibility()
  NavigationBar.setBackgroundColorAsync("#303030");

    const [movies, setMovies] = useState({
      popular: [],
      suggestion: [],
      bestSeller: [],
      rental: [],
      adventure: [],
      news: []
    });
    const [popularMovie, setPopularMovie] = useState([]);
    const [newMovie, setNewMovie] = useState([]);
    const [suggestionMovie, setSuggestionMovie] = useState([]);

    const [error, setError] = useState([]);

    const request = async (type, page) =>{
      const response =  await fetch(BASE_API(type, page));
      return await response.json();
    }
  
  

    const getNewMovies = async (type, page) =>{
      const result = await request(type, page)
      setPopularMovie(result.results)
    }

    const getPopularMovies = async (type, page) =>{
      const result = await request(type, page)
      setNewMovie(result.results)
    }

    const getSuggestionMovies = async (type, page) =>{
      const result = await request(type, page)
      setSuggestionMovie(result.results)
    }

   /* useEffect(()=>{
      getNewMovies('upcoming', 1)
      getPopularMovies('popular', 2)
      getSuggestionMovies('now_playing', 1)
      NavigationBar.setVisibilityAsync("hidden");
    
    },[])*/

  
   
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
            <View style={styles.scrollViewContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <SearchBar />
              <Section title="Principais sugestões para si">
                  <Movie poster={Spider} price='1 800,00 kz' count={45567} vote={7.5}/>
                  <Movie poster={Bumbeblee} price='3 456,00 kz' count={567} vote={5.5}/>
                  <Movie poster={Spider} price='1 800,00 kz' count={457} vote={6.5}/>
                  <Movie poster={Adam} price='3 456,00 kz' count={4667} vote={7.5}/>
              </Section>

              <Section title="Filmes populares">
                  <Movie poster={Spider} price='1 800,00 kz' count={45567} vote={7.5}/>
                  <Movie poster={Bumbeblee} price='3 456,00 kz' count={567} vote={5.5}/>
                  <Movie poster={Spider} price='1 800,00 kz' count={457} vote={6.5}/>
                  <Movie poster={Adam} price='3 456,00 kz' count={4667} vote={7.5}/>
              </Section>

              <Section title="Filmes novos">
                  <Movie poster={Spider} price='1 800,00 kz' count={45567} vote={7.5}/>
                  <Movie poster={Bumbeblee} price='3 456,00 kz' count={567} vote={5.5}/>
                  <Movie poster={Spider} price='1 800,00 kz' count={457} vote={6.5}/>
                  <Movie poster={Adam} price='3 456,00 kz' count={4667} vote={7.5}/>
              </Section>

              <Section title="Filmes mais vendidos">
                  <Movie poster={Spider} price='1 800,00 kz' count={45567} vote={7.5}/>
                  <Movie poster={Bumbeblee} price='3 456,00 kz' count={567} vote={5.5}/>
                  <Movie poster={Spider} price='1 800,00 kz' count={457} vote={6.5}/>
                  <Movie poster={Adam} price='3 456,00 kz' count={4667} vote={7.5}/>
              </Section>

              <Section title="Filmes de aluguer">
                  <Movie poster={Spider} price='1 800,00 kz' count={45567} vote={7.5}/>
                  <Movie poster={Bumbeblee} price='3 456,00 kz' count={567} vote={5.5}/>
                  <Movie poster={Spider} price='1 800,00 kz' count={457} vote={6.5}/>
                  <Movie poster={Adam} price='3 456,00 kz' count={4667} vote={7.5}/>
              </Section>

              <Section title="Filmes de ação e aventura">
                  <Movie poster={Spider} price='1 800,00 kz' count={45567} vote={7.5}/>
                  <Movie poster={Bumbeblee} price='3 456,00 kz' count={567} vote={5.5}/>
                  <Movie poster={Spider} price='1 800,00 kz' count={457} vote={6.5}/>
                  <Movie poster={Adam} price='3 456,00 kz' count={4667} vote={7.5}/>
              </Section>
            </ScrollView>
            </View>
            <TvControl />
            <Menu page='Home'/>
            <StatusBar  style='light' />
        </View>
    )

}

export default Home