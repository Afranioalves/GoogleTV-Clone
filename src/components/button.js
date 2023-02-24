import { Pressable, StyleSheet, Text } from "react-native"
const Button = ({text, price, marginRight, click}) =>{
    return(
        <Pressable style={[styles.button, {marginRight}]} onPress={()=>click()}>
            <Text style={styles.text}>{`${text} ${price}`}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#f1f1f1',
        width:165,
        height:55,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
    text:{
        color:'#1F1F1F',
        fontFamily:'Euclid-Medium',
        fontSize:14
    }
})

export default Button