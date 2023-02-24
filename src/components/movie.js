import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import tomato from '../../assets/img/tomato.png'
import rotten from '../../assets/img/rotten.png'

import {BASE_API, BASE_IMG} from '../config/api';

const Movie = ({poster, price, count, vote, data, screen, navigate}) =>{
    return(
        <Pressable onPress={()=>navigate('Details',{movie:data, screen})}>
            <Image source={{uri:`${BASE_IMG}${poster}`}} style={[styles.poster]} resizeMode='cover'/>
            <View style={styles.section_price}>
                <Text style={styles.price}>{price}</Text>
                <View style={styles.section_avarage}>
                    <Image source={ count % 3 == 0 ? tomato : rotten } style={styles.icon}/>
                    <Text style={styles.price}>{(vote*10).toFixed(0)}%</Text>
                </View>
               
            </View>
           
        </Pressable>
    )

}

const styles = StyleSheet.create({
    poster:{
        width:162,
        height:90,
        borderRadius:16,
        marginRight:16,
    },
    section_price:{
        marginTop:12,
        display:'flex',
        flexDirection:'row',
        paddingRight:16
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
    }
})
export default Movie