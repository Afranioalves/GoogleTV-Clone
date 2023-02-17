import { View, Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
const TvControl = () =>{
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="remote-tv" size={26} color="#FDFCFA" style={{marginRight:12}} />
            <Text style={styles.text}>comando de TV</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:180,
        backgroundColor:'#414246',
        bottom:100,
        right:16,
        height:55,
        display: 'flex',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:12
    },
    text:{
        color:"#FDFCFA",
        fontFamily:'Euclid-Medium' 
    }
})
export default TvControl