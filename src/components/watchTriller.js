import React, {useState, useEffect} from 'react'
import {
    Modal,
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    Pressable,
    TextInput,
    Dimensions
} from 'react-native'
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { MaterialIcons, Feather, Entypo } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');
const WatchTriller = ({isCloseModal, isOpenModal,moviename, poster}) =>{
   
    const setOrientation = ()=>{
        height > width ?
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE):
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
    useEffect(()=>{
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    },[])
    return(
    
        <View  style={styles.Container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <Pressable onPress={()=>isCloseModal()}>
                      <Feather name="arrow-left" size={26} color="#fbfbfb" />
                    </Pressable>
                    <Text style={styles.title}>Big Buck Bunny</Text>
                </View>

                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                    resizeMode="cover"
                    shouldPlay
                    useNativeControls
                    onFullscreenUpdate={setOrientation}
                    style={{ width, height: height}}
                />
            </View>
           
        </View>

    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'#1f1f1f',
        zIndex:99,
        position:'absolute',
        width:width,
        height:height
      
    },

    header:{
        flexDirection:'row',
        paddingHorizontal:16,
        position:'absolute',
        width:width,
        height:80,
        backgroundColor:'rbga(0, 0, 0, 0.25)',
        zIndex:9999,
        paddingTop:32, 
    },
    title:{
        fontFamily:'Euclid-Medium',
        fontSize:16,
        marginLeft:16,
        color:'#fff',
    },
    containerDescribe:{
        position:'absolute',
        width:'100%',
        bottom:20
    },
    buyButton:{
        height:40,
        backgroundColor:'#DBDBDB',
        marginHorizontal:16,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginTop:8
    },
    buyText:{
        fontFamily:'Euclid-Regular',
        color:"#292929",
    },
    containerInput:{
        flexDirection:'row',
        paddingHorizontal:12,
        marginTop:32,
        borderColor:'#E20A4D',
        height:50,
        borderWidth:2,
        marginHorizontal:24,
        alignItems:'center',
        borderRadius:6,
        position:'relative'
    },
    inputCard:{
        marginLeft:12,
        height:30,
        width:'100%',
        fontFamily:'Euclid-Regular',
        fontSize:16
    },

    label:{
        color:'#E20A4D',
        fontFamily:'Euclid-Regular',
        fontSize:12, 
        position:'absolute',
        top:-10,
        left:8,
        backgroundColor:'#fff',
        paddingHorizontal:4
    },



    price:{
        fontFamily:'Euclid-Medium',
        color:"#000",
        fontSize:16,
        marginLeft:12
    },
    moviename:{
        fontFamily:'Euclid-Medium',
        color:'#131313',
        fontSize:18,
        marginTop:-4

    },
    usermail:{
        fontFamily:'Euclid-Light',
        color:'#626365',
        fontSize:12
    },

    btnAdd:{
        height:65,
        marginHorizontal:24,
        marginTop:24,
        flexDirection:'row',
        paddingHorizontal:32,
        alignItems:'center',
        borderWidth:1,
        borderColor:'#A1A1A1',
        borderRadius:4,
    },
    textAdd:{
        fontFamily:'Euclid-Regular',
        color:'#000',
    },
    mark:{
        height:4,
        backgroundColor:'#A1A1A1',
        position:'absolute',
        width:80,
        alignSelf:'center',
        borderRadius:20,
        top:16
    }
})

export default WatchTriller