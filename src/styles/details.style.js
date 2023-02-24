import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1F1F1F',
        flex:1,
        paddingBottom:24
    },
    cover:{
        height:350,
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingTop:36,
       
       
    }, 
    background:{
        height:350,
        backgroundColor:'#1F1F1F',
       
       
    },
    btn_trailer:{
        backgroundColor:'#313131',
        height:42,
        width:110,
        alignSelf:'center',
        marginTop:40,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    text_trailer:{
        marginLeft:8,
        color:"#f1f1f1",
        fontFamily:'Euclid-Regular'
    },
    containerTitle:{
        marginTop:-100,
        paddingHorizontal:16,
        marginBottom:16 
       
    },
    moviename:{
        fontSize:34,
        color:"#fff",
        fontFamily:'Euclid-Regular',
        lineHeight:40
    },
    containerTimeline:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:6
    },
    tomato:{
        width:12,
        height:12,
        marginRight:6
    },
    timeline:{
        color:"#D6D6D6",
        fontFamily:'Euclid-Light',
        fontSize:12
    },
    count:{
        color:"#D6D6D6",
        fontFamily:'Euclid-Light',
        fontSize:12,
        marginRight:16
    },
    containerDescription:{
        paddingHorizontal:16,
        position:'relative',
       // marginTop:24
    },
    description:{
        color:"#D6D6D6",
        fontFamily:'Euclid-Light',
    },
    btnMore:{
        position:'absolute',
        right:16,
        bottom:-24,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
    },
    textMore:{
        color:'#fff',
        fontFamily:'Euclid-Medium',
    },
    containerOptions:{
        display:'flex',
        flexDirection:'row',
        marginTop:40,
        paddingHorizontal:24,
        justifyContent:'space-between'
    },
    containerButtons:{
        display:'flex',
        flexDirection:'row',
        marginTop:32,
        justifyContent:'center',
        marginBottom:32
    },
    line:{
        height:1,
        backgroundColor:'#414246',
        marginTop:-12,
        marginBottom:24
    },
    titleInfo:{
        color:'#fff',
        fontFamily:'Euclid-Regular',
        marginBottom:20,
        paddingHorizontal:16,
        fontSize:15
    },
    containerInfo:{
        paddingHorizontal:16,
        display:'flex',
        flexDirection:'row',

    },
    subContainer:{
        marginRight:32
    },
    section_1:{
        
    },
    title:{
        color:'#fff',
        fontFamily:'Euclid-Regular',
        fontSize:14,
        marginBottom:4
    },
    describe:{
        color:"#D6D6D6",
        fontFamily:'Euclid-Light',
        fontSize:13,
        marginBottom:16
    }
  
})

export default styles