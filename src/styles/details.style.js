import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1F1F1F',
        flex:1,
    },
    cover:{
        height:350,
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingTop:36 
    }, 
    background:{
        height:350,
        backgroundColor:'#1F1F1F',
    },
    btn_trailer:{
        backgroundColor:'red',
        height:42,
        width:100,
        alignSelf:'center',
        marginTop:40,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
  
  
})

export default styles