import { useCallback, useState, useEffect } from 'react';
import {View, Text, ScrollView, StyleSheet, Animated, Pressable} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/libary.style';
import SearchBar from '../components/searchBar';
import * as NavigationBar from 'expo-navigation-bar';
import Menu from '../components/menu';
import TvControl from '../components/tvControl';


SplashScreen.preventAutoHideAsync();

const Libary = (props)=>{
  NavigationBar.setBackgroundColorAsync("#303030");
  const {navigate} = props.navigation
  const scrollY = new Animated.Value(0)

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
            <SearchBar scrollY={scrollY} navigate={navigate} screen='Libary'/>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Filmes</Text>
                <View style={styles.lineHeader}/>
            </View>
          
                <Animated.ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                bounces={false}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16} 
                onScroll={(e)=> handleScroll(e.nativeEvent)}
                >
                    <View style={styles.content}>
                        <Text style={styles.contentTitle}>Iniciar a própria coleção</Text>
                        <Text style={styles.describe}>Procure um lançamento novo ou um clássico {'\n'}para ver</Text>
                        <Pressable style={styles.buttonExplor} onPress={()=>navigate('Home')}>
                            <Text style={styles.textExplor}>Explorar filmes</Text>
                        </Pressable>
                    </View>
                
               

                </Animated.ScrollView>
         
            <TvControl value={200}/>
            <Menu page='Libary' navigate={navigate}/>
            <StatusBar  style='light' />
        </View>
    )

}

export default Libary