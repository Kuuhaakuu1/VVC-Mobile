import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Homepage from './pages/Homepage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login"
                      component={Login}
                      options={{headerStyle: {backgroundColor: '#212832',},headerTintColor: '#fff', }}/>
        <Stack.Screen name="SignUp"
                      component={SignUp}
                      options={{headerStyle: {backgroundColor: '#212832',},headerTintColor: '#fff', }}/>
        <Stack.Screen name="Homepage"
                      component={Homepage}
                      options={{headerStyle: {backgroundColor: '#212832',},headerTintColor: '#fff', }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;