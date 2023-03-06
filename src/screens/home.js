import { useCallback, useState, useEffect } from 'react';
import {View, Text, ScrollView, Animated} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/home.style';
import SearchBar from '../components/searchBar';
import Section from '../components/section';

import {BASE_API, BASE_IMG} from '../config/api';
import { MovieRender, MovieRenderLocal } from '../renders';
import * as NavigationBar from 'expo-navigation-bar';
import Menu from '../components/menu';
import TvControl from '../components/tvControl';
import Loading from '../components/loading';

SplashScreen.preventAutoHideAsync();

const Home = (props)=>{
  const {navigate} = props.navigation
  NavigationBar.setBackgroundColorAsync("#303030");

    const [popularMovie, setPopularMovie] = useState([]);
    const [newMovie, setNewMovie] = useState([]);
    const [suggestionMovie, setSuggestionMovie] = useState([]);
    const [bestSellerMovie, setBestSellerMovie] = useState([]);
    const [rentalMovie, setRentalMovie] = useState([]);
    const [adventureMovie, setAdventureMovie] = useState([]);

    const scrollY = new Animated.Value(0)
    const [value, setValue] = useState(scrollY);
    
    const request = async (type, page) =>{
      const response =  await fetch(BASE_API(type, page));
      return await response.json();
    }
  
  

    const getNewMovies = async (type, page) =>{
      const result = await request(type, page)
      setNewMovie(result.results)
    }

    const getPopularMovies = async (type, page) =>{
      const result = await request(type, page)
      setPopularMovie(result.results)
    }

    const getSuggestionMovies = async (type, page) =>{
      const result = await request(type, page)
      setSuggestionMovie(result.results)
    }
    const getBestSellerMovies = async (type, page) =>{
      const result = await request(type, page)
      setBestSellerMovie(result.results)
    }
    const getRentalMovies = async (type, page) =>{
      const result = await request(type, page)
      setRentalMovie(result.results)
    }
    const getAdventureMovies = async (type, page) =>{
      const result = await request(type, page)
      setAdventureMovie(result.results)
    }

   useEffect(()=>{
      getNewMovies('upcoming', 2)
      getPopularMovies('popular', 3)
      getSuggestionMovies('now_playing', 1)
      getBestSellerMovies('top_rated', 1)
      getRentalMovies('top_rated', 2)
      getAdventureMovies('now_playing', 3)
    
    },[])


    const handleScroll = (event)=>{
      const {contentOffset} = event;
      //const value = ((layoutMeasurement.height+ contentOffset.y) / contentSize.height) * 100;
     // console.log(`${value.toFixed(0)}%`);
     scrollY.setValue(contentOffset.y)
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
           
            <SearchBar scrollY={scrollY} navigate={navigate} screen='Home'/>
         
            <Animated.View style={[styles.scrollViewContainer]}>
            <Animated.ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16} 
            onScroll={(e)=> handleScroll(e.nativeEvent)}
            >
             
             {
              suggestionMovie.length == 0 ? <Loading />:
              <Section title="Principais sugestões para si" 
                navigate={()=>navigate('List',{option:{title:'Principais sugestões para si', type:'now_playing'}})}>
                  {MovieRender(suggestionMovie, navigate)}
              </Section>
              }

              {
              popularMovie.length == 0 ? <Loading />:
              <Section title="Filmes populares" 
              navigate={()=>navigate('List',{option:{title:'Filmes populares', type:'popular'}})}>
                  {MovieRender(popularMovie, navigate)}
              </Section>
              }

              {
                newMovie.length == 0 ? <Loading />:
                <Section title="Filmes novos"  
                navigate={()=>navigate('List',{option:{title:'Filmes novos', type:'upcoming'}})}>
                    {MovieRender(newMovie, navigate)}
                </Section>
              }

              {
               bestSellerMovie.length == 0 ? <Loading />:
                <Section title="Filmes mais vendidos"  
                  navigate={()=>navigate('List',{option:{title:'Filmes mais vendidos', type:'top_rated'}})}>
                    {MovieRender(bestSellerMovie, navigate)}
                </Section>
              }

              {
                rentalMovie.length == 0 ? <Loading />:
              <Section title="Filmes de aluguer"  
              navigate={()=>navigate('List',{option:{title:'Filmes de aluguer', type:'top_rated'}})}>
                  {MovieRender(rentalMovie, navigate)}
              </Section>
              }

              {
                adventureMovie.length == 0 ? <Loading />:
              <Section title="Filmes de ação e aventura"  
              navigate={()=>navigate('List',{option:{title:'Filmes de ação e aventura', type:'now_playing'}})}>
                  {MovieRender(adventureMovie, navigate)}
              </Section>
              }
            </Animated.ScrollView>
            </Animated.View>
          
            <TvControl value={20}/>
            <Menu page='Home'  navigate={navigate}/>
            <StatusBar  style='light' />
        </View>
    )

}

export default Home