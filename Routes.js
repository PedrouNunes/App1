import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { EstadoGlobalProvider } from './EstadoGlobal';
import TelaInicial from './Telas/TelaInicial';
import TelaAcionamento from './Telas/TelaAcionamento';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Inicio'
          component={TelaInicial}
          options={{
            title: 'Seja Bem-Vindo',
            headerStyle: { backgroundColor: 'red' }, // Set the background color to red
            headerTintColor: 'white', // Set the text color to white
          }}
        />
        <Stack.Screen
          name='Acionar'
          component={TelaAcionamento}
          options={{
            headerStyle: { backgroundColor: 'red' }, // Set the background color to red
            headerTintColor: 'white', // Set the text color to white
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
