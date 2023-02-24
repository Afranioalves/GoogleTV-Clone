import { StyleSheet, View, Text, Pressable } from "react-native"
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Header = ({back, title, search})=>{
    return(
        <View style={styles.container}>
            <View style={styles.container_1}>
                <Pressable onPress={()=>back('Home')}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#f1f1f1" />
                </Pressable>
                {title != null ? <Text style={styles.title}>{title.length > 20 ? `${title.substring(0,20)}...`: title}</Text>:null }
            </View>
            <View style={styles.container_2}>
                <Pressable onPress={()=>search('Search',{screen:'Home'})}>
                    <MaterialIcons name="search" size={24} color="#f1f1f1" style={{marginRight:16}}/>
                </Pressable>
                <MaterialIcons name="more-vert" size={24} color="#f1f1f1" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:16,
        alignItems:'center',
        marginTop:8,
        marginBottom:12,
    },
    container_1:{
        display:'flex',
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    },
    container_2:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:12
    },
    title:{
        fontFamily:'Euclid-Regular',
        color:'#fff',
        fontSize:20,
        marginLeft:16
    }
})

export default Header