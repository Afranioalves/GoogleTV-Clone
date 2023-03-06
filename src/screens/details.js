import { useCallback, useState, useEffect, useContext } from 'react';
import {
    View, 
    Text, 
    ScrollView, 
    ImageBackground, 
    Image, 
    Pressable,
    Animated} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/details.style';
import { Ionicons, Octicons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import Section from '../components/section';
import Cover from '../../assets/img/cover3.png'
import * as NavigationBar from 'expo-navigation-bar';
import Header from '../components/header';
import Option from '../components/btnOptions';
import Button from '../components/button';
import ModalPreview from '../components/modalPreview';
import ModalPayment from '../components/modalPayment';
//import WatchTriller from '../components/watchTriller';
import { Context } from '../context/listContext';
import { search } from '../services/searchMovieInContext';
import Loading from '../components/loading';
import { BASE_IMG, BASE_API_SIMILAR } from "../config/api"
import { MovieRender } from '../renders';
import tomato from '../../assets/img/tomato.png'
import rotten from '../../assets/img/rotten.png'

SplashScreen.preventAutoHideAsync();

const Details = ({route, navigation})=>{

  const {movie, screen} = route.params
  const {navigate} = navigation
  const [showModalPreview, setShowModalPreview] = useState(false)
  const [showModalAddCard, setShowModalAddCard] = useState(false)
  const [showModalWatch, setShowModalWatch] = useState(true)
  const [inContext, setInContext] = useState(undefined)
  const [similar, setSimilar] = useState([])
  const poster = {uri:BASE_IMG+movie.poster_path};
  const [min, setMin] = useState(130)
  const [text, setText] = useState('MAIS')

  const readMore = () =>{
    if(movie.overview.length == min){
       setText('MAIS')
       setMin(130)
    }else{
      setText('MENOS')
      setMin(movie.overview.length)
     }
  }

  const request = async () =>{
    const response =  await fetch(BASE_API_SIMILAR(movie.id));
    return await response.json();
  }
  const getSimilar = async () =>{
    const result = await request()
    setSimilar(result.results)
  }
 
  const scrollY = new Animated.Value(0)

  const diffClamp = Animated.diffClamp(scrollY,0,40)
    const paddingTop = diffClamp.interpolate({
        inputRange:[0, 40],
        outputRange:[0, 40],
        //extrapolate:'clamp'
    })

    const handleScroll = (event)=>{
      const {contentOffset} = event;
      scrollY.setValue(contentOffset.y)
    }


  const {listContext, setListContext} = useContext(Context)

  useEffect(()=>{
    const searchFilmInContext = search(movie.id, listContext)
    setInContext(searchFilmInContext)
    getSimilar()
  },[])


  
  const handleAddList = () =>{
      const searchFilmInContext = search(movie.id, listContext)
      searchFilmInContext == undefined ?
      setListContext(listContext.concat(movie)) :
      console.log('Film already exist');
  }


      

 

  NavigationBar.setBackgroundColorAsync("#1F1F1F");
 
    const [fontsLoaded] = useFonts({
        'Euclid-Regular': require('../../assets/fonts/EuclidRegular.ttf'),
        'Euclid-Medium': require('../../assets/fonts/EuclidMedium.ttf'),
        'Euclid-Bold': require('../../assets/fonts/EuclidBold.ttf'),
        'Euclid-Light': require('../../assets/fonts/EuclidLight.ttf'),
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
        <Animated.View onLayout={onLayoutRootView} style={[styles.container,{paddingTop:paddingTop}]}>
          <Animated.ScrollView
              bounces={false}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16} 
              onScroll={(e)=> handleScroll(e.nativeEvent)}
          >
            <ImageBackground source={poster} style={[styles.background]}>
                  <ImageBackground source={Cover} style={styles.cover} resizeMode='cover'>
                          <Header title={null} back={()=>navigate(screen)} search={navigate}/>

                      <Pressable style={styles.btn_trailer}>
                          <Ionicons name="ios-play-outline" size={18} color="#f1f1f1" />
                          <Text style={styles.text_trailer}>Trailer</Text>
                      </Pressable>
                  </ImageBackground>
            </ImageBackground>
            <View style={styles.containerTitle}>
                <Text style={styles.moviename}>{movie.title}</Text>
                <View style={styles.containerTimeline}>
                  <Image source={ movie.vote_count % 3 == 0 ? tomato : rotten } style={styles.tomato}/>
                  <Text style={styles.count}>{(movie.vote_average*10).toFixed(0)}%</Text>
                  <Text style={styles.timeline}>{movie.release_date.substring(0,4)} ~ 2 h 23 min</Text>
                </View>
                          
              </View>
              {movie.overview.length > 0 ?
              <View style={styles.containerDescription}>
                  <Text style={styles.description}>
                    { movie.overview.substring(0,min)}
                  </Text>
                  <Pressable style={styles.btnMore} onPress={()=>readMore()}>
                    <Text style={styles.textMore}>{text}</Text>
                  </Pressable>
                </View>: null
              }

              <View style={styles.containerOptions}>
                <Option title="Lista de..." action={()=>handleAddList()}>
                  {
                      inContext == undefined ?
                    <MaterialCommunityIcons name="bookmark-outline" size={20} color="#f1f1f1" />:
                    <FontAwesome name="bookmark" size={20} color="#f1f1f1" />
                  }
                   
                </Option>
                <Option title="Já viu ?">
                    <FontAwesome name="circle-thin" size={20} color="#f1f1f1" />
                </Option>
                <Option title="Gosto">
                    <AntDesign name="like2" size={20} color="#f1f1f1" />
                </Option>
                <Option title="Não Gosto">
                    <AntDesign name="dislike2" size={20} color="#f1f1f1" />
                </Option>
              </View>

              <View style={styles.containerButtons}>
                  <Button text="Alugar" price="1 800,00 kz" marginRight={12} click={()=>setShowModalPreview(true)}/>
                  <Button text="Comprar" price="4 300,00 kz" marginRight={0} click={()=>setShowModalPreview(true)}/>
              </View>
              {

                similar.length == 0 ? <Loading />:
                <Section title={`Se gostou de ${movie.title}`} icon={true} >
                      {MovieRender(similar, navigate)}
                </Section>
              }
              <View style={styles.line}></View>
              <View>
                <Text style={styles.titleInfo}>Mais informações</Text>
                <View style={styles.containerInfo}>

                  <View style={styles.subContainer}>

                    <View style={styles.section_1}>
                        <Text style={styles.title}>HDR</Text>
                        <Text style={styles.describe}>Disponível</Text>
                    </View>
                    <View>
                      <Text style={styles.title}>HDR10+</Text>
                      <Text style={styles.describe}>Disponível</Text>
                      <Text style={styles.title}>Legendas</Text>
                      <Text style={[styles.describe]}>
                        alemão ~ cantonês{'\n'}
                        checo ~ chinês {'\n'}
                        coreano ~ croata {'\n'}
                        esloveno ~ espanhol {'\n'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.subContainer}>
                    <View style={styles.section_1}>
                      <Text style={styles.title}>Dolby Vision</Text>
                      <Text style={styles.describe}>Disponível</Text>
                    </View>
                    <View>
                      <Text style={styles.title}>Áudio</Text>
                      <Text style={[styles.describe]}>
                        alemão ~ checo ~ espanhol {'\n'}
                        húngaro ~ inglês ~ italinao {'\n'}
                        português ~ tailandês
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.title}>Validade do aluguer</Text>
                      <Text style={[styles.describe]}>
                        Comece dentro de 30 {'\n'}
                        dias e termine dentro de {'\n'}
                        48 horas
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.title}>Tomatometer</Text>
                      <View style={styles.containerTimeline}>
                            <Image source={ movie.vote_count % 3 == 0 ? tomato : rotten } style={styles.tomato}/>
                            <Text style={styles.count}>{(movie.vote_average*10).toFixed(0)}% Ler mais</Text>
                          </View>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.ScrollView>
            <ModalPreview
              isOpenModal={showModalPreview}
              isCloseModal={()=>setShowModalPreview(false)}
              addCard={()=>setShowModalAddCard(true)}
              moviename={movie.title}
              poster={poster}
            >

            </ModalPreview>

            <ModalPayment
              isOpenModal={showModalAddCard}
              isCloseModal={()=>setShowModalAddCard(false)}
              moviename={movie.title}
              poster={poster}
            >

            </ModalPayment>

           {/* <WatchTriller
              isOpenModal={showModalWatch}
              isCloseModal={()=>setShowModalWatch(false)}
              moviename={movie.title}
              poster={poster}
            /> */}

            <StatusBar  style='light' />
        </Animated.View>
    )

}

export default Details