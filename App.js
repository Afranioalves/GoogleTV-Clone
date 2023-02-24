import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from './src/screens/home';
import MoviesList from './src/screens/moviesList';
import Details from './src/screens/details';
import Search from './src/screens/search';
import Libary from './src/screens/libary';
import ListView from './src/screens/listView';
import { Provider } from './src/context/listContext';



const Stack = createStackNavigator()

const App = ()=> {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' 
        screenOptions={{
          headerShown:false,
          gestureEnabled: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid
        }}
        >
            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="List" component={MoviesList}/>   
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="Libary" component={Libary}/>
            <Stack.Screen name="ListView" component={ListView}/>              
        </Stack.Navigator>
      </NavigationContainer>
   

  );
}

export default () =><Provider><App/></Provider>