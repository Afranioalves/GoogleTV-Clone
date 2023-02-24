import {View, Text, Image, StyleSheet} from 'react-native'
import Load from '../../assets/img/load.gif'

const Loading = () =>{
    return(
        <View style={styles.container}>
           <Image source={Load} style={styles.load}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:24,
        justifyContent:'center',
        alignItems:'center'
    },
    load:{
        height:140,
        width:140
    }
})

export default Loading