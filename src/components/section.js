import {View, ScrollView, Text, StyleSheet, Pressable} from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Section = ({title, navigate ,icon,children}) =>{
    return(
        <View style={styles.container}>
            <Pressable style={styles.box_title} onPress={()=>navigate()}>
                <Text style={styles.title}>{title}</Text>
                {!icon?<Entypo name="chevron-right" size={24} color="#fbfbfb" />:null}
            </Pressable>
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
        marginBottom:40,
        paddingLeft:16,
    },
    box_title:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:16
    },
    title:{
        color:"#FBFBFB",
        fontFamily:'Euclid-Medium',
        fontSize:16
    },
    content:{
        marginTop:22
    }
})

export default Section