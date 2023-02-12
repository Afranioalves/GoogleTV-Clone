import {View, Text, StyleSheet, Image} from 'react-native'


const Movie = ({poster, price}) =>{
    return(
        <View>
            <Image source={poster} style={styles.poster} resizeMode='cover'/>
            <View style={{marginTop:12}}>
                <Text style={styles.price}>{price}</Text>
            </View>
           
        </View>
    )

}

const styles = StyleSheet.create({
    poster:{
        width:160,
        height:90,
        borderRadius:16,
        marginRight:16,
    },
    price:{
        color:"#BFBFBF",
        fontSize:13,
        fontFamily:'Euclid-Regular'
    }
})
export default Movie