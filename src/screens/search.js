import { useCallback, useState, useEffect } from 'react';
import {View, Text, ScrollView, Pressable, TextInput} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/search.style';
import * as NavigationBar from 'expo-navigation-bar';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import MovieResult from '../components/movieResult';
import { BASE_API, BASE_IMG } from '../config/api';
import Loading from '../components/loading';

const Search = ({route, navigation}) =>{
    const {navigate} = navigation
    const {screen} = route.params
    const [clear, setClear] = useState(false);
    const [value, setValue] = useState('');
    const [trending, setTrending] = useState([])


    const handleChange = (text)=> setValue(text);

    const request = async () =>{
        const response =  await fetch(BASE_API('upcoming',1));
        const result = await response.json();
        setTrending(result.results)
      }

    useEffect(()=>{
        value.length > 0 ? setClear(true) : setClear(false);
        request()
    },[value])
   
    NavigationBar.setBackgroundColorAsync("#1F1F1F");

   

    const movieListSearch = trending.filter((film)=>film.title.toUpperCase().includes(value.toUpperCase()) )
    //console.log(movieList)
    const movieResultRender = () =>{
        return movieListSearch.map((movie, index)=>{
            return( 
                <MovieResult
                    key={index} 
                    name={movie.title} 
                    cover={BASE_IMG+movie.backdrop_path}
                    data={movie}
                    navigate={navigate}
                    screen='Search'
                />
            )
        })
    }

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
            <View style={styles.header}>
                <Pressable onPress={()=>navigate(screen)}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#f1f1f1" />
                </Pressable>
                <TextInput
                    style={styles.inputSearch} 
                    placeholder='Pesquise filmes e programas de TV'
                    placeholderTextColor='#CCCCCC'
                    selectionColor='#f1f1f1'
                    value={value}
                    onChangeText={handleChange}
                />
                 {clear? <Pressable style={{marginRight:24}} onPress={()=>setValue('')}>
                    <Feather name="x" size={24} color="#f1f1f1" />
                </Pressable>:null }
                <Pressable>
                    <MaterialIcons name="mic" size={24} color="#f1f1f1" />
                </Pressable>
            </View>
            {
                trending.length == 0 ? <Loading />:
                <ScrollView style={styles.BoxMovieResult}>
                    {movieResultRender()}
                </ScrollView>
            }
         
        <StatusBar  style='light' />
        </View>
      )

}

export default Search