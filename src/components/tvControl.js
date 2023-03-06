import { View, Text, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 
Animated ,
{ withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const TvControl = ({value}) =>{

   const widthContent = useSharedValue(120)
    const config = {
        duration: 250,
      };
    const animatedStyle = useAnimatedStyle(()=>{
        return{
            width: withTiming(value > 40 ? 0 : widthContent.value, config)
        }
    })
 

    return(
        <View style={styles.container}>
            <View style={styles.viewIcon}>
                <MaterialCommunityIcons name="remote-tv" size={26} color="#FDFCFA" />
            </View>
            <Animated.View style={[styles.boxText, animatedStyle]}>
                <Text style={styles.text}>Comando da TV</Text>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        backgroundColor:'#414246',
        bottom:100,
        right:16,
        height:55,
        display: 'flex',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius:14,
        paddingHorizontal:12,
        
        
    },
    text:{
        color:"#FDFCFA",
        fontFamily:'Euclid-Medium',
    },
    viewIcon:{
        width:35,
        height:55,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    boxText:{
        overflow:'hidden',
    }
})
export default TvControl