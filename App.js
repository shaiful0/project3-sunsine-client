import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import BasketScreen from './Screens/BasketScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
import HomeScreen from './Screens/HomeScreen';
import PreparingOrderScreen from './Screens/PreparingOrderScreen';
import RestrurentScreen from './Screens/RestrurentScreen';
import { store } from './store';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/*screens*/}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restrurent" component={RestrurentScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
          options={{presentation:'modal', headerShown:false}}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
          options={{presentation:'fullScreenModal', headerShown:false}}
          />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}
          options={{presentation:'fullScreenModal', headerShown:false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

