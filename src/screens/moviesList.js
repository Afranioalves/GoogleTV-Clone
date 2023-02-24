import { useCallback, useState, useEffect } from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/movieList.style';
import Film from '../components/film';
import Header from '../components/header';
import * as NavigationBar from 'expo-navigation-bar';
import { films } from '../data/movies';
import {BASE_API, BASE_IMG} from '../config/api';
import Loading from '../components/loading';

const MoviesList = ({route, navigation}) =>{
    const {navigate} = navigation
    const {option} = route.params
    NavigationBar.setBackgroundColorAsync("#1F1F1F");

    const [movieList, setMovieList] = useState([])

    const request = async (type, page) =>{
      const response =  await fetch(BASE_API(type, page));
      return await response.json();
    }
  
    const getMovies = async (type, page) =>{
      const result = await request(type, page)
      setMovieList(result.results)
    }

    useEffect(()=>{
         getMovies(option.type, 1)
    },[])

    console.log(movieList)

   
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
            <Header back={navigate} title={option.title} search={navigate}/>
            {
              movieList.length == 0 ? <Loading />:
              <FlatList
                contentContainerStyle={styles.scrollViewContainer}
                numColumns={2}
                data={movieList}
                renderItem={({item, index})=>{
                    return(
                        <Film
                             poster={`${BASE_IMG}${item.backdrop_path}`}
                             key={index} 
                             price={item.vote_count.toLocaleString("de-DE",{ maximumSignificantDigits: 3 })+' kz'}
                             vote={item.vote_average}
                             count={item.vote_count}
                             name={item.title}
                             navigate={navigate}
                             data={item}
                             screen='Home'
                             
                        />
                    )   
                }}
            /> }
        <StatusBar  style='light' />
        </View>
      )

}

export default MoviesList