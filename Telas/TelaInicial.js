import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";

export default function TelaInicial({ navigation, route }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
       <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginBottom: 20, marginLeft: 15 , textAlign: 'center' }}>
        Bem-vindo ao App IAR onde facilitamos sua vida.
      </Text>
      <Image
        source={require('../assets/lampada3.png')}
        style={{ width: 500, height: 250, resizeMode: 'contain', marginBottom: 20 }}
      />
       <Button title='Controle' color={'red'} onPress={() => { navigation.navigate('Acionar', { titulo: 'Historia' }) }}/>
      
       </View>
  );
}
