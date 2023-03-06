import React from 'react'
import {Modal, Text, View, TouchableOpacity, StyleSheet, Image, Pressable} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const ModalPreview = ({isCloseModal, isOpenModal, addCard, moviename, poster}) =>{
    
    return(
        <Modal 
        transparent={true}
        animationType='slide'
        visible={isOpenModal}
        nRequestClose={()=>isCloseModal()}
        statusBarTranslucent={true}
    >
        <TouchableOpacity  style={styles.modalContainer} onPress={()=>isCloseModal()}>
            <View style={styles.modal}>
            <View style={styles.mark}></View>
               <Text style={styles.name}>Google Play</Text>
               <View style={styles.line}></View>
               <View style={styles.containerInfo}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={poster} style={styles.cover} resizeMode='cover'/>
                        <View>
                            <Text style={styles.moviename}>{ moviename.length >= 20 ? `${moviename.substring(0,20)}...`:moviename}</Text>
                            <Text style={styles.usermail}>afranio777alves@gmail.com</Text>
                        </View>
                    </View>
                    <Text style={styles.price}>3,53 US$</Text>
               </View>
               <Text style={styles.decribe}>
                    Adicione um método de pagamento à sua Conta {'\n'}
                    Google para concluir a compra. As suas informações {'\n'}
                    de pagamento são apenas visíveis para a Google.
               </Text>
               <Pressable style={styles.btnAdd} onPress={()=>addCard()}>
                    <MaterialIcons name="credit-card" size={24} color="#B81951" style={{marginRight:16}}/>
                    <Text style={styles.textAdd}>
                        Adicionar cartão de crédito ou de débito
                    </Text>

               </Pressable>
            </View>
           
        </TouchableOpacity>

    </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.25)',
        zIndex:99,
      
    },
    modal:{
        backgroundColor:'#fff',
        height:330,
        width:'100%',
        borderRadius:24,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        paddingTop:32,
        position:'relative'
    },
    cover:{
        height:45,
        width:35,
        borderRadius:2,
        marginRight:16
    },
    containerInfo:{
        flexDirection:'row',
        paddingHorizontal:24,
        justifyContent:'space-between',
        marginBottom:16
    },
    line:{
        height:1,
        backgroundColor:'#C7C7C7',
        marginBottom:16
    },
    name:{
        paddingHorizontal:24,
        marginBottom:16,
        color:'#626365',
        fontFamily:'Euclid-Medium',
        fontSize:15
    },
    price:{
        fontFamily:'Euclid-Medium',
        color:"#000",
        fontSize:16,
        marginLeft:12
    },
    moviename:{
        fontFamily:'Euclid-Medium',
        color:'#131313',
        fontSize:18,
        marginTop:-4

    },
    usermail:{
        fontFamily:'Euclid-Light',
        color:'#626365',
        fontSize:12
    },
    decribe:{
        paddingHorizontal:24,
        color:'#626365',
        fontSize:13,
        fontFamily:'Euclid-Regular',
    },
    btnAdd:{
        height:65,
        marginHorizontal:24,
        marginTop:24,
        flexDirection:'row',
        paddingHorizontal:32,
        alignItems:'center',
        borderWidth:1,
        borderColor:'#A1A1A1',
        borderRadius:4,
    },
    textAdd:{
        fontFamily:'Euclid-Regular',
        color:'#000',
    },
    mark:{
        height:4,
        backgroundColor:'#A1A1A1',
        position:'absolute',
        width:80,
        alignSelf:'center',
        borderRadius:20,
        top:16
    }
})

export default ModalPreview