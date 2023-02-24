import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import tomato from '../../assets/img/tomato.png'
import rotten from '../../assets/img/rotten.png'



const Film = ({poster, price, count, vote, name, navigate, data, screen}) =>{
    return(
        <Pressable style={styles.container} onPress={()=>navigate('Details',{movie:data, screen})}>
            <Image source={{uri:poster}} style={[styles.poster]} resizeMode='cover'/>
            <Text style={styles.moviename}>{name.length > 20 ? `${name.substring(0,18)}...`: name}</Text>
            <View style={styles.section_price}>
                <Text style={styles.price}>{price}</Text>
                <View style={styles.section_avarage}>
                    <Image source={ count % 3 == 0 ? tomato : rotten } style={styles.icon}/>
                    <Text style={styles.price}>{vote*10}%</Text>
                </View>
               
            </View>
           
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container:{
        width:'48%',
        alignSelf:'center',
        marginLeft:16,
        marginBottom:32
    },
    poster:{
        width:'100%',
        height:90,
        borderRadius:16,
    },
    section_price:{
        display:'flex',
        flexDirection:'row',
        paddingRight:16,
        marginTop:2
    },
    price:{
        color:"#BFBFBF",
        fontSize:13,
        fontFamily:'Euclid-Regular'
    },
    icon:{
        width:12,
        height:12,
        marginRight:8
    },
    section_avarage:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:12
    },
    moviename:{
        marginTop:12,
        color:"#fff",
        fontSize:14,
        fontFamily:'Euclid-Medium'
    }
})
export default Film