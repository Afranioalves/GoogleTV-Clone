import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1F1F1F',
        flex:1, 
        paddingTop:16
    },
    header:{
        paddingHorizontal:16,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        height:80,
        borderBottomColor:'#353535',
        paddingBottom:16,
        paddingTop:18
    },
    inputSearch:{
        flex:1,
        color:'#CCCCCC',
        fontFamily:'Euclid-Regular',
        marginHorizontal:16,
        fontSize:15
    },
    BoxMovieResult:{
        paddingHorizontal:16,
        paddingVertical:16,
        marginTop:16
    }
})

export default styles