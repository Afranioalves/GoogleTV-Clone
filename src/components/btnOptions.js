import { Pressable, View, Text, StyleSheet } from "react-native"


const Option = ({title, children, action})=>{
    return(
        <Pressable style={styles.pressable} onPress={()=>action()}>
            <View style={styles.boxIcon}>
                {children}
            </View>
            <Text style={styles.text}>{title}</Text>
      </Pressable>
    )
}
const styles = StyleSheet.create({
    boxIcon:{
        borderColor:"#D6D6D6",
        borderWidth:1,
        width:35,
        height:35,
        borderRadius:200/2,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    pressable:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:"#D6D6D6",
        fontFamily:'Euclid-Light',
        fontSize:12,
        marginTop:6
    }
})
export default Option