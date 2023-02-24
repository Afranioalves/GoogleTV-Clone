import { 
    Pressable, 
    Text, 
    StyleSheet, 
    Image,
    View,
    Animated
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../../assets/img/avatar.jpg'
//import 
//Animated ,
//{ withTiming, useSharedValue, useAnimatedStyle,Easing } from 'react-native-reanimated';

const SearchBar = ({scrollY, navigate, screen}) =>{
  
    const diffClamp = Animated.diffClamp(scrollY,0,50)
    const translateY = diffClamp.interpolate({
        inputRange:[0, 50],
        outputRange:[0, -50],
        //extrapolate:'clamp'
    })
    const height = diffClamp.interpolate({
        inputRange:[0, 50],
        outputRange:[50, 0],
        //extrapolate:'clamp'
    })
    const opacity = diffClamp.interpolate({
        inputRange:[0, 50],
        outputRange:[1, 0],
        
    })
    const marginBottom = diffClamp.interpolate({
        inputRange:[0, 24],
        outputRange:[24, 10],
    })
  
    return(
        <Animated.View 
            style={[ 
                styles.animated,
                {
                    transform:[{ translateY }], 
                    height,
                    opacity,
                }
            ]}>
            <Pressable style={[ styles.container]} onPress={()=>navigate('Search',{screen})}>
                <Ionicons name="ios-search" size={20} color="#FBFBFB" />
                <Text style={styles.appname}>Google TV</Text>
                <Image source={Avatar} style={styles.avatar}/>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#313131',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:50,
        paddingLeft:16,
        paddingRight:12,
        marginHorizontal:16,
        height:50
        
    },
    appname:{
        color:'#FBFBFB',
        fontFamily:'Euclid-Medium',
        fontSize:20
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:200/2
    },
  

})

export default SearchBar