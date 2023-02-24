import { useCallback, useState, useEffect, useContext } from 'react';
import {View, Text, ScrollView, StyleSheet, Animated, Pressable, FlatList} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/listView.style';
import SearchBar from '../components/searchBar';
import * as NavigationBar from 'expo-navigation-bar';
import Menu from '../components/menu';
import TvControl from '../components/tvControl';
import { Context } from '../context/listContext';
import { films } from '../data/movies';
import Film from '../components/film';
import { BASE_IMG } from '../config/api';

SplashScreen.preventAutoHideAsync();

const ListView = (props)=>{
  NavigationBar.setBackgroundColorAsync("#303030");
  const {navigate} = props.navigation
  const scrollY = new Animated.Value(0)

  const {listContext, setListContext} = useContext(Context)
  console.log(listContext)

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
            <SearchBar scrollY={scrollY} navigate={navigate} screen='ListView'/>
            <View style={styles.header}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Filmes</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Programas</Text>
                </Pressable>
            </View>

           <FlatList
                
                contentContainerStyle={styles.scrollViewContainer}
                numColumns={2}
                data={listContext}
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
                            screen='ListView'
                        />
                    )   
                }}
            /> 
          
            {/* <Animated.ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                bounces={false}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16} 
                onScroll={(e)=> handleScroll(e.nativeEvent)}
                >
                    <View style={styles.content}>
                       
                    </View>
                
               

        </Animated.ScrollView> */}
         
            <TvControl value={200}/>
            <Menu page='ListView' navigate={navigate}/>
            <StatusBar  style='light' />
        </View>
    )

}

export default ListView