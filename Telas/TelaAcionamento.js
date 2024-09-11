import { useState } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";

export default function TelaAcionamento({ navigation, route }) {
  // Estado para gerenciar a variável acionou e a imagem
  const [acionou, setAcionou] = useState(false);

  // Função para alternar o estado acionou e a imagem
  const handlePress = () => {
    setAcionou(!acionou);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Acionamento</Text>
        {/* Botão de Imagem */}
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={acionou ? require('../assets/lampada2.png') : require('../assets/lampada4.png')}
            style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: 1 }}
          />
        </TouchableOpacity>
      
        <Text style={{  fontSize: 20 }}>A lâmpada está:</Text>
        {/* Texto Condicional */}
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 1, flexShrink: 1 }}>
          {acionou ? 'Ligada' : 'Desligada'}
        </Text>

        {/* Botão de Voltar */}
        <View style={{ marginTop: 20 }}>
          <Button
            color={'red'}
            title="Voltar"
            onPress={() => navigation.goBack()} // Função para voltar à tela anterior
          />
        </View>
    </View>
  );
}
