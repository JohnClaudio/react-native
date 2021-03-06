import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import { StyleSheet, View } from 'react-native';
import Page_Login from './src/login/Page_Login';
import Page_Home from './src/produtos/Page_Home';

console.log(store.getState());

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={css.maincontainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="login"
              component={Page_Login}
              options={{ title: '' }}
    
            />

            <Stack.Screen
              name="Home"
              component={Page_Home}
              options={{ title: 'Bem Vindo' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const css = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});

