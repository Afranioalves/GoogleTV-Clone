import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import MoviesList from './src/screens/moviesList';
import Details from './src/screens/details';

const Stack = createStackNavigator()

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Details' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="List" component={MoviesList}/>   
            <Stack.Screen name="Details" component={Details}/>       
        </Stack.Navigator>
      </NavigationContainer>
   

  );
}

