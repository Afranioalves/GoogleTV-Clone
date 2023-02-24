import { Image, Pressable, StyleSheet, Text, View} from "react-native"

const MovieResult = ({name, cover, navigate, data})=>{
    return(
        <Pressable style={styles.container} onPress={()=>navigate('Details',{movie:data, screen:'Home'})}>
            <Image source={{uri:cover}} style={styles.cover} resizeMode='cover' />
            <Text style={styles.moviename}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:16
    },
    cover:{
        width:70,
        height:40,
        borderRadius:4,
        marginRight:16
    },
    moviename:{
        fontFamily:'Euclid-Regular',
        fontSize:16,
        color:'#f1f1f1'
    }
})

export default MovieResult