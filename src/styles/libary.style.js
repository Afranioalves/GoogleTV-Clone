import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1F1F1F',
        flex:1, 
        paddingTop:36
    },
    scrollViewContainer:{
        height:'89%',
        paddingTop:24,
        display:'flex',
        justifyContent:'center'
    },
    header:{
        height:55,
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:14,
        borderBottomColor:'#303030',
        borderBottomWidth:1,
        position:'relative'
    },
    titleHeader:{
        color:'#FBFBFB',
        fontFamily:'Euclid-Medium'
    },
    lineHeader:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#FBFBFB',
        height:3,
        width:40,
        borderTopLeftRadius:4,
        borderTopRightRadius:4
    },
    content:{
      alignItems:'center',
      marginBottom:89
    },
    contentTitle:{
        fontSize:22,
        fontFamily:'Euclid-Medium',
        marginBottom:8,
        color:'#f1f1f1',
    },
    describe:{
        textAlign:'center',
        fontSize:16,
        color:'#9C9DA1',
        fontFamily:'Euclid-Regular'
    },
    buttonExplor:{
        backgroundColor:'#DBDADF',
        height:40,
        width:150,
        alignItems:'center',
        justifyContent:'center',
        marginTop:42,
        borderRadius:32
    },
    textExplor:{
        color:'#1F1F1F',
        fontFamily:'Euclid-Regular'
    }
})

export default styles