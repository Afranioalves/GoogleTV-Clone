import { 
    Pressable, 
    Text, 
    StyleSheet, 
    Image
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../../assets/img/avatar.jpg'

const SearchBar = () =>{
    return(
        <Pressable style={styles.container}>
            <Ionicons name="ios-search" size={20} color="#FBFBFB" />
            <Text style={styles.appname}>Google TV</Text>
            <Image source={Avatar} style={styles.avatar}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#313131',
        height:48, 
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:50,
        paddingLeft:16,
        paddingRight:12,
        marginHorizontal:16
        
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
    }

})

export default SearchBar