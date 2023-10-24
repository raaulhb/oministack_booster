import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView } from "react-native";
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { RectButton } from 'react-native-gesture-handler'


const Detail = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }


  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
          <Icon 
          name="arrow-left" 
          size={20} 
          color="#34CB79" />
        </TouchableOpacity>
      <Image 
      style={styles.pointImage} 
      source={{ uri: 'https://images.unsplash.com/photo-1526399743290-f73cb4022f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' }} />
      <Text style={styles.pointName}>Mercadão do João</Text>
      <Text style={styles.pointItems}>Lampadas, Oleo de Cozinha</Text>

      <View style={styles.address}>
        <Text style={styles.addressTitle}>Endereço</Text>
        <Text style={styles.addressContent}>Franca, SP</Text>
      </View>
    </View>

    <View style={styles.footer}>
      <RectButton style={styles.button} onPress={() => {}}>
        <FontAwesome name='whatsapp' size={20} color='#FFF' />
        <Text style={styles.buttonText}>Whatsapp</Text>
      </RectButton>

      <RectButton style={styles.button} onPress={() => {}}>
        <FontAwesome name='envelope-o' size={20} color='#FFF' />
        <Text style={styles.buttonText}>E-mail</Text>
      </RectButton>
    </View>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },
  
  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingBottom: 0,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
});

export default Detail;