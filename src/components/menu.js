import { View, Text, Pressable, StyleSheet } from "react-native";
import { Foundation, MaterialCommunityIcons, Feather, Octicons, FontAwesome } from '@expo/vector-icons';

const colorText = '#1f1f1f'
const background = '#C6C8C7'

const Menu = ({page, navigate}) =>{
    return(
        <View style={styles.container}>
            <Pressable style={styles.option} onPress={()=>navigate('Home')}>
                <View style={[styles.pageSelected,{backgroundColor:page=='Home'?background:null}]}>
                    {
                    page == 'Home' ?
                    <Foundation name="home" size={24} color={colorText} />:
                    <Octicons name="home" size={24} color="#C6C8C7" /> 
                   }
                </View>
                <Text style={[styles.page,{fontFamily:page=='Home'?'Euclid-Bold':'Euclid-Regular'}]}>Página inicial</Text>
            </Pressable>

            <Pressable style={styles.option} onPress={()=>navigate('Libary')}>
                <View style={[styles.pageSelected,{backgroundColor:page=='Libary'?background:null}]}>
                    {
                        page=='Libary' ?
                        <MaterialCommunityIcons name="play-box-multiple" size={24} color={colorText} />:
                        <MaterialCommunityIcons name="play-box-multiple-outline" size={24} color="#C6C8C7" />
                    }
                   
                 </View>
                <Text style={[styles.page,{fontFamily:page=='Libary'?'Euclid-Bold':'Euclid-Regular'}]}>Biblioteca</Text>
            </Pressable>

            <Pressable style={styles.option} onPress={()=>navigate('ListView')}>
                <View style={[styles.pageSelected,{backgroundColor:page=='ListView'?background:null}]}>
                    {
                    page=='ListView' ?
                    <FontAwesome name="bookmark" size={24} color={colorText} />:
                    <Feather name="bookmark" size={24} color="#C6C8C7" />
                    }
                </View>
                <Text style={styles.page}>Lista de visualização</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#303030',
        display: 'flex',
        flexDirection: 'row',
        position:'absolute',
        bottom:0,
        width:'100%',
        height:80,
        paddingRight:4,
        alignItems: 'center',
        justifyContent:'space-between',
    },
    option:{
        display: 'flex',
        alignItems: 'center',
        width:'33%',
        position:'relative'
    },
    page:{
        fontFamily:'Euclid-Regular',
        marginTop:40,
        fontSize:12,
        color:"#C6C8C7"
    },
    pageSelected:{
        width:70,
        height:35,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:20,
        position:'absolute',
        top:0
    }
})
export default Menu