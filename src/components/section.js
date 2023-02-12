import {View, ScrollView, Text, StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Section = ({title, children}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.box_title}>
                <Text style={styles.title}>{title}</Text>
                <Entypo name="chevron-right" size={24} color="#fbfbfb" />
            </View>
            <View style={styles.content}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop:40
    },
    box_title:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between' 
    },
    title:{
        color:"#FBFBFB",
        fontFamily:'Euclid-Regular',
        fontSize:16
    },
    content:{
        marginTop:22
    }
})

export default Section