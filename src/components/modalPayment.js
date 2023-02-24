import React, {useState} from 'react'
import {
    Modal,
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    Pressable,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import Aquaman from '../../assets/img/aquaman.jpg';
import { MaterialIcons, Feather, Entypo } from '@expo/vector-icons';

const ModalPayment = ({isCloseModal, isOpenModal,moviename, poster}) =>{
    
    return(
        <Modal 
        transparent={true}
        animationType='slide'
        visible={isOpenModal}
        statusBarTranslucent={true}
        nRequestClose={()=>isCloseModal()}
    >
        <View  style={styles.modalContainer}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <Pressable onPress={()=>isCloseModal()}>
                      <Feather name="arrow-left" size={24} color="#626365" />
                    </Pressable>
                    <Text style={styles.title}>Adicionar cartão de crédito ou de{'\n'}débito</Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Número do cartão</Text>
                    <Entypo name="credit-card" size={24} color="#808080" />
                    <TextInput 
                        style={styles.inputCard}
                        autoFocus={true}
                        inputMode='numeric'
                        keyboardType='numeric'
                        selectionColor='#E20A4D'
                        
                    />
                </View>


              
              <View style={styles.containerDescribe}>
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
                    <Pressable style={styles.buyButton}>
                        <Text style={styles.buyText}>Guardar</Text>
                    </Pressable>
               </View>
               
            </View>
           
        </View>

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
        position:'relative'
      
    },
    modal:{
        backgroundColor:'#fff',
        flex:1,
        width:'100%',
        paddingTop:48,
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
    header:{
        flexDirection:'row',
        paddingHorizontal:16,
    },
    title:{
        fontFamily:'Euclid-Medium',
        fontSize:16,
        marginLeft:16,
        color:'#1F1F1F',
    },
    containerDescribe:{
        position:'absolute',
        width:'100%',
        bottom:20
    },
    buyButton:{
        height:40,
        backgroundColor:'#DBDBDB',
        marginHorizontal:16,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginTop:8
    },
    buyText:{
        fontFamily:'Euclid-Regular',
        color:"#292929",
    },
    containerInput:{
        flexDirection:'row',
        paddingHorizontal:12,
        marginTop:32,
        borderColor:'#E20A4D',
        height:50,
        borderWidth:2,
        marginHorizontal:24,
        alignItems:'center',
        borderRadius:6,
        position:'relative'
    },
    inputCard:{
        marginLeft:12,
        height:30,
        width:'100%',
        fontFamily:'Euclid-Regular',
        fontSize:16
    },

    label:{
        color:'#E20A4D',
        fontFamily:'Euclid-Regular',
        fontSize:12, 
        position:'absolute',
        top:-10,
        left:8,
        backgroundColor:'#fff',
        paddingHorizontal:4
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

export default ModalPayment